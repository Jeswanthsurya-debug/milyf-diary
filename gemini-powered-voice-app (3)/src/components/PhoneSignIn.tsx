import { ArrowLeft, CheckCircle2, LockKeyhole, Phone, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, type ConfirmationResult } from "firebase/auth";
import { FirebaseError, initializeApp, type FirebaseApp } from "firebase/app";
import { FIREBASE_CONFIG } from "../config";

type Props = { onBack: () => void };

const isConfigured = Object.values(FIREBASE_CONFIG).every((value) => Boolean(value) && !value.startsWith("YOUR_"));

function normalisePhone(phone: string) {
  return phone.replace(/\D/g, "").slice(0, 10);
}

export function PhoneSignIn({ onBack }: Props) {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [sent, setSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const recaptchaRef = useRef<RecaptchaVerifier | null>(null);
  const confirmationRef = useRef<ConfirmationResult | null>(null);
  const firebaseAppRef = useRef<FirebaseApp | null>(null);

  useEffect(() => () => { recaptchaRef.current?.clear(); }, []);

  const sendCode = async () => {
    if (!isConfigured) {
      setMessage("Backup isn't set up yet");
      return;
    }
    if (phone.length !== 10) {
      setMessage("Enter a valid 10-digit phone number.");
      return;
    }
    setBusy(true);
    setMessage("");
    try {
      if (!firebaseAppRef.current) firebaseAppRef.current = initializeApp(FIREBASE_CONFIG);
      const auth = getAuth(firebaseAppRef.current);
      recaptchaRef.current?.clear();
      recaptchaRef.current = new RecaptchaVerifier(auth, "phone-recaptcha", { size: "invisible" });
      confirmationRef.current = await signInWithPhoneNumber(auth, `+91${phone}`, recaptchaRef.current);
      setSent(true);
      setMessage("Code sent. Check your phone.");
    } catch (error) {
      const firebaseError = error as FirebaseError;
      setMessage(firebaseError.code === "auth/invalid-phone-number" ? "Enter a valid 10-digit phone number." : "We couldn't send the code. Please try again.");
      recaptchaRef.current?.clear();
      recaptchaRef.current = null;
    } finally {
      setBusy(false);
    }
  };

  const verifyCode = async () => {
    if (!confirmationRef.current || code.length !== 6) {
      setMessage("Enter the 6-digit code.");
      return;
    }
    setBusy(true);
    setMessage("");
    try {
      await confirmationRef.current.confirm(code);
      setVerified(true);
      setMessage("Phone verified. Backup is ready to connect.");
    } catch {
      setMessage("That code didn't work. Please check it and try again.");
    } finally {
      setBusy(false);
    }
  };

  return <main className="phone-signin-screen"><header className="phone-signin-bar"><button type="button" className="phone-back-button" onClick={onBack}><ArrowLeft size={19} /> Settings</button><div className="phone-brand"><span>D</span><strong>Diary</strong></div><div className="phone-bar-space" /></header><section className="phone-signin-card"><div className="phone-signin-icon"><LockKeyhole size={22} /></div><span className="eyebrow">Private backup</span><h1>Back up my diary</h1><p className="phone-intro">Sign in with your phone number to keep a safe copy of your pages.</p>{!isConfigured ? <div className="backup-not-ready"><ShieldCheck size={20} /><strong>Backup isn't set up yet</strong><p>Add your Firebase details in <code>src/config.ts</code> to turn on phone sign-in.</p></div> : verified ? <div className="backup-success"><CheckCircle2 size={25} /><strong>Phone verified</strong><p>Your diary is ready for the next backup step.</p></div> : <><label className="phone-input-label"><span>Phone number</span><div className="phone-input-wrap"><strong>+91</strong><input value={phone} onChange={(event) => setPhone(normalisePhone(event.target.value))} inputMode="tel" maxLength={10} placeholder="10 digit number" autoFocus={!sent} /></div></label>{sent && <label className="phone-input-label"><span>6-digit code</span><input className="code-input" value={code} onChange={(event) => setCode(event.target.value.replace(/\D/g, "").slice(0, 6))} inputMode="numeric" maxLength={6} placeholder="000000" autoFocus /></label>}<button id="phone-recaptcha" className="phone-primary-button" type="button" disabled={busy} onClick={sent ? verifyCode : sendCode}>{busy ? "Please wait…" : sent ? "Verify" : "Send code"}</button></>}{message && <p className={`phone-message ${verified ? "success" : ""}`} role="status">{message}</p>}<p className="phone-privacy"><Phone size={14} /> Your diary stays private on this device.</p></section></main>;
}