# milyf-diary
# MILYF 🤎

A private, minimal diary in baby pink, black and white. Made as a gift for someone who loves writing.

MILYF opens like a stack of paper pages: pick a page, it zooms open, and you write. Everything is saved on the device, with no account and no login.

## Features

**Writing**
- Paper-style journal grid. Each page opens with a smooth zoom animation, like the iOS Pages document browser
- Optional title, large serif date, and a distraction-free writing page
- Text size: Small, Medium, Large
- Page styles: Plain, Lined, Dotted. The pattern appears only inside the page, never outside it
- Word count and automatic saving while you type

**Finding and organising**
- Date picker that asks for the **month and year first**, then the day
- Month shortcut chips (Jan to Dec) with a year switcher, and entries grouped by month
- Search across titles and text
- Favourites (heart) and a favourites filter

**Mood markers**
- Eight moods, each with a soft colour: Happy, Loved, Calm, Excited, Grateful, Tired, Anxious, Sad
- Mood dot shown on every page card, in the editor and on the calendar

**Calendar**
- Month view with a mood dot on every day that has a page
- Tap a day to open its page or start a new one
- A quiet mood summary bar for the month

**Personal touches**
- Welcome screen that asks "What should I call you?"
- A personal message shown on the welcome screen and the empty state, editable in Settings
- Name and message have a Save button and also save automatically

**Looks and comfort**
- Light, Dark and Auto themes. Dark mode ("Blush Night") keeps baby pink prominent
- Respects reduced motion, visible focus outlines, large touch targets, iPhone safe areas
- Add-to-Home-Screen tip for iPhone

**Backup**
- Copy-and-paste backup and restore of the whole diary

## Privacy

- Everything is stored in the browser's `localStorage` on the device, under the key `milyf.v1`
- No accounts, no servers, no analytics, no tracking
- The only network request is Google Fonts for the typefaces
- Clearing browser data deletes the diary, so use Backup now and then

## Design

| Token | Light | Dark |
|---|---|---|
| Background | `#FFF7F9` | `#140C10` |
| Paper | `#FFFFFF` | `#2A1D24` |
| Text | `#111111` | `#FFF1F5` |
| Baby pink | `#F8C8DC` | `#F8C8DC` |

Fonts: Playfair Display (titles and dates), DM Sans (interface and writing), Caveat (greeting).

## Tech

One self-contained `index.html` file with HTML, CSS and vanilla JavaScript. No build step, no dependencies.

## Run it

Open `index.html` in a browser. To host it, use GitHub Pages: Settings → Pages → deploy from the `main` branch.

## Personalise

Change the default message by editing the `DED` constant near the top of the script, or just edit it in the app under Settings → Personal.

## Data format

    {
      "name": "",
      "ded": "personal message",
      "theme": "auto | light | dark",
      "ps": "plain | lined | dotted",
      "entries": [
        { "id": "", "date": "YYYY-MM-DD", "title": "", "text": "",
          "mood": "", "fav": false, "ps": "plain", "sz": "m", "upd": 0 }
      ]
    }

## Known limits

- The diary lives on one device and one web address. It does not sync between devices
- On iPhone, the Safari tab and the Home Screen app keep separate data. Add it to the Home Screen first, then start writing, or move data with Backup
- Moving to a different web address also starts a fresh diary, so restore from a backup

## Roadmap (wanted, not built yet)

- [ ] PIN privacy screen
- [ ] Install pop-up and offline support (PWA)
- [ ] Photos on pages
- [ ] Tags with `#words`
- [ ] "On this day" memories
- [ ] Daily prompts and a "3 good things" template
- [ ] Time capsule entries
- [ ] Voice dictation
- [ ] Year in review card
- [ ] Focus mode with a word goal
- [ ] Optional phone-number sign-in with encrypted cloud backup

## License

Personal project. All rights reserved.

Made with love. 🤎
