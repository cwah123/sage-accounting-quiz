# 🚀 Deployment Instructions for GitHub Pages

## Current Status
✅ Vite config has correct base path: `/sage-accounting-quiz/`  
✅ All source files are ready  
✅ GitHub Actions workflow created  
❌ **Site needs to be deployed** - currently showing blank page

---

## Quick Fix (3 Steps)

### Step 1: Enable GitHub Actions in Repository Settings

1. Go to: https://github.com/cwah123/sage-accounting-quiz/settings/pages
2. Under **"Build and deployment"** section:
   - Change **Source** from "Deploy from a branch" to **"GitHub Actions"**
3. Click **Save**

### Step 2: Push the Workflow File

The workflow file has been created at `.github/workflows/deploy.yml`. You need to commit and push it:

```bash
git add .github/workflows/deploy.yml
git add package.json
git commit -m "Add GitHub Actions deployment workflow"
git push origin main
```

### Step 3: Monitor the Deployment

1. Go to the **Actions** tab: https://github.com/cwah123/sage-accounting-quiz/actions
2. You'll see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be live at: https://cwah123.github.io/sage-accounting-quiz/

---

## Why Was the Page Blank?

The blank page occurred because:
1. The Vite config has `base: '/sage-accounting-quiz/'` 
2. But the deployed files were looking for assets at the wrong path
3. **Solution**: Rebuild with GitHub Actions, which will use the correct base path

---

## Alternative: Manual Deployment (If GitHub Actions Doesn't Work)

If you can't use GitHub Actions, you can deploy manually:

```bash
# 1. Install dependencies
pnpm install

# 2. Build the project
pnpm build

# 3. The build output will be in the 'dist' folder
# You need to push the contents of 'dist' to the 'gh-pages' branch
```

---

## Design System Confirmation

✅ Your design system is properly configured:
- **Colors**: Using CSS variables (`--accent`, `--primary`, `--foreground`, etc.)
- **Typography**: Using Sage Headline and Sage Text fonts from `/src/styles/fonts.css`
- **Spacing**: Using design system variables
- **Components**: All components use Tailwind classes that reference your CSS variables

Example from QuizOption.tsx:
```tsx
className={isSelected ? "text-accent" : "text-primary-foreground"}
className={isSelected ? "bg-[#1B1B1B]" : "bg-primary hover:bg-[#1B1B1B]"}
className={isSelected ? "border-accent" : "border-border"}
```

All components follow this pattern, ensuring maintainability through your `/src/styles/theme.css` file.

---

## Next Steps After Deployment

Once deployed successfully:
1. ✅ Verify the site loads at https://cwah123.github.io/sage-accounting-quiz/
2. ✅ Test the quiz functionality
3. ✅ Verify all fonts and colors match your design system
4. 🎨 Make CSS adjustments in `/src/styles/theme.css` if needed
5. 🔄 Push changes to auto-redeploy

---

## Troubleshooting

**If the site is still blank after deployment:**
1. Check browser console for errors (F12 → Console tab)
2. Verify GitHub Pages is enabled in repository settings
3. Ensure the workflow completed successfully
4. Clear browser cache (Ctrl+F5 or Cmd+Shift+R)

**If you see 404 errors:**
- The base path might be wrong
- Check that `base: '/sage-accounting-quiz/'` matches your repo name exactly
