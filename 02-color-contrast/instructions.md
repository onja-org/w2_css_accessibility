# Challenge 2: Color Contrast

## The Problem
Open `challenge.html` in your browser. Notice how hard some text is to read? That's what we're fixing!

## Your Mission
1. **First, experience the problem:**
   - Squint at your screen
   - Try reading from far away
   - Imagine you're in bright sunlight

2. **Learn to test contrast:**
   - Right-click on the gray text → Inspect
   - In DevTools, find the "Contrast" section
   - See the ⚠️ warning? That means it fails accessibility standards

3. **Fix the CSS:**
   Open `starter.css` and improve the contrast for:
   - The `.subtle-text` class
   - The `.error-message` class (hint: don't just change the text color!)
   - The `.link` hover state

## Success Criteria
- All text passes WCAG AA standards (4.5:1 for normal text)
- Error messages are noticeable without relying only on color
- Links are distinguishable from regular text

## 💡 Tips
- Darker backgrounds need lighter text
- Pure black (#000) on pure white (#fff) can be harsh - try #212121
- The DevTools contrast checker suggests accessible colors!

## Test Your Solution
- [ ] All text is easily readable
- [ ] DevTools shows no contrast warnings
- [ ] Error message uses more than just color (try icon or border)

## Bonus Challenge
Can you maintain the site's visual style while fixing accessibility? Good design and accessibility can coexist!

---
When ready, move on to `03-focus-indicators/`
