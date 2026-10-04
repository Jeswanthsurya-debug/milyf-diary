import { LockKeyhole } from "lucide-react";
import { useState } from "react";

export function PinLock({ ownerName, onUnlock }: { ownerName: string; onUnlock: () => void }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const submit = () => { if (pin.length === 4) { onUnlock(); setPin(""); setError(false); } else setError(true); };
  return <main className="pin-screen"><div className="pin-card"><div className="pin-icon"><LockKeyhole size={23} /></div><span className="eyebrow">Private pages</span><h1>Welcome back, {ownerName}</h1><p>Enter your four digit PIN to open your diary. This is a privacy screen, not encryption.</p><div className="pin-dots">{[0, 1, 2, 3].map((index) => <i key={index} className={pin.length > index ? "filled" : ""} />)}</div><input className="sr-only" autoFocus inputMode="numeric" maxLength={4} value={pin} onChange={(event) => setPin(event.target.value.replace(/\D/g, "").slice(0, 4))} onKeyDown={(event) => { if (event.key === "Enter") submit(); }} aria-label="Four digit PIN" /><button className="primary-button" type="button" onClick={submit}>Unlock diary</button>{error && <small className="form-error">Enter your four digit PIN.</small>}</div></main>;
}