# Challenge 5: Final Challenge - Putting It All Together

## The Big Picture
Congratulations! You've learned about three key aspects of CSS accessibility:
1. **Color Contrast** - Making text readable for everyone
2. **Focus Indicators** - Helping keyboard users navigate
3. **Responsive Layouts** - Ensuring content works when zoomed

Now it's time to put it all together!

## Your Mission
You'll be working on a restaurant website that has **multiple accessibility issues**. Your job is to find and fix them all using everything you've learned.

## The Challenge
1. **Open `challenge.html` in your browser**
   - This is a restaurant website with several accessibility problems
   - Try navigating with Tab key, zooming to 300%, and looking for poor contrast

2. **Identify the problems:**
   - Poor color contrast in multiple places
   - Missing focus indicators (outline: none removes them all!)
   - Fixed widths that cause horizontal scrolling when zoomed
   - Fixed heights that cut off content when zoomed
   - Error messages that only use color
   - Elements that don't wrap properly

3. **Fix everything in `starter.css`:**
   - Make text have good contrast (aim for dark text on light backgrounds)
   - Add clear focus indicators to all interactive elements
   - Change fixed widths to max-widths for zoom compatibility
   - Remove fixed heights and overflow:hidden that cut off content
   - Make elements wrap properly when zoomed

## Success Criteria
Your solution should pass **ALL** of these tests:

### Color Contrast ✓
- [ ] All text is easily readable (no gray text on white backgrounds)
- [ ] Error messages don't rely only on color (add background or border)
- [ ] Links are distinguishable from regular text
- [ ] Buttons have good contrast between text and background

### Focus Indicators ✓
- [ ] Remove the `*:focus { outline: none; }` rule
- [ ] Tab through entire page - always know where you are
- [ ] All buttons, links, and form fields have visible focus
- [ ] Focus indicators are thick enough to see clearly

### Responsive Layout ✓
- [ ] Zoom to 300% - no horizontal scrolling needed
- [ ] Fixed widths changed to max-widths
- [ ] Fixed heights removed (or changed to min-heights)
- [ ] Content wraps properly (add flex-wrap: wrap where needed)
- [ ] No content gets cut off or hidden

## 💡 Key Fixes You'll Need
1. **Remove** `*:focus { outline: none; }` entirely
2. **Color contrast**: Change gray colors (#999999, #666666, etc.) to darker ones
3. **Fixed widths**: Change `width: 960px` to `max-width: 960px`
4. **Wrapping**: Add `flex-wrap: wrap` to prevent elements from being too narrow
5. **Heights**: Remove `overflow: hidden` and fixed heights that cut off content
6. **Error styling**: Add background color or border to error messages

## Test Your Final Solution
1. **Contrast Test:** Squint at the page - can you read all text easily?
2. **Keyboard Test:** Tab through the entire page without using your mouse
3. **Zoom Test:** Zoom to 300% and make sure everything still works
4. **Real User Test:** Ask someone else to try your site!

## Why This Matters
The techniques you're practicing here make websites usable for:
- People with visual impairments who need high contrast and larger text
- Users who navigate with keyboards instead of mice
- Anyone who needs to zoom their browser for better readability

**Great job completing this accessibility lab!** You now have the fundamental skills to make websites more inclusive and usable for everyone. Keep practicing these techniques in your future projects! 🎉

---
🏆 **You've completed the CSS Accessibility Lab!**
