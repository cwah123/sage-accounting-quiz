# Sage Accounting Software Quiz

A React-based interactive quiz application that helps users find the right Sage accounting software for their business needs. Built with a strict design system using Tailwind CSS v4 and custom CSS variables for maintainable styling.

## Features

- **Interactive Multi-Step Quiz**: Guides users through business structure, VAT status, employee count, and revenue questions
- **Smooth Animations**: 300ms custom smooth scrolling and coordinated timing for progress bar and card highlighting
- **Responsive Design**: Mobile-friendly with hamburger navigation menus
- **Design System**: Strictly adheres to custom CSS variables for colors, spacing, typography, and borders
- **Dynamic Product Recommendations**: Highlights recommended accounting software based on user responses
- **Progress Tracking**: Visual progress bar with smooth transitions between quiz steps

## Tech Stack

- **React 18.3.1**: Modern React with hooks
- **Vite 6.3.5**: Fast build tool and development server
- **Tailwind CSS 4.1.12**: Utility-first CSS framework
- **Motion (Framer Motion) 12.23.24**: Smooth animations and transitions
- **Material-UI**: Component library for enhanced UI elements
- **TypeScript**: Type-safe development

## Installation

```bash
# Install dependencies using pnpm (recommended)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
```

## Development

```bash
# Start development server
npm run dev

# Or using pnpm
pnpm dev
```

The application will be available at `http://localhost:5173`

## Build

```bash
# Build for production
npm run build

# Or using pnpm
pnpm build
```

## Design System

This project uses a strict design system defined in custom CSS files:

- `/src/styles/theme.css` - CSS variables for colors, spacing, typography, borders, and radius
- `/src/styles/fonts.css` - Custom font face definitions (Sage Text and Sage Headline families)
- `/src/styles/tailwind.css` - Tailwind configuration with custom utilities

### Typography

The project uses custom Sage font families:
- **Sage Text** (Regular, Medium, Bold variants)
- **Sage Headline** (Black weight)

All text components use these font faces via CSS custom properties rather than standard Tailwind utility classes.

### Color System

Colors are defined using CSS variables in `theme.css`:
- Background colors (`--background`, etc.)
- Foreground colors (`--foreground`, etc.)
- Accent colors (`--accent`, etc.)
- Border colors (`--border`, etc.)

## Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── App.tsx                 # Main application component
│   │   └── components/
│   │       ├── QuizOption.tsx      # Business structure selection
│   │       ├── VATOption.tsx       # VAT registration selection
│   │       ├── EmployeeOption.tsx  # Employee count selection
│   │       ├── RevenueOption.tsx   # Revenue selection
│   │       ├── ProgressBar.tsx     # Quiz progress indicator
│   │       ├── ProductCards.tsx    # Product display cards
│   │       ├── ResultsHeader.tsx   # Results section header
│   │       ├── MainNavigation.tsx  # Primary navigation
│   │       └── SecondaryNav.tsx    # Secondary navigation
│   ├── imports/                    # Figma-imported components and SVGs
│   └── styles/
│       ├── theme.css              # Design system variables
│       ├── fonts.css              # Font face definitions
│       ├── tailwind.css           # Tailwind configuration
│       └── index.css              # Global styles
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Quiz Flow

1. **Business Structure** (Step 1)
   - Sole Trader → VAT Question
   - Limited Company → Employee Count Question
   - Other → VAT Question

2. **VAT Registration** (Step 2 for Sole Trader/Other)
   - Yes → Sage Accounting (highlighted)
   - No → Sage Individual (highlighted)

3. **Employee Count** (Step 3 for Limited Company)
   - 0-19 employees → Revenue Question
   - 20+ employees → Results

4. **Revenue** (Step 4)
   - Under £2 millions → Sage Accounting (highlighted)
   - Over £2 millions → Sage Intacct (highlighted)

## Key Features

### Coordinated Animation Timing
- Button nudge animation: 300ms
- Delay before state change: 350ms
- Progress bar animation: 500ms  
- Total delay before results: 850ms (350ms delay + 500ms animation)
- Progress bar reaches 100% when VAT or revenue options are selected

### Product Highlighting
- Highlighted cards move up 24px
- Green gradient "Recommended software" badge appears
- Green border (4px) on highlighted card
- Dimmed background on non-highlighted cards
- CircleGlow effect behind highlighted card

### Custom Smooth Scrolling
- 300ms duration with ease-in-out timing
- Automatically scrolls to relevant sections
- Smooth user experience during transitions

## Contributing

When modifying the UI:
1. Use CSS variables from `theme.css` for all styling
2. Use defined font faces from `fonts.css` for typography
3. Maintain the strict design system adherence
4. Test all quiz paths and animations

## Recent Updates

### Progress Bar Fix (Feb 14, 2026)
- Fixed issue where progress bar wasn't reaching 100% when VAT options were selected
- Updated `getProgress()` logic to return 100% when VAT status or revenue amount is selected
- Ensures progress bar completes animation before results appear

## License

This project was built with Figma Make and follows the design specifications from the Sage accounting team.

## Notes

- This project uses the `figma:asset` virtual module scheme for imported images
- SVG icons are imported from the `/src/imports` directory
- The app features a black page background with a Stripe trust banner at the bottom
- All styling uses CSS variables from the design system for easy maintainability
