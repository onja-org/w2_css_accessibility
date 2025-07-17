# Challenge 4: Responsive Text

## The Problem
When users zoom their browser to 200% (which many people with vision impairments do), websites often become unusable. Text gets cut off, overlaps, or becomes unreadable.

## Your Mission
1. **Experience the zoom problem:**
   - Open `challenge.html` in your browser
   - Press `Ctrl` and `+` (or `Cmd` and `+` on Mac) to zoom to 200%
   - Notice how the text gets cut off and the layout breaks?

2. **Understand why this happens:**
   - Fixed pixel sizes don't scale well
   - Text containers are too small for larger text
   - Layouts don't adapt to larger content

3. **Fix the CSS:**
   Open `starter.css` and make the text responsive by:
   - Using relative units instead of fixed pixels
   - Making containers flexible
   - Ensuring text can wrap properly
   - Testing at different zoom levels

## Success Criteria
- All text remains readable at 200% zoom
- No text gets cut off or hidden
- Layout adapts gracefully to larger text
- Users can access all content and functionality when zoomed

## 💡 Tips
- Use `rem` or `em` instead of `px` for font sizes
- Use `max-width` instead of fixed `width` when possible
- Make sure containers can grow with their content
- Test at 100%, 150%, and 200% zoom levels

## Responsive Text Best Practices
- Font sizes: Use `rem` or `em` units
- Containers: Use `max-width` and flexible layouts
- Line height: Keep it proportional (unitless numbers work well)
- Spacing: Use relative units for margins and padding

## Test Your Solution
- [ ] Zoom to 200% - all text is still readable
- [ ] No horizontal scrolling needed at 200% zoom
- [ ] All buttons and links are still clickable
- [ ] Layout looks good at 100%, 150%, and 200% zoom

## Bonus Challenge
Can you make the text size increase smoothly as the user zooms, rather than just preventing problems?

---
When ready, move on to `05-final-challenge/`
