# Port & Maritime Tech Specialist — 880-Lesson Global Curriculum Tracker

Personal learning progress tracker for the Port & Maritime Tech Specialist advanced professional
curriculum — six independent tracks, 880 lessons, 35 named capstone projects.

## What this is

A standalone HTML tracker for the full curriculum defined in
[`global_learning_path_final.md`](global_learning_path_final.md) (v4.2):

| Track | Domain | Lessons | Outcome |
|---|---|---|---|
| **W** | Web Development, Advanced Professional & AI-Native | W1–W260 | Enterprise-grade, AI-native full-stack developer, 10 capstone projects |
| **L** | Linux Systems Administration, Advanced | L1–L110 | RHCSA-track + enterprise sysadmin capability |
| **N** | Configuration Automation / Ansible, Advanced | N1–N110 | RHCE-track + enterprise automation platform capability |
| **AU** | Workflow Automation Engineering (n8n), Advanced | AU1–AU110 | Enterprise automation architect capability |
| **TOS** | Port, Maritime & Terminal Operating Systems | TOS1–TOS140 | Internationally-standardized port operations & TOS mastery |
| **PY** | Python Engineering, Advanced | PY1–PY150 | Production-grade Python automation & systems engineering |

Each track is independent — no fixed calendar, no cross-track sequencing dependency. Progress is
tracked per lesson code (`W47`, `L102`, `TOS12`, …), matching the Day-N auto-resume protocol used
in the Claude Project instructor (see `PROMPT.md`).

**Note on lesson detail:** W/L/N/AU carry an exact, individually-named topic per lesson straight
from the source document. TOS and PY are only specified at the phase level in the source (each
phase spans many lessons) — the tracker groups those lessons under their phase name rather than
inventing per-lesson topics the curriculum doesn't specify.

## Target

Globally competitive **Port & Maritime Tech Specialist**
Markets: Rotterdam · Hamburg · Singapore · Antwerp · DP World (global) · Germany EU Blue Card

## How to use

1. Open the tracker: [samiulAsumel.github.io/pts-sas](https://samiulAsumel.github.io/pts-sas)
2. Pick a track tab, then click a lesson number to select it
3. Click **"Start lesson"** — a `jump <code> — <topic>` prompt copies to clipboard automatically
4. Paste in your **Port Tech Specialist** Claude project → lesson begins
5. Come back and click **"Mark complete"** — progress saves in your browser

## Features

- 880-lesson curriculum across 6 independent tracks, each with its own progress stats
- Phase-grouped module headers within every track (e.g. `L8 — Performance & Kernel Tuning`)
- ★ badges on the 35 named capstone-project lessons, with the project name shown on selection
- Live search by lesson code, track, or topic — composes with track and status filters
- Track tabs (All / W / L / N / AU / TOS / PY) + status filters (Completed / Not started)
- Overall + per-track progress bars
- Dark / light theme toggle, persisted and respects system preference
- Export and import progress as JSON — portable across browsers/devices
- Keyboard shortcuts: `/` search, arrow keys to navigate, `Enter` to start, `C` to complete, `Esc` to clear
- Undo last completion
- Reset with confirmation
- Progress persists in browser localStorage — no account needed
- Accessible: keyboard-navigable lesson tiles, ARIA labels, focus states, reduced-motion support

## Stack

Plain HTML + JavaScript. No build step. Works offline.

```
index.html   — page markup, curriculum data, and application logic (self-contained)
support.js   — rendering runtime loaded by index.html
favicon.svg  — site icon
```

## Deploy

Static site — deployable as-is to:

- **GitHub Pages** — serve from the repo root or `gh-pages` branch
- **Cloudflare Workers / Pages** — see `wrangler.jsonc` on the `cloudflare/workers-autoconfig` branch (serves the repo root as static assets)

## Related

- `global_learning_path_final.md` — the source-of-truth curriculum document (v4.2)
- `PROMPT.md` — the Claude Project system prompt implementing the Day-N teaching protocol
- Claude Project: Port Tech Specialist (six-track, 880-lesson instructor system)
- GitHub: [github.com/samiulAsumel](https://github.com/samiulAsumel)
