# Sage Accounting Quiz

A React-based quiz application for Sage accounting software that helps users find the right accounting solution for their business.

## 🚀 Quick Fix for Blank Page

The blank page at https://cwah123.github.io/sage-accounting-quiz/ is caused by the site not being rebuilt with the correct GitHub Pages configuration. Here's how to fix it:

### Step 1: Enable GitHub Actions for Pages

1. Go to your repository settings: https://github.com/cwah123/sage-accounting-quiz/settings/pages
2. Under **"Build and deployment"** → **"Source"**, select **"GitHub Actions"** (NOT "Deploy from a branch")

### Step 2: Create the Deployment Workflow

Create a new file in your repository at `.github/workflows/deploy.yml` with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 8
          
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 3: Trigger the Deployment

After creating the workflow file:
- Commit and push it to the `main` branch
- The deployment will start automatically
- Check the "Actions" tab in your repository to see the progress
- Once complete, your site will be live at https://cwah123.github.io/sage-accounting-quiz/

## 📋 What's Been Fixed

✅ **Vite Configuration**: Added `base: '/sage-accounting-quiz/'` to `vite.config.ts`  
✅ **Design System**: All CSS variables for colors, spacing, borders, radius, and typography are in place  
✅ **Custom Fonts**: Using Sage Headline and Sage Text fonts as defined in `/src/styles/fonts.css`  
✅ **Entry Points**: Both `index.html` and `src/main.tsx` are properly configured  
✅ **Package Dependencies**: All required packages are listed in `package.json`

## 🎨 Design System

This application uses a custom design system with:

- **Colors**: Defined in `/src/styles/theme.css` using CSS variables (e.g., `--accent`, `--foreground`, `--background`)
- **Typography**: Sage Headline (headings) and Sage Text (body) fonts from `/src/styles/fonts.css`
- **Spacing & Borders**: Custom CSS variables for consistent spacing and border radius
- **Dark Mode**: Built-in dark mode support with `.dark` class

All UI components use these CSS variables to ensure maintainability and easy theme updates.

## 🛠️ Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── App.tsx              # Main application component
│   │   └── components/          # React components
│   ├── styles/
│   │   ├── fonts.css            # Font face definitions
│   │   ├── tailwind.css         # Tailwind CSS imports
│   │   ├── theme.css            # Design system variables
│   │   └── index.css            # Main CSS entry point
│   ├── imports/                 # SVG and asset imports
│   └── main.tsx                 # React entry point
├── index.html                   # HTML entry point
├── vite.config.ts              # Vite configuration (GitHub Pages base path)
└── package.json                # Dependencies and scripts
```

## 🎯 Features

- Interactive quiz flow with smooth animations
- Progress bar tracking
- Responsive design
- Dark mode with black background
- Custom smooth scrolling (300ms duration)
- Product recommendation based on user inputs
- Hamburger navigation for mobile
- Stripe trust banner with Trustpilot, HMRC, MTD badges

## 📝 Notes

- The app uses Motion (formerly Framer Motion) for animations
- All CSS styling uses design system variables for easy theming
- Typography strictly uses defined font faces (no Tailwind font utilities)
- Built with React 18.3.1 and Vite 6.3.5
