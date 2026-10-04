import { useEffect, useMemo, useState } from "react";
import { DEDICATION, OWNER_NAME } from "../config";
import { saveDiary, loadDiary } from "../lib/storage";
import { todayKey } from "../lib/dates";
import type { DiaryEntry, DiarySettings, DiaryState, FontChoice, PageStyle } from "../lib/types";

function newEntry(date = todayKey(), pageStyle: PageStyle = "plain"): DiaryEntry {
  const now = new Date().toISOString();
  return { id: crypto.randomUUID(), date, title: "", content: "", mood: "calm", favorite: false, pageStyle, font: "serif", textSize: "m", createdAt: now, updatedAt: now };
}

export function useDiary() {
  const [state, setState] = useState<DiaryState>(() => {
    const loaded = loadDiary();
    return {
      ...loaded,
      settings: { ...loaded.settings, ownerName: loaded.settings.ownerName || OWNER_NAME, dedication: loaded.settings.dedication || DEDICATION },
    };
  });

  useEffect(() => {
    const timer = window.setTimeout(() => saveDiary(state), 180);
    return () => window.clearTimeout(timer);
  }, [state]);

  const entries = useMemo(() => [...state.entries].sort((a, b) => b.date.localeCompare(a.date) || b.updatedAt.localeCompare(a.updatedAt)), [state.entries]);

  const updateSettings = (patch: Partial<DiarySettings>) => setState((current) => ({ ...current, settings: { ...current.settings, ...patch } }));
  const addEntry = (date = todayKey()) => {
    const entry = newEntry(date, state.settings.defaultPageStyle);
    setState((current) => ({ ...current, entries: [entry, ...current.entries] }));
    return entry;
  };
  const updateEntry = (id: string, patch: Partial<DiaryEntry>) => setState((current) => ({ ...current, entries: current.entries.map((entry) => entry.id === id ? { ...entry, ...patch, updatedAt: new Date().toISOString() } : entry) }));
  const removeEntry = (id: string) => setState((current) => ({ ...current, entries: current.entries.filter((entry) => entry.id !== id) }));
  const restoreEntry = (entry: DiaryEntry) => setState((current) => ({ ...current, entries: [entry, ...current.entries] }));
  const duplicateEntry = (id: string) => {
    const original = state.entries.find((entry) => entry.id === id);
    if (!original) return;
    const copy = { ...original, id: crypto.randomUUID(), title: original.title ? `${original.title} (copy)` : "", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    setState((current) => ({ ...current, entries: [copy, ...current.entries] }));
  };
  const importState = (next: DiaryState) => setState({ version: 1, entries: next.entries ?? [], settings: { ...state.settings, ...(next.settings ?? {}) } });

  return { state, entries, settings: state.settings, updateSettings, addEntry, updateEntry, removeEntry, restoreEntry, duplicateEntry, importState };
}

export function updateEntryText(update: (patch: Partial<DiaryEntry>) => void, title: string, content: string, font: FontChoice, pageStyle: PageStyle) {
  update({ title, content, font, pageStyle });
}