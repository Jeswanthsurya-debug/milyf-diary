import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { MOODS } from "../lib/moods";
import type { MoodId } from "../lib/types";

export function MoodPicker({ value, onChange, onClose }: { value: MoodId; onChange: (mood: MoodId) => void; onClose?: () => void }) {
  return <div className="mood-popover" role="dialog" aria-label="Choose a mood"><div className="mood-popover-head"><span>How are you feeling?</span>{onClose && <button type="button" onClick={onClose} aria-label="Close"><X size={16} /></button>}</div><div className="mood-options">{MOODS.map((mood) => <motion.button whileTap={{ scale: 0.96 }} key={mood.id} type="button" className={value === mood.id ? "is-selected" : ""} onClick={() => { onChange(mood.id); onClose?.(); }}><i style={{ background: mood.color }} />{mood.label}{value === mood.id && <Check size={14} />}</motion.button>)}</div></div>;
}