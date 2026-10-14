# Track Star — Design System 1.02

Track Star is a music show and the rating network built around it. The host plays songs to
people on the street and to guest artists, and they have to name them. Half a million
followers, 129 episodes across three years, six formats: **Testing, Versus, In 10 songs,
Live, Sit-downs, Extended cuts.**

The website is not a Letterboxd clone. It is the show's archive with a rating network on
top — MTV's programming instinct crossed with Letterboxd's record of taste. The catalogue,
artwork and 30-second previews come from Apple Music, and that is where the music plays.

---

## What changed in 1.02, and what did not

1.01 was dark-only, Archivo and Newsreader, orange `#ED672C`. **1.02 is an addition, not a
replacement:** the client Figma is the source of truth for palette and type, so **light is the
base** and everything that was dark survives as the dark peer and the stage surface.

| | 1.01 | 1.02 |
|---|---|---|
| Page | `#050506` ink | `#FFF4E9` tan, white cards, `#0C0C0C` text |
| Orange | `#ED672C` | `#FF5B00` (`#E04F00` for the score numeral on tan) |
| UI type | Archivo variable | **Paralucent** Light 300 / Medium 400 / Demi Bold 500 / Bold 600 (the client Adobe project's mapping) |
| Type ramp | Editorial display scale | Caption 12 · Footnote 13 · Subheadline 15 · Body 17 · Title 22 · Supertitle 28 |
| Serif | Newsreader for scores **and** review prose | Newsreader italic for **scores and the word Certified only**; prose is Paralucent Light 17/22 |
| Themes | one | light and dark as peers, `auto` following the device |
| Baseline | 1440 desktop | **390 mobile**, one layout scaling up |

**What survives intact:** the chyron, the die-cut seal, the weighted dial, the score in
Newsreader italic, orange as a signal rather than a surface, the grain, the editorial density,
and left-aligned full-width layout. The identity was never the black background.

**The stage stays dark in both themes.** Wherever the show plays — the episode player, the
episode hero, the cinema overlay — `data-surface="stage"` flips that subtree to black the way a
room dims for a screening. The same components work on both surfaces with no extra variants.

---

## The three levels — what we keep, what we reskin, what we propose

The client approved a reskin, not a rebuild, and `trackstar-ds/ia-contract.md` is the agreement.
The previous designer's Figma (exported as `uploads/bardi-*.png`, file at
https://www.figma.com/design/YhfBIeXDKnW138h62lHEPD/Trackstar.net) is the house people already
live in. Three levels keep it from being moved by accident.

**Level 1 — the house. Matched exactly, never improved.** Information architecture, labels,
navigation, flow order, the anatomy of a profile, a review and the Trackstar 100.

- **Header, every screen:** back chevron left, search bar centre, hamburger right. The search bar
  is the engine of the product, so it never collapses to an icon. The feed swaps the chevron for
  the mark.
- **Tab labels, verbatim:** *All reviews · Featured · Following* · *All lists · Featured ·
  Following* · *Reviews · Lists · Saved* · *Reviews · Tracklist*. Album actions: *Review · Add to
  · Play*. Nothing gets renamed to something we like better.
- **Profile anatomy:** avatar, name, @handle, bio, location, the counter row, then the tabs. Top 5
  and Current rotation inside, five slots each, + on the empty ones.
- **Creator versus viewer** are two versions of a screen, not one screen with a button swapped.

**Level 2 — the skin. Ours, signed off.** Everything you can see: the 1.02 palette, Paralucent
with their size names, spacing, radii, elevation, the components, their states, motion, 44px
targets, modals, skeletons, designed empty states. One item here is a fix rather than a
preference: `#959595` secondary text measures 2.9:1 on tan and fails, so light uses `#6F6F6F`
(4.6:1) and dark uses `#9A938C` — same token name, opposite direction.

**Level 3 — proposals, shown beside and never instead.** Built twice, labelled, client picks.

| Proposal | Where it lives |
|---|---|
| The two scores on the album screen | `ui_kits/trackstar-app/album-scores.html` — theirs, plus two hierarchies |
| The episode screen | `ui_kits/trackstar-app/episode.html` — does not exist in production |
| The guessed scoreboard | inside the episode proposal — ten pips, green named, orange ring missed |
| The stage treatment | `data-surface="stage"`, and `themes.html` shows it holding in both themes |
| Desktop enhancements | `desktop.html` — gated on width **and** pointer **and** reduced-motion |

### Three Level 1 questions we did not answer ourselves

The contract's one rule: if a change touches Level 1 it stops being a design decision and
becomes a question. These three are open.

1. **Their IA has no bottom navigation**, so this build has none either, and production has no
   floating action button anywhere — so screen-to-screen navigation lives in their hamburger and
   creating opens from the surface you are creating from: the composer on a record, the + on an
   empty slot, the CTA in an empty state. A five-tab bar would be a Level 1 change. Worth asking,
   because reaching the hamburger on a 6.7-inch phone is a stretch for a thumb.
2. **Their album header is centred**, which contradicts our left-aligned full-width rule. The
   matched screen stays centred exactly as drawn; proposals A and B show it left-aligned, so the
   comparison answers the alignment question at the same time as the score question.
3. **Their dial has a Reset**, which means a score can be cleared. We never designed that state,
   so `ScoreDial` now has it — and clearing keeps an Undo in the same spot, because a number that
   vanishes on one tap with no way back is data loss, not a state.

---

## Sources this system was built from

| Source | What it gave us |
|---|---|
| `trackstar-ds/ia-contract.md` | **The three levels.** What is matched exactly, what is ours to reskin, what gets built twice and shown beside. |
| `uploads/bardi-*.png` (six exports) | The previous designer's screens: components sheet, feed, album, lists, three profile states, Trackstar 100. Every label, counter value and review string in the app kit comes from these. |
| `trackstar-ds/tokens.css` (attached codebase) | **The numeric source of truth for 1.02.** Palette, the named type ramp, mobile metrics, the theme blocks and the stage surface. |
| `trackstar-ds/mobile-patterns.md` | The mobile baseline: 44px targets, draft preservation, `svh`, 16px inputs, hover behind a media query, the build order. **Superseded in part:** the frame is 393 and the gutter 24 (production), and the bottom sheet is retired in favour of one centred modal at every width (ADR 0006, amendment 2026-08-18) — so its thumb-zone and sheets-over-modals guidance no longer applies. |
| `trackstar-ds/theming.md` | Light and dark as peers, what changes beyond colour, the stage rule, the contrast fixes. |
| `trackstar-ds/desktop-enhancements.md` | What is additive at 1024+, how the enhancement is gated, the CORS and YouTube constraints. |
| Client Figma (referenced by the docs, not accessible to us) | https://www.figma.com/design/YhfBIeXDKnW138h62lHEPD/Trackstar.net |
| `Track Star — Design System v1.01.fig` (mounted Figma file) | The component inventory (6 sets + a 17-glyph icon set) and every variant axis. File key `ntCfmiMgsg2wryao8BoZql` → https://www.figma.com/design/ntCfmiMgsg2wryao8BoZql |
| `trackstar-ds/icons.svg` | The 17 icon glyphs, copied verbatim into `assets/icons.svg` and inlined into `Icon.jsx`. |
| `uploads/logo trackstar.svg` + PNGs | The brand mark, copied into `assets/`. |

### Fonts — served the way production serves them

**No binaries, no `@font-face`, no substitution — and no network in the token chain.**
Production ships no font files: Paralucent comes from the client-owned Adobe Fonts (Typekit)
project, asserted by
`tests/test_global_chrome.py::test_paralucent_uses_the_client_owned_adobe_web_project` (SOF-340),
which also asserts the old project (`ueh3qpa.css`) is not used. Newsreader is Google-served.

Neither stylesheet is `@import`ed. `@import` is render-blocking, so importing them from
`tokens/fonts.css` would put every colour, size and radius behind a third-party request — an
unreachable Adobe would stop the page painting at all. Production's words, from
`core/templates/core/base.html`: *"The link is a preload that becomes a stylesheet once it lands,
so a slow or unreachable Adobe never holds the first paint."*

**Required markup for consumers**, in `<head>`, before `styles.css`:

```html
<link rel="preconnect" href="https://use.typekit.net">
<link rel="preconnect" href="https://use.typekit.net" crossorigin>
<link rel="preload" as="style" href="https://use.typekit.net/yto0mgb.css"
      onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="https://use.typekit.net/yto0mgb.css"></noscript>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..600&display=swap"
      onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..600&display=swap"></noscript>

<link rel="stylesheet" href="styles.css">
```

Link only `styles.css` and you get the fallback stack with the full layout, which is the correct
trade: **the type is a progressive enhancement, never a gate on the first paint.** Every card page
in this project carries the block above, and every one of them paints completely with both font
hosts unreachable.

The Adobe project maps **Light, Medium, Demi Bold and Bold to 300, 400, 500 and 600** — those
four numbers are the only weights this system names. Asking for 700 gets Bold one step early,
which is the drift this system carried until 1.02.

---

## Index

- `styles.css` — the entry point. A list of `@import`s, nothing else.
- `tokens/` — `fonts.css`, `colors.css`, `spacing.css`, `typography.css`, `elevation.css`,
  `motion.css`, `layout.css`, `base.css`
- `components/` — `actions/`, `icon/`, `tabs/`, `search/`, `chyron/`, `seal/`, `scoring/`,
  `episode-card/`, `review-card/`, `form/`, `pill/`, `avatar/`, `menu/` (one directory per
  concern, so each gets its own card)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand, Motion)
- `ui_kits/trackstar-app/` — **1.02, mobile first.** Feed, Album, Lists, Trackstar 100, Profile in
  three states, the two-score comparison, the episode proposal, both themes, desktop.
- `ui_kits/trackstar-web/` — 1.01 dark editorial web surfaces: episode, artist, album, profile
- `assets/` — `logo-trackstar.svg`, the PNGs, `icons.svg`
- `SKILL.md` — the Agent Skill wrapper

### Components

The Figma inventory — six families plus the icon set — with two primitives added for the
client's own header and tab bar. Every one is theme-aware for free, because each reads only the
semantic layer.

| Component | Variants | Rule |
|---|---|---|
| `Button` | Style: Primary / Secondary / Tertiary / Ghost | One Primary per view. 44px minimum. The album row is the reference: Review primary, Add to and Play secondary. Hover only behind `(hover: hover) and (pointer: fine)`; touch feedback is press — `scale(.97)`, no colour change. |
| `Tabs` | 2–4 segments | Tan track, orange pill on the selected segment. **The labels are contract text** — see Level 1. Segments share the width, and the control measures its own fit: if any label would clip it steps type and padding down a rung and re-measures, so a verbatim label never truncates on a narrow frame or in a substitute family. |
| `SearchBar` | — | Lives in the header on every screen. 16px input floor, or iOS zooms the page. Placeholder is theirs: "Search Albums, Artists...". |
| `Chyron` | Size: Hero / Card | Orange kicker welded to the guest name; three words maximum in the kicker. **A badge marks the exception:** `kicker={null}` omits the plate rather than drawing it empty — the format is "Testing" on 78 of 129 episodes. With no kicker the name plate closes its own left border. Card size on mobile, Hero over the stage on desktop. |
| `CertifiedSeal` | State: Certified / Locked | Two jobs, because their file uses it for both: a record's certified score (`score` + `ratings`) and a person's badge. **Badge threshold is five, everywhere** — the earned seal reads "5 scores in", never a lifetime total. A die-cut 22-point starburst, the silhouette of `Icon/seal`, no corner radius. No glyph beside the word "Certified" in the score mode: at 11.6px it read as a dot. Below ~80px it reduces to the numeral alone. |
| `ScoreDial` | State: Scored / Empty / **Cleared** | 0 to 10 with one decimal, magnet toward whole numbers. It must feel heavy; never a plain slider. On mobile it is *the* motion moment. Cleared is not Empty — it keeps the Undo. |
| `EpisodeCard` | Size: Large / Small | The still already carries the guest's name — no pill on top of it. Missing metadata drops the line; episode numbers are never shown. **A badge marks the exception:** `playable` draws the "Watch" chip and a card with no video draws no badge at all — 125 of 129 have none. |
| `ReviewCard` | Kind: Review / Quick | Their anatomy, matched: author and timestamp, score right-aligned, record with artist, prose, Standout tracks collapsible with number / title / duration, then likes and comments with an overflow. Prose clamps to two lines. Avatars are initials, never photographs. |
| `Icon` | 21 glyphs | 24px grid, 1.5 stroke, round caps. Swap by name, never a variant per icon. |
| `FormField` | Type: text / email / password / tel / url / number / textarea / select · State: default / ok / bad / disabled | Production's `.field-block`. The status line belongs to the field and reserves its 16px row whether or not it has text, so validation never shifts what is under it. Inputs are 16px or iOS zooms the page. |
| `FieldInfo` | State: idle / open | The "what do you use this for?" explainer. The trigger is `type="button"` and **never a submit** — one form owns the onboarding stepper. It opens on hover, focus **and** tap, because a touch screen has no hover and the copy is a promise about a member's data. |
| `Checkbox` | State: unchecked / checked / disabled / bad | Production's `.check` row. Native input with `accent-color`, so the tick, the focus ring and the keyboard behaviour are the platform's. The label is inside the 44px target. No indeterminate state — nothing uses one. |
| `Pill` | Size: default / big · State: filled / **empty** | Metadata only, never orange. `empty` is the slot with nothing in it yet — the right render for the 99 episodes with no date or duration — and there is no `disabled` prop, so the two cannot be confused. |
| `Avatar` | Free `size`, default 34 | Initials, or an image when we have one; a failed load falls back to initials, never a broken image. 34 is the only confirmed avatar size, so no named scale is frozen yet. |
| `MenuItem` | State: default / selected / disabled | One row for the overlay menu and for search suggestions: icon, label, trailing mark. `selected` is the only orange in a menu. `disabled` is a row that exists but cannot be taken — Tracklists, with `trailing="Soon"`. |

**Intentional additions**, each traceable to something the client's screens do that the 1.01
file has no part for:

- **`Tabs`** and **`SearchBar`** — their header and their four tab bars. Both are in the client's
  component sheet; neither exists in the 1.01 Figma file.
- **`Icon`** as a wrapper — the file has 17 separate `Icon/*` symbols, and a single name-swapped
  component is the only way to honour "swap by instance, never a variant per icon" in code.
  `ICONS` is the glyph data behind it.
- **Four glyphs** on top of the sprite's 17: `menu` (their hamburger), `more` (the review card's
  overflow), `pin` (their pinned-rail marker), `reset` (their dial's Reset). Same grid, same
  stroke, same caps.
- **`ScoreDial`'s Cleared state** and **`CertifiedSeal`'s score mode** — states their components
  have and ours did not.
- **The form layer** — `FormField`, `FieldInfo`, `Checkbox` — plus **`Pill`**, **`Avatar`** and
  **`MenuItem`**. These are not inventions either: they are the `.field-block`, `.field-row`,
  `.field-status`, `.field-info`, `.check`, `.pill` / `.pill--big` / `.pill--empty`, `.avatar`
  and overlay-menu class families that production already ships in
  `core/static/core/styles.css`, modelled here for the first time. Fifteen account and settings
  templates need the field.
- **A word, not a glyph, on `FieldInfo`'s trigger.** The set has 21 icons and none of them is an
  "i", so the trigger reads "What for?" rather than carrying an invented mark. An info glyph is
  the obvious candidate if the set ever grows.
- **`status/ok` and `status/bad`**, because a field with a `bad` state needs a colour and this
  system had no red. `status/bad` is production's `--danger` verbatim — `#D3282D` light,
  `#FF5A5F` dark; `status/ok` reuses the green primitive already in the palette, lightened by
  derivation in dark. Neither touches `status/guessed`, which stays the on-air scoreboard.

**Not yet adopted, listed rather than half-migrated.** `ReviewCard`'s own `Initials` block and the
web kit's `ProfileAvatar` both still work and were left alone; swapping them to `Avatar` is a
later round. Same for the motion tokens: `.press` holds a `.18s` literal, `Tabs` holds `.2s`, the
modal has no open animation yet, and the sleeve-wall keyframes carry their own duration. The
Motion card keeps that list.

**Not built:** `Sleeve` (a record sleeve with a spine) is listed as pending in the source
ledger but does not exist in either Figma file, so it is not in this system.

---

## Content fundamentals

**Warm and direct, no irony, never brand-voiced.** The product talks like someone who runs a
record shop, not like software.

- **You, not we.** "Your taste, in five records." "Scores save when you sign in."
- **Buttons say what happens, and the verb survives the whole flow.** `Rate`, `Add to list`,
  `Play along`, `Start rating`. The action keeps its name from the card to the confirmation.
- **Empty states are invitations, not errors.** Not "No reviews yet" but "Nobody has written
  about this record. Go first." Not "Not certified" but "3 more scores".
- **A badge appears only when it marks the exception.** A label that is true almost every time does
  not inform — it spends a badge announcing the normal case, and it makes the reader stop to ask
  what it is for. The counts that set this: the chyron kicker reads "Testing" on **78 of 129**
  episodes, and "Still only" was on **125 of 129** cards. So the "Watch" chip appears only where
  there is video, the kicker plate only where the format is not the usual one, and the omitted case
  renders **nothing** — never an empty box, never a greyed-back label, never a plate hidden with CSS
  from outside. **Omission is the component's job:** a declaration you can only beat with
  `!important` is a declaration that belongs to the component, which is why `kicker={null}` exists
  instead of a `:empty` rule in a consumer's stylesheet. The seal follows the same rule one level
  down — no glyph beside the word "Certified", because at 11.6px next to 15.6px type it read as a
  dot rather than a seal. Anything that stays on screen for the common case has to earn it by
  telling the reader something they could not already see. See `guidelines/badge-exception.card.html`.
- **The threshold for adding a badge is a number, not a feeling.** Before adding one, count how
  often it will be true. If the answer is "almost always", the badge is decoration and the
  information belongs somewhere else, or nowhere.
- **Sentence case everywhere except the kickers.** Chyron bars, eyebrows and section captions
  are uppercase with `.14em`–`.17em` tracking; nothing else is.
- **The Certified threshold is five and it is not negotiable per surface.** Five is a
  deliberately low bar: the network is new, and a profile that cannot earn its badge in an
  evening looks empty and stays empty. So the seal is a *milestone*, not a scoreboard —
  everybody's says "5 scores in". Lifetime volume ("214 scores") lives on the profile metadata
  line, where a big number is honest and does not devalue the badge.
- **The contribution count counts everything** — ratings plus reviews plus standout tracks.
  People contribute more than they write, and the number should say so.
- **Numbers are always one decimal.** `8.4`, never `8` or `8.40`. En dash for "no score yet".
- **Dates are short and human:** "Jul 3", "May 15". Never ISO, never a full month name.
- **Episode numbers are never displayed.** The archive's numbering is Linktree ordering, not the
  show's real episode numbers, so printing it would be a lie.
- **Metadata is a middot list that shortens rather than lies:** "Testing · Jul 3 · 12 min",
  and where the archive has no date, simply "Testing".
- **The theme switch is labelled in words** — Auto · Light · Dark — not a sun and a moon, so
  nobody has to guess whether the icon shows the current state or the thing it will do.
- **No emoji.** Ever. The icon set covers everything the product needs to point at.
- **Section heads are declarative and slightly editorial:** "The ten songs", "What the room
  said", "More from the archive", "Records, and the people keeping them".

---

## Visual foundations

### Colour

Light is the base: `bg/page` `#FFF4E9` tan, `bg/card` white, `bg/well` `#F6E9DB`, `bg/shade`
ink at 5%, `bg/selected` `#FFF0E6`. Text is `#0C0C0C` primary, `#6F6F6F` secondary, `#7A7A7A`
muted. Dark is the peer: `#050506` page, `#151113` cards, `#EDE7DF` / `#9A938C` / `#8C857F`
text.

Orange lives in exactly four places: the score readout, the Certified seal, the chyron kicker,
and **one primary action per view**. That action belongs to the thing it acts on — Review on a
record, Score the episode, Follow on a profile — and it is the only orange control on the screen
because the score readout and the seal are usually orange already: a second orange button steals
the signal from the number. Every other screen-level CTA is therefore a ghost button, and three
orange buttons in a row is the mistake this design replaces. Green (`status/guessed`) appears in exactly one place: the **on-air scoreboard**
on the episode screen. Guessed is a filled green pip; missed is a one-pixel orange ring, never
filled, because ten filled orange pips would out-shout the score.

**Build only from the semantic layer** — `bg/*`, `text/*`, `accent/*`, `status/*`, `border/*`,
`card/*`, `gap/*`, `pad/*`, `corner/*`, and the mobile metrics. Never reach for a primitive
(`tan`, `ink`, `orange`, `paper`, `space`, `radius`) and never hardcode a hex.

**Two contrast fixes, carried forward from the handoff.** `#959595` secondary on tan fails at
small sizes; the docs moved it to `#7A7A7A`, which still measures **3.96:1**. So body-size
secondary text is `#6F6F6F` (4.6:1) and `#7A7A7A` is held to 15px-and-up labels and eyebrows.
On black the same grey is too dark, so dark uses `#9A938C`. Same token name, opposite direction.

### Type

Two families and nothing else. **Paralucent** is the whole UI at four weights — Light 300 for
body and prose, Medium 400 for captions, footnotes and subheadlines, Demi Bold 500 for titles,
buttons, names and every bold role, Bold 600 for Supertitle, the chyron kicker and large
numerals. Two weights may be named outside the roles: `--weight-emphasis` 500 and
`--weight-display` 600. Letter spacing is `-.02em` at
every size. **Newsreader italic** keeps exactly one job: score numerals and the word
*Certified* — that serif is what ties the seal to the rest of the product.

The ramp is the client's, with their names: Caption 12/16, Footnote 13/18, Subheadline 15/20,
Body 17/22, Title 22/28, Supertitle 28/34. On desktop **only two sizes move** — Title to 26 and
Supertitle fluid to 44. 17px body is correct on a laptop too, and scaling it up is how sites
start looking like slide decks. Review prose caps at 68 characters per line.

### Layout, mobile first

Design at **393 wide** — production's implementation reference width — and let it scale: real
devices run 375 to 430, so nothing depends on an exact width, and the rail between the gutters
is fluid, never hard-coded. One layout that stretches, not a layout per device. Side gutter is
**24 at every supported width**, the way production sets it. Content never touches the edge
except three things on purpose: **album artwork, episode stills and horizontal rails**, which bleed past the gutter so
the next card peeks in and tells you it scrolls.

Everything tappable is at least **44 by 44 with 8 between**, and the primary action sits **in the
flow of the content it acts on**, not in a layer hovering over the page: Review on the record,
Score the episode under the episode, the + on the empty slot it fills. Where a screen has one
subject, that action may pin to the bottom of the viewport — the episode screen does exactly that
— but nothing global floats: **no bottom tab bar and no floating action button**, because
production has neither and they are what made this read as a phone app rather than a responsive
site. **No `env(safe-area-inset-*)`** for the same reason: production uses it zero times. Use
**`svh` and `dvh`, never `vh`**. Inputs are 16px minimum or iOS zooms the whole page.

Left-aligned and full-width, closing at production's **920px** measure with 24px gutters, never
a centred narrow column with empty gutters. The reading column — the Feed's surface and the cap
on the shared tabs picker — is **680px**, one token so the picker and its column cannot drift
apart (SOF-306).

### Modals, one presentation at every width

Reviews, followers, add-to-list and the score flow open as a **centred modal on the native
`<dialog>` element**, the same box on a 393px phone and a 1440px desktop. Capped at
`modal/max` 88svh, `overscroll-behavior: contain`, Esc or the close button to dismiss.

**The mobile sheet is retired** — ADR 0006, amendment 2026-08-18, which supersedes the sheet
guidance in `trackstar-ds/mobile-patterns.md`. After three rounds of real-device keyboard work
the sheet fought the phone viewport: the top layer's `inset: 0` box tracks the layout viewport
whose bottom edge hides behind dynamic toolbars, `dvh` lags in the top layer, and iOS pans the
visual viewport past its own bottom edge to chase the caret. The restyle, the touch physics and
the 1024 switch are all gone. Production keeps modal, popover and inline edit — native
`<dialog>` and the Popover API, no library. **Draft preservation is still required** — if a modal
closes with text in it, the text survives, and there is one save action at the end rather than a
mix of autosave and manual save.

### Separation, backgrounds and imagery

**Light separates with a one-pixel border and no shadow. Dark separates with shadow and an
almost invisible inset line.** Both come out of `--card-border` and `--card-lift`, so `.card` is
one rule in both themes and there is no dark variant of a card.

**The scrim exists only where it is needed.** Dark needs a gradient under text over images or
nothing is legible; light does not, and adding one makes it muddy — `--scrim` is a gradient in
dark and on the stage, and `none` in light. On the stage: a bottom-to-top fade plus 5% fractal
noise at `soft-light`. Imagery is warm and slightly desaturated behind a hero. **Album artwork
is never filtered, never tinted, never cropped** — it is the product. Chrome that sits over
photography reads from `--bg-on-media` / `--text-on-media`, which are the same in both themes,
because a photo is a photo.

No gradients as decoration. Cards are never translucent. Transparency and blur have two uses
only: the sticky app bar (`bg/page` at 86% + `blur(12px)`) and overlay chips on stills.

### Corners

Radii by hierarchy, not one value everywhere. Production ships two values, 14 and 9, and this
system keeps a third for covers: `corner/cover` **3px** on album covers (they are physical
objects), `corner/card` **14px** on cards and the modal panel, `corner/pill` on buttons and
filters, `radius/md` **9px** on episode stills, and **no radius at all** on the Certified seal,
because it is die-cut.

### Motion

One easing curve, `cubic-bezier(.22,.61,.36,1)`, exposed as `--ease-stage`. **One motion moment
per screen, triggered by the user** — and on mobile it is the score dial: weight, a magnet
toward whole numbers, a small tick. Ambient animation is a battery cost with no payoff on a
phone, so the drifting sleeve wall and anything 3D is a desktop-only enhancement, off by default
on small screens. 180–300ms for state, 450–620ms for layout. Everything collapses under
`prefers-reduced-motion: reduce`.

### Hover and press

**There is no hover on a phone, and a hover state applied to a tap sticks until you tap
elsewhere.** Every hover rule sits behind `@media (hover: hover) and (pointer: fine)`, and
components read the same query in JS before applying a hover style. Hover *lightens*: muted text
→ primary, `border/hairline` → `border/strong`, `accent/default` → `accent/hover`, images
`scale(1.04–1.05)` over 500ms, cards lift 3px. Touch feedback is press only: `scale(.97)` and no
colour change, so the action reads the same the whole way through. `touch-action: manipulation`
removes the 300ms double-tap delay. Focus is a 2px `accent/default` ring at 3px offset.

### Desktop is additive, never the baseline

Gated on **three conditions together**, never just width: `min-width: 1024px` so there is room,
`(hover: hover) and (pointer: fine)` so there is a real cursor, and
`prefers-reduced-motion: no-preference`. `.enhanced-3d` is `display: none` by default and only
appears when all three pass — a tablet with a wide viewport and a touch screen gets the mobile
behaviour, which is the correct answer.

What gets added: the stage widens to 21:9, the chyron goes Hero, the sleeve wall drifts behind
the hero, and rails take drag with inertia and arrow keys and stop bleeding. Nothing switches
presentation: the modal is already centred at every width, and navigation was always in the app
bar.

### States that have to exist on every screen

**Loading is a skeleton the shape of the content**, never a spinner on a blank page. **Empty is
an invitation.** **Missing data is designed, not filled** — 99 of 129 episodes have no date or
duration and only four have a verified video id, so cards drop the metadata line entirely, and a
still with no video carries no badge rather than a play button that lies or a label that announces
the normal case. The one place the absence is still named in words is the **episode stage**, where a
poster has to fill the space a player would have taken; a card does not have that problem.

**Creator versus viewer.** Every screen with personal content has two versions, and they are not
the same screen with a button swapped: your own profile, list or review shows editing; somebody
else's shows following and saving.

### Technical constraints that shape the design

- Episode stills are hotlinked from **Linktree with no CORS header**, so they can never be WebGL
  textures. Anything 3D is built from **Apple album sleeves**, which send
  `Access-Control-Allow-Origin: *`.
- **YouTube embeds need a real origin** — they refuse to play from a local file, so the cinema
  overlay falls back to the still plus an outbound link.
- Stills are ~154 KB each, which is the whole mobile performance budget spent on decoration.
  Production moves them to our own storage as WebP around 320 wide (~25 KB). Everything below
  the fold is lazy.
- Tracklists do not exist as data yet, though they are the most requested thing from the
  audience. The ten-song section is designed as if the data were there.

---

## Iconography

**One set, 21 glyphs, no second source.** Seventeen come from the product's own `icons.svg`
sprite — copied verbatim into `assets/icons.svg` and inlined into `components/icon/Icon.jsx` so
the bundle has no external fetch. Four more (`menu`, `more`, `pin`, `reset`) were drawn to the
same spec because the client's screens use those affordances and the sprite has no glyph for
them. No icon font, no CDN library, no substitution.

- **Grid and stroke:** 24×24 viewBox, 1.5 stroke, `round` caps and joins, `fill: none` except
  `play` (the one solid glyph) — geometric, not hand-drawn, and never filled to make a state.
- **Colour:** every glyph inherits `currentColor`. Tint the parent; do not hardcode.
- **Names:** play, pause, search, headphones, heart, bookmark, list, plus, comment, share,
  chevron, external, disc, mic, close, sliders, seal — plus menu, more, pin, reset.
- **Sizes in use:** 12px inside overlay chips, 15–16px inside buttons and card footers,
  20–24px standalone. Never scaled above 30px — the disc glyph stands in for artwork instead.
- **`chevron` is drawn pointing right**; rotate it, do not add a variant.
- **`disc` doubles as the missing-artwork mark** and `seal` is the Certified glyph. Artwork is
  only ever a **load-tested** Apple Music URL, and every record in the kit is labelled with what
  its cover actually shows. Records we cannot resolve get the missing-artwork state — a tan well
  with the disc glyph — never a grey box pretending to be a picture and never a broken image:
  `Cover`, `ReviewCard` and `EpisodeCard` all fall back on `onError`, so a URL that dies later
  degrades to the glyph. That is why the Trackstar 100 rows and the *Dark Side of the Moon* header
  show it: their own export has placeholders in exactly those places.
- **Every artwork URL is resolved through the iTunes Search API and then load-tested in the
  browser** before it goes in a kit. `Art` (web), `Cover` (app), `ReviewCard` and `EpisodeCard`
  all carry an `onError` fallback, so there is no path from a dead URL to a broken-image icon.
  One record stays on the glyph deliberately: *Dark Side of the Moon* is not on Apple Music as an
  album, only as tribute records.
- **Episode stills cannot be inlined by a thumbnail renderer** (Linktree sends no CORS header), so
  the stage carries a designed poster behind the still — disc glyph plus "Still only" — which is
  also the state for the 125 episodes with no video. The desktop enhancement is additive and
  proven so: the sleeve wall lives in `.enhanced-3d`, gated on width **and** pointer **and**
  reduced-motion, and the stage, chyron and every section render whether or not it loads.
- **Emoji are never used.** No unicode characters as icons either — the middot (·) in metadata
  lists and the en dash (–) for an empty score are the only non-alphabetic characters in copy.
- **The brand mark is not an icon.** `assets/logo-trackstar.svg` is used at 34px in the header
  and footer, in `accent/default` on ink or reversed to white on orange. Never redraw it.

---

## Using this system

```html
<!-- the two font blocks from "Fonts" above go here, then: -->
<link rel="stylesheet" href="styles.css">
```

```jsx
import { Button }      from './components/actions/Button.jsx';
import { EpisodeCard } from './components/episode-card/EpisodeCard.jsx';
```

Components are React function components with no dependencies beyond React — no CSS-in-JS, no
npm packages, no build-step assumptions. Style through the CSS custom properties: every
component reads only the semantic layer, so a token change propagates without touching a
component, and **no component knows which theme is active.** If a component needs to know, the
token is missing.

Themes: `auto` is the default and follows `prefers-color-scheme`; `data-theme="light"` and
`data-theme="dark"` force either one and work on any subtree, not just the root.
`data-surface="stage"` overrides both.
