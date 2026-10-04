import { beforeEach, describe, expect, it } from "vitest";
import { moodStats } from "./lib/moods";
import { loadDiary, saveDiary, STORAGE_KEY } from "./lib/storage";
import type { DiaryEntry } from "./lib/types";

const entry = (date: string, mood: DiaryEntry["mood"]): DiaryEntry => ({ id: `${date}-${mood}`, date, title: "", content: "hello", mood, favorite: false, pageStyle: "plain", font: "serif", textSize: "m", createdAt: date, updatedAt: date });

beforeEach(() => localStorage.clear());

describe("Diary storage", () => {
  it("returns a safe empty state when storage is empty", () => {
    expect(loadDiary()).toMatchObject({ version: 1, entries: [] });
  });

  it("round trips entries and settings through the versioned key", () => {
    const state = { version: 1 as const, entries: [entry("2025-01-01", "calm")], settings: { ownerName: "Ana", dedication: "For you", theme: "dark" as const, defaultPageStyle: "lined" as const, pinEnabled: false, pin: "", welcomed: true } };
    expect(saveDiary(state)).toBe(true);
    expect(localStorage.getItem(STORAGE_KEY)).toContain("Ana");
    expect(loadDiary()).toEqual(state);
  });

  it("merges missing settings when loading an older backup", () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, entries: [], settings: { welcomed: true } }));
    expect(loadDiary().settings).toMatchObject({ welcomed: true, theme: "auto", defaultPageStyle: "plain" });
  });
});

describe("mood statistics", () => {
  it("counts only entries in the requested month", () => {
    const entries = [entry("2025-02-01", "calm"), entry("2025-02-07", "calm"), entry("2025-02-11", "loved"), entry("2025-03-01", "sad")];
    const stats = moodStats(entries, new Date(2025, 1, 1));
    expect(stats.total).toBe(3);
    expect(stats.primary?.id).toBe("calm");
    expect(stats.primary?.count).toBe(2);
  });

  it("returns no primary mood for an empty month", () => {
    expect(moodStats([], new Date(2025, 1, 1)).primary).toBeNull();
  });
});