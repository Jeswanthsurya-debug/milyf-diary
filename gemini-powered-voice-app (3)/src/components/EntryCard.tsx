import { motion } from "framer-motion";
import { Heart, MoreHorizontal, Plus } from "lucide-react";
import { formatShortDate } from "../lib/dates";
import { moodFor } from "../lib/moods";
import type { DiaryEntry } from "../lib/types";

export function NewEntryCard({ onClick }: { onClick: () => void }) {
  return <motion.button whileHover={{ y: -4, rotate: -0.6 }} whileTap={{ scale: 0.98 }} className="entry-card new-entry-card" type="button" onClick={onClick}><span className="new-entry-icon"><Plus size={22} /></span><strong>New entry</strong><small>Make a little space for today.</small></motion.button>;
}

export function EntryCard({ entry, onClick, onMenu }: { entry: DiaryEntry; onClick: () => void; onMenu: (event: React.MouseEvent) => void }) {
  const mood = moodFor(entry.mood);
  return <motion.button layoutId={`entry-${entry.id}`} whileHover={{ y: -5, rotate: entry.id.charCodeAt(0) % 2 ? 0.6 : -0.6 }} whileTap={{ scale: 0.985 }} className="entry-card paper-card" type="button" onClick={onClick} onContextMenu={onMenu}><span className="card-date">{formatShortDate(entry.date)}</span><span className="card-mood"><i style={{ background: mood.color }} />{mood.label}</span>{entry.favorite && <Heart className="card-heart" size={16} fill="currentColor" />}{entry.title && <strong className="card-title">{entry.title}</strong>}<span className="card-preview">{entry.content.replace(/<[^>]+>/g, " ").trim() || "A blank page waiting for your thoughts."}</span><span className="card-menu" aria-hidden="true"><MoreHorizontal size={16} /></span></motion.button>;
}