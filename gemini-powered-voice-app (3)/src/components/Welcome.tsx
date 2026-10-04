import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Welcome({ ownerName, dedication, onOpen }: { ownerName: string; dedication: string; onOpen: () => void }) {
  return <main className="welcome-screen"><motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="welcome-inner"><div className="welcome-mark">D</div><span className="eyebrow">A little place for you</span><h1>Hi, {ownerName}</h1><p className="dedication">{dedication}</p><button className="primary-button welcome-button" type="button" onClick={onOpen}>Open my diary <ArrowRight size={18} /></button></motion.div></main>;
}