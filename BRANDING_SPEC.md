# Rose City Commerce Branding Spec

## Theme
Forest + Copper

## Color System
- Primary (Evergreen): `#163229`
- Primary Hover / Deep Evergreen: `#0B1F1A`
- Accent (Copper): `#B56A3A`
- Accent Hover: `#9C592F`
- Accent Soft: `#F4E3D7`
- Background Paper: `#F6F3ED`
- Soft Background: `#FFFCF8`
- White Surface: `#FFFFFF`
- Crisp Surface: `#FAFAF7`
- Raised Surface: `#F4F5F2`
- Charcoal Text: `#202625`
- Secondary Text: `#44504C`
- Cool Support: `#EEF3F1`, `#CBD8D3`, `#3D5A53`
- Border: `#D8D3C9`
- Strong Border: `#BDB6AA`
- Cool Border: `#D7E0DC`
- Muted Surface: `#ECE8DF`
- Success: `#1F7A4F`
- Warning: `#9A6A14`
- Error: `#B42318`
- Info: `#1D4E89`

## Color Usage
- Evergreen remains the brand anchor for headings, primary actions, dark panels, and selected metrics.
- Copper is reserved for conversion CTAs, active states, focus rings, and selective highlights.
- Paper colors retain local warmth, but should be used as section bands or accents rather than the dominant surface.
- Surface colors are the default page and card foundation for a sharper, more modern interface.
- Cool support colors are used for technical/product signals, metric surfaces, and stack or tool tags.

## Typography
- Heading/UI font: `Manrope` (Google Fonts)
- Accent serif font: `Source Serif 4` (Google Fonts)
- Usage rule:
  - Primary marketing headings, nav, and buttons use Manrope.
  - Quotes and selective crafted accents may use Source Serif 4.

## Spacing, Radius, Shadows
- Spacing scale: `4, 8, 12, 16, 24, 32, 48, 64, 96`
- Radius:
  - `sm`: `6px`
  - `md`: `10px`
  - `lg`: `14px`
  - `pill`: `9999px`
- Shadow:
  - `sm`: `0 1px 2px rgba(0,0,0,.06)`
  - `md`: `0 8px 24px rgba(9,21,18,.10)`
  - `lg`: `0 20px 45px rgba(9,21,18,.14)`

## Component Rules
- Buttons:
  - Primary: evergreen background, paper text
  - Accent: copper background, paper text
  - Secondary: white/surface background with stronger border
  - Ghost: quiet surface with border
  - Tertiary/link: text-level actions
- Cards:
  - Default: white/surface background, border `#D8D3C9`, `lg` radius, `sm` shadow
  - Elevated: stronger shadow and border shift on hover
  - Feature: larger padding and cool border
  - Dark: evergreen panel
  - Metric: compact cool support surface
  - Subtle: quiet raised surface
- Sections:
  - 64-96px vertical rhythm on desktop, 48-64px on mobile
  - Compact sections use 32-40px vertical rhythm
  - Variants include default, band, dark, compact, and editorial
- Badges:
  - Rounded pill, subtle neutral/cool background
  - Accent variant is reserved for active/selected states
  - Tech variant uses cool support colors
- Navigation:
  - Sticky header with clear contact CTA
- Forms:
  - High contrast labels and outlines
  - Visible focus ring (`#B56A3A`)

## Accessibility and Contrast
- All text/interactive pairs target WCAG AA contrast.
- Keyboard-visible focus styles are required for links, buttons, and form fields.
