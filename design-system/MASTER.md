# Design System Master — TK PlayLab (Tataphorn AI & IoT Learning Hub & Portfolio)

> Generated following **UI/UX Pro Max** (`uipro init --ai antigravity`) specifications for a **Playful Educational Platform Landing Page** built on top of `Resume-Website`.

---

## 1. Style Direction: Claymorphism (styles.csv #9)
- **Visual Character**: Soft 3D, chunky, playful, bubbly, tactile toy-like cards with thick translucent white borders (`3px-4px`) and dual shadows (inner specular/depth + colored outer drop shadow).
- **Border Radius**: `24px` (`rounded-3xl`) for cards, `18px` (`rounded-2xl`) for buttons/inputs, `9999px` (`rounded-full`) for floating pills and badges.
- **Motion & Tactility**: Smooth `200ms` ease-out hover lift and tactile soft-press (`active:translate-y-0.5`), respecting `@media (prefers-reduced-motion: reduce)`.

## 2. Color Palette (colors.csv #10 Educational App + Claymorphism Pastels)
| Role | Token | Hex | Usage |
|---|---|---|---|
| Canvas Background | `--clay-bg` | `#EEF2FF` | Main lavender-indigo pastel canvas |
| Primary Brand | `--clay-indigo` | `#4F46E5` | Primary actions, active tabs, headings accent |
| Secondary Accent | `--clay-periwinkle` | `#818CF8` | Secondary badges, soft gradients, glows |
| Energetic CTA | `--clay-orange` | `#F97316` | Enrollment CTAs, streak highlights, callouts |
| Mint Progress | `--clay-mint` | `#10B981` | Completion progress bars, unlocked badges |
| Sky Telemetry | `--clay-sky` | `#0EA5E9` | IoT / Edge lab cards & hardware badges |
| Sunny Amber | `--clay-amber` | `#F59E0B` | 5-star ratings, XP counters, achievement stars |
| Clay Surfaces | Pastel Tints | `#FFFFFF`, `#F3EEFF`, `#FFF1EB`, `#ECFDF5`, `#E0F2FE`, `#FEF9C3` | Tactile multi-surface card palette |
| Ink Primary | `--clay-ink` | `#1E1B4B` | High-contrast headings & body text (>= 10:1) |
| Ink Muted | `--clay-muted` | `#4338CA` / `#475569` | Secondary copy (>= 4.5:1 WCAG AA) |

## 3. Typography (typography.csv #6 Playful Creative + #27 Thai Modern)
- **Headings / Display**: `Fredoka`, `Noto Sans Thai`, sans-serif (Weights 500, 600, 700)
- **Body / UI**: `Nunito`, `Noto Sans Thai`, sans-serif (Weights 400, 500, 600, 700, 800)

## 4. Landing Page Architecture
1. **Floating Clay Navbar** (`top-4 left-4 right-4`) with TH/EN toggle, View CV (printable A4 modal), and Enroll Free CTA
2. **Playful Clay Hero** with vibrant headline, enrollment CTAs, stat clay chips, and Tataphorn's mentor/creator 3D clay portrait card
3. **Course Catalog Preview** with interactive category filter clay pills, 6 pastel claymorphism course cards, syllabus preview modal, and one-click add-to-track
4. **Interactive Progress Tracking Demo** with switchable tracks, live interactive lesson checkboxes, chunky 3D clay progress bar, XP & streak counter, unlockable clay achievement badges, and confetti celebration at 100%
5. **Live IoT & Edge Computing Sandbox** (`IoTShowcase`) restyled in vibrant claymorphism
6. **Meet Your Instructor & Portfolio** (`About`, `Skills`, `Experience`, `Education`) preserving 100% of Tataphorn Kaewmanee's authentic RMUTSV credentials & resume
7. **Student Testimonials** with pastel claymorphism quote cards, star ratings, and course tags
8. **Enrollment CTA & Contact Section** with vibrant clay enrollment banner, track/plan selector, interactive enrollment/inquiry form, and one-click contact cards
9. **Footer & Printable Official Resume Modal**

## 5. UI/UX Pro Max Quality Checklist
- Zero emoji UI icons — exclusively `lucide-react` SVG icons
- `cursor-pointer` on all interactive buttons, cards, and tabs
- Visible `focus-visible` rings for keyboard accessibility
- Consistent `max-w-6xl` container rhythm and generous whitespace
- Responsive across 375px, 768px, 1024px, and 1440px without horizontal overflow
