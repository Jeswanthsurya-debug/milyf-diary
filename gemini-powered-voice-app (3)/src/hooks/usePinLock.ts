import { useEffect, useState } from "react";
import type { DiarySettings } from "../lib/types";

export function usePinLock(settings: DiarySettings) {
  const [locked, setLocked] = useState(settings.pinEnabled);
  useEffect(() => { if (!settings.pinEnabled) setLocked(false); }, [settings.pinEnabled]);
  useEffect(() => {
    const onVisibility = () => { if (document.visibilityState === "hidden" && settings.pinEnabled) setLocked(true); };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [settings.pinEnabled]);
  return { locked, unlock: () => setLocked(false), lock: () => setLocked(true) };
}