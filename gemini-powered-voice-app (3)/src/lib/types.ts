export type ThemeMode = "light" | "dark" | "auto";
export type PageStyle = "plain" | "lined" | "dotted";
export type FontChoice = "serif" | "sans" | "handwriting";
export type TextSize = "s" | "m" | "l";
export type MoodId = "happy" | "loved" | "calm" | "excited" | "grateful" | "tired" | "anxious" | "sad";

export type DiaryEntry = {
  id: string;
  date: string;
  title: string;
  content: string;
  mood: MoodId;
  favorite: boolean;
  pageStyle: PageStyle;
  font: FontChoice;
  textSize: TextSize;
  createdAt: string;
  updatedAt: string;
};

export type DiarySettings = {
  ownerName: string;
  dedication: string;
  theme: ThemeMode;
  defaultPageStyle: PageStyle;
  pinEnabled: boolean;
  pin: string;
  welcomed: boolean;
};

export type DiaryState = {
  version: 1;
  entries: DiaryEntry[];
  settings: DiarySettings;
};

export const EMPTY_SETTINGS: DiarySettings = {
  ownerName: "",
  dedication: "",
  theme: "auto",
  defaultPageStyle: "plain",
  pinEnabled: false,
  pin: "",
  welcomed: false,
};