import { emergencySms, type LanguageKey } from "../i18n";

export type MapKind = "police" | "hospital";
export type Coordinates = { latitude: number; longitude: number };
export type SavedContact = { id: string; name: string; phone: string };
export type AssistantAction =
  | { type: "none" }
  | { type: "call" | "message"; contactId: string };

function hasCoordinates(coordinates: Coordinates | null | undefined): coordinates is Coordinates {
  return Boolean(
    coordinates &&
      Number.isFinite(coordinates.latitude) &&
      Number.isFinite(coordinates.longitude),
  );
}

export function buildMapsUrl(kind: MapKind, coordinates?: Coordinates | null) {
  const query = kind === "police" ? "police+station" : "hospital";
  if (!hasCoordinates(coordinates)) {
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  }
  return `https://www.google.com/maps/search/${query}/@${coordinates.latitude},${coordinates.longitude},14z`;
}

export function isValidIndianPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const localNumber = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
  return /^\d{10}$/.test(localNumber);
}

export function buildEmergencyMessage(language: LanguageKey, coordinates?: Coordinates | null) {
  if (hasCoordinates(coordinates)) {
    const location = `https://maps.google.com/?q=${coordinates.latitude},${coordinates.longitude}`;
    return emergencySms[language].withLocation(location);
  }
  return emergencySms[language].withoutLocation;
}

export function parseAssistantAction(raw: string, savedContacts: SavedContact[]): AssistantAction {
  try {
    const parsed = JSON.parse(raw) as { type?: unknown; contactId?: unknown };
    if ((parsed.type !== "call" && parsed.type !== "message") || typeof parsed.contactId !== "string") {
      return { type: "none" };
    }
    const contactExists = savedContacts.some((contact) => contact.id === parsed.contactId);
    return contactExists ? { type: parsed.type, contactId: parsed.contactId } : { type: "none" };
  } catch {
    return { type: "none" };
  }
}

export function canSaveContacts(contacts: SavedContact[]) {
  return contacts.length >= 3 && contacts.every((contact) => contact.name.trim().length > 0 && isValidIndianPhone(contact.phone));
}