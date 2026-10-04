import { AnimatePresence } from "framer-motion";
import { BookOpen, CalendarDays, Settings2 } from "lucide-react";
import { useEffect, useState } from "react";
import { DEDICATION, OWNER_NAME } from "./config";
import { CalendarView } from "./components/CalendarView";
import { Editor } from "./components/Editor";
import { JournalGrid } from "./components/JournalGrid";
import { PinLock } from "./components/PinLock";
import { PhoneSignIn } from "./components/PhoneSignIn";
import { Settings } from "./components/Settings";
import { TabBar, type Tab } from "./components/TabBar";
import { Welcome } from "./components/Welcome";
import { useDiary } from "./hooks/useDiary";
import { usePinLock } from "./hooks/usePinLock";

export default function App() {
  const diary = useDiary();
  const { settings } = diary;
  const [tab, setTab] = useState<Tab>("journal");
  const [activeEntryId, setActiveEntryId] = useState<string | null>(null);
  const [phoneSignInOpen, setPhoneSignInOpen] = useState(false);
  const { locked, unlock } = usePinLock(settings);

  useEffect(() => { document.documentElement.dataset.theme = settings.theme; }, [settings.theme]);
  useEffect(() => { if (!document.body.dataset.swRegistered && "serviceWorker" in navigator) { navigator.serviceWorker.register("/sw.js").catch(() => undefined); document.body.dataset.swRegistered = "true"; } }, []);

  const ownerName = settings.ownerName || OWNER_NAME;
  const dedication = settings.dedication || DEDICATION;
  const activeEntry = diary.entries.find((entry) => entry.id === activeEntryId) ?? null;

  if (!settings.welcomed) return <Welcome ownerName={ownerName} dedication={dedication} onOpen={() => diary.updateSettings({ welcomed: true })} />;
  if (locked) return <PinLock ownerName={ownerName} onUnlock={unlock} />;
  if (phoneSignInOpen) return <PhoneSignIn onBack={() => setPhoneSignInOpen(false)} />;

  const createEntry = (date?: string) => { const entry = diary.addEntry(date); setActiveEntryId(entry.id); };
  const finishEntry = () => { if (activeEntry && !activeEntry.title.trim() && !activeEntry.content.replace(/<[^>]+>/g, "").trim()) diary.removeEntry(activeEntry.id); setActiveEntryId(null); };
  const renderContent = () => {
    if (tab === "calendar") return <CalendarView entries={diary.entries} onDay={(date, entry) => entry ? setActiveEntryId(entry.id) : createEntry(date)} />;
    if (tab === "settings") return <Settings settings={settings} state={diary.state} onSettings={diary.updateSettings} onImport={diary.importState} onPhoneSignIn={() => setPhoneSignInOpen(true)} />;
    return <JournalGrid entries={diary.entries} ownerName={ownerName} dedication={dedication} onNew={() => createEntry()} onOpen={(entry) => setActiveEntryId(entry.id)} onFavorite={(id) => { const entry = diary.entries.find((item) => item.id === id); if (entry) diary.updateEntry(id, { favorite: !entry.favorite }); }} onDuplicate={diary.duplicateEntry} onDelete={diary.removeEntry} onRestore={diary.restoreEntry} />;
  };

  return <main className="diary-app"><header className="app-header"><div className="brand"><div className="brand-icon">D</div><div><strong>Diary</strong><span>just for you</span></div></div><nav className="desktop-tabs" aria-label="Primary navigation"><button className={tab === "journal" ? "active" : ""} type="button" onClick={() => setTab("journal")}><BookOpen size={16} /> Journal</button><button className={tab === "calendar" ? "active" : ""} type="button" onClick={() => setTab("calendar")}><CalendarDays size={16} /> Calendar</button><button className={tab === "settings" ? "active" : ""} type="button" onClick={() => setTab("settings")}><Settings2 size={16} /> Settings</button></nav><div className="header-spacer" /></header><div className="app-content"><AnimatePresence mode="wait">{activeEntry ? <Editor key={activeEntry.id} entry={activeEntry} onBack={finishEntry} onChange={(patch) => diary.updateEntry(activeEntry.id, patch)} onDone={finishEntry} /> : <div key={tab} className="tab-content">{renderContent()}</div>}</AnimatePresence></div>{!activeEntry && <TabBar tab={tab} onChange={setTab} />}</main>;
}