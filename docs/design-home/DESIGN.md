---
name: Vivid Ethos
colors:
  surface: '#fbf8ff'
  surface-dim: '#dad9e3'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2fd'
  surface-container: '#eeedf7'
  surface-container-high: '#e8e7f1'
  surface-container-highest: '#e3e1ec'
  on-surface: '#1a1b22'
  on-surface-variant: '#4b4455'
  inverse-surface: '#2f3038'
  inverse-on-surface: '#f1effa'
  outline: '#7c7387'
  outline-variant: '#cdc2d8'
  surface-tint: '#7a26e7'
  primary: '#7721e5'
  on-primary: '#ffffff'
  primary-container: '#9146ff'
  on-primary-container: '#fffcff'
  inverse-primary: '#d5baff'
  secondary: '#5f5e61'
  on-secondary: '#ffffff'
  secondary-container: '#e4e1e6'
  on-secondary-container: '#656467'
  tertiary: '#5b5c5d'
  on-tertiary: '#ffffff'
  tertiary-container: '#737576'
  on-tertiary-container: '#fdfdfe'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ecdcff'
  primary-fixed-dim: '#d5baff'
  on-primary-fixed: '#270057'
  on-primary-fixed-variant: '#5e00c1'
  secondary-fixed: '#e4e1e6'
  secondary-fixed-dim: '#c8c5ca'
  on-secondary-fixed: '#1b1b1e'
  on-secondary-fixed-variant: '#47464a'
  tertiary-fixed: '#e2e2e3'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#fbf8ff'
  on-background: '#1a1b22'
  surface-variant: '#e3e1ec'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 1.5rem
  margin-mobile: 1rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
  section-padding: 4rem
---

## Brand & Style

This design system embodies a "Digital Sanctuary" aesthetic—blending the high-energy pulse of creator culture with the disciplined polish of a premium SaaS platform. The target audience consists of community managers, creators, and power users who require high-density information without the cognitive load of cluttered interfaces.

The design style is **Modern Corporate with a Soft Edge**, leaning heavily into high-end minimalism. It utilizes expansive whitespace, subtle tonal layering, and high-impact focal points to create an environment that feels both professional and welcoming. The goal is to evoke a sense of clarity, momentum, and premium craftsmanship.

## Colors

The palette is anchored by a vibrant Twitch Purple, used strategically for primary actions and brand signaling. The foundation is built upon a spectrum of "Cool Neutrals" to maintain a clean, surgical look.

- **Primary (#9146FF):** Used for CTA buttons, active states, and critical brand accents.
- **Secondary (#18181B):** Reserved for high-contrast text and deep UI foundations.
- **Surface/Tertiary (#F4F4F5):** The primary background color for page sections and input fields to reduce eye strain compared to pure white.
- **Neutral (#71717A):** Used for secondary text, icons, and non-interactive borders.

Backgrounds should primarily use `#FFFFFF` for the main canvas, with `#F4F4F5` used to define container boundaries and "well" areas.

## Typography

The typography system relies exclusively on **Inter** to leverage its exceptional legibility and systematic feel. 

- **Weight Strategy:** Use Bold (700) for displays, Semi-Bold (600) for headlines, and Medium (500) for interactive labels. 
- **Scale:** Maintain a tight vertical rhythm. Large headlines use negative letter-spacing to feel more "custom" and less like default browser text.
- **Hierarchy:** Use `body-sm` for secondary metadata (e.g., "Last active 2h ago") in a neutral gray to ensure the primary user names in `body-md` or `headline-md` stand out.

## Layout & Spacing

The layout follows a **Fluid-to-Fixed** 12-column grid. On desktop, the content is capped at 1280px to prevent excessive line lengths and keep the UI dense but readable.

- **The 8px Rule:** All spacing increments must be multiples of 8 (e.g., 8, 16, 24, 32, 48, 64).
- **Whitespace:** Use "Generous Padding" inside cards (minimum 24px) to create the soft, premium feel requested.
- **Mobile Reflow:** For the user listing, transition from a multi-column card layout to a single-column list on screens smaller than 768px.

## Elevation & Depth

This design system avoids harsh borders in favor of **Ambient Shadows** and tonal layering.

- **The "Soft Float":** Use a multi-layered shadow for primary cards: `0 4px 6px -1px rgba(0,0,0,0.05), 0 10px 15px -3px rgba(0,0,0,0.03)`. This creates a lifted appearance without looking "dirty."
- **Tonal Separation:** Instead of lines, use background color changes (`#FFFFFF` on `#F4F4F5`) to indicate nesting.
- **Interactive Depth:** On hover, cards should subtly lift (increase shadow spread) and scale slightly (1.01x) to provide immediate tactile feedback.

## Shapes

The shape language is defined by **Extended Radii**. 

- **Primary Containers:** Cards and large modals use `rounded-2xl` (1.5rem) to achieve the "soft aesthetic" requested.
- **Buttons & Inputs:** Use `rounded-lg` (0.5rem) or `rounded-xl` (0.75rem) to maintain a friendly but slightly more structured appearance for functional elements.
- **Avatars:** User photos should always be perfectly circular to contrast against the softened rectangular containers of the UI.

## Components

### Buttons
- **Primary:** Purple background (#9146FF), white text, semi-bold. Subtle glow on hover using a 20% opacity purple shadow.
- **Secondary:** Light gray background (#F4F4F5), dark text. Borderless.

### User Cards
- The core of the listing page. White background, 24px padding, `rounded-2xl`.
- Should include a large circular avatar, a primary headline for the name, and a small secondary label for the role or status.

### Input Fields
- Soft gray background (#F4F4F5), no border by default. On focus, a 2px purple stroke appears with a soft purple outer glow.

### Status Chips
- Small, `rounded-pill` components. Use low-saturation background colors (e.g., soft green for "Online") with high-saturation text to maintain the "soft" vibe without sacrificing accessibility.

### List Items
- For a more compact view, use a list layout with 16px vertical padding and a subtle divider line (1px, #F4F4F5) between items.