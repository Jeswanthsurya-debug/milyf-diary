import { EMPTY_SETTINGS, type DiaryEntry, type DiarySettings, type DiaryState } from "./types";

export const STORAGE_KEY = "diary-local-v1";

const fallbackState: DiaryState = { version: 1, entries: [], settings: { ...EMPTY_SETTINGS } };

export function loadDiary(): DiaryState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallbackState;
    const parsed = JSON.parse(raw) as Partial<DiaryState>;
    return {
      version: 1,
      entries: Array.isArray(parsed.entries) ? parsed.entries as DiaryEntry[] : [],
      settings: { ...EMPTY_SETTINGS, ...(parsed.settings ?? {}) } as DiarySettings,
    };
  } catch {
    return fallbackState;
  }
}

export function saveDiary(state: DiaryState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

export function clearDiary() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Privacy features should stay usable if storage is unavailable.
  }
}