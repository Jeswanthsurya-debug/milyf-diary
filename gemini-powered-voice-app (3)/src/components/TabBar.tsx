import { BookOpen, CalendarDays, Settings2 } from "lucide-react";

export type Tab = "journal" | "calendar" | "settings";
export function TabBar({ tab, onChange }: { tab: Tab; onChange: (tab: Tab) => void }) {
  return <nav className="tab-bar" aria-label="Main navigation"><button className={tab === "journal" ? "is-active" : ""} type="button" onClick={() => onChange("journal")}><BookOpen size={18} /><span>Journal</span></button><button className={tab === "calendar" ? "is-active" : ""} type="button" onClick={() => onChange("calendar")}><CalendarDays size={18} /><span>Calendar</span></button><button className={tab === "settings" ? "is-active" : ""} type="button" onClick={() => onChange("settings")}><Settings2 size={18} /><span>Settings</span></button></nav>;
}