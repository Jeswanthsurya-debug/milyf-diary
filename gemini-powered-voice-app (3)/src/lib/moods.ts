import type { DiaryEntry } from "./types";
import type { MoodId } from "./types";

export const MOODS: Array<{ id: MoodId; label: string; color: string }> = [
  { id: "happy", label: "Happy", color: "#FFE3A3" },
  { id: "loved", label: "Loved", color: "#F8C8DC" },
  { id: "calm", label: "Calm", color: "#CDE7E0" },
  { id: "excited", label: "Excited", color: "#FFC9A8" },
  { id: "grateful", label: "Grateful", color: "#E8D5F2" },
  { id: "tired", label: "Tired", color: "#D8DDE8" },
  { id: "anxious", label: "Anxious", color: "#F5C6CB" },
  { id: "sad", label: "Sad", color: "#C9D8F0" },
];

export function moodFor(id: MoodId) {
  return MOODS.find((mood) => mood.id === id) ?? MOODS[2];
}

export function moodStats(entries: DiaryEntry[], month: Date) {
  const prefix = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, "0")}`;
  const monthEntries = entries.filter((entry) => entry.date.startsWith(prefix));
  const counts = MOODS.map((mood) => ({ ...mood, count: monthEntries.filter((entry) => entry.mood === mood.id).length }));
  const total = monthEntries.length;
  const primary = counts.slice().sort((a, b) => b.count - a.count)[0];
  return { counts, total, primary: primary?.count ? primary : null };
}

export function writingStreak(entries: DiaryEntry[]) {
  const dates = new Set(entries.map((entry) => entry.date));
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  let count = 0;
  while (dates.has(toDateKey(cursor))) {
    count += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return count;
}

export function toDateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}