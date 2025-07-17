# Challenge 3: Focus Indicators

## The Problem
Many users navigate websites using only their keyboard (Tab key) instead of a mouse. When focus indicators are missing or hard to see, these users get lost!

## Your Mission
1. **Experience keyboard navigation:**
   - Open `challenge.html` in your browser
   - Click on the title, "Online Learning Platform", then press Tab repeatedly
   - Notice how hard it is to see where you are on the page? The browser's focus is changing, but there is no visual indicator!

2. **Understand the issue:**
   - Some elements have no focus indicator at all
   - Others have focus indicators that are too faint
   - The default browser focus ring was removed with `outline: none`

3. **Fix the CSS:**
   Open `starter.css` and create visible focus indicators for:
   - Navigation links
   - Form inputs
   - Buttons
   - Any other interactive elements

## Success Criteria
- All interactive elements have clear, visible focus indicators
- Focus indicators have good color contrast
- Focus indicators are at least 2px thick or have a clear background change
- You can navigate the entire page using only the Tab key

## 💡 Tips
- Use `outline` or `box-shadow` for focus indicators
- Make sure focus indicators work on both light and dark backgrounds
- Don't remove the default focus - improve it!
- Test with actual keyboard navigation

## Focus Indicator Examples
Good focus indicators can use:
- Thick colored outlines: `outline: 3px solid #0066cc;`
- Box shadows: `box-shadow: 0 0 0 3px #0066cc;`
- Background color changes: `background-color: #e6f3ff;`
- Border changes: `border: 2px solid #0066cc;`

## Test Your Solution
- [ ] Tab through the entire page - you can always see where you are
- [ ] All interactive elements have visible focus indicators
- [ ] Focus indicators work on both light and dark sections
- [ ] Focus indicators are thick/visible enough to see easily

## Bonus Challenge
Can you make the focus indicators match the site's color scheme while still being clearly visible?

---
When ready, move on to `04-responsive-text/`
