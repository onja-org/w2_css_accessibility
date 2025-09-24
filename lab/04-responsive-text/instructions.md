# Challenge 4: Responsive Text & Layouts

## The Problem
When users zoom their browser to 300% (which many people with vision impairments do), websites often become unusable. Content gets cut off, containers become too narrow, and horizontal scrolling appears.

## Your Mission
1. **Experience the zoom problem:**
   - Open `challenge.html` in your browser
   - Press `Ctrl` and `+` (or `Cmd` and `+` on Mac) to zoom to 300%
   - Notice how content gets cut off and you need to scroll horizontally?

2. **Understand the real issues:**
   - Fixed widths cause horizontal scrolling when zoomed
   - Fixed heights cut off content when text gets larger
   - Elements don't wrap properly at larger sizes
   - Containers become too narrow for their content

3. **Fix the CSS:**
   Open `starter.css` and make the layout zoom-friendly by:
   - Changing fixed widths to flexible widths
   - Removing fixed heights that cut off content
   - Making sure elements can wrap when needed
   - Testing at 300% zoom frequently

## Success Criteria
- No horizontal scrolling at 300% zoom
- All content remains visible and readable
- Layout adapts gracefully when zoomed
- Users can access all content and functionality

## 💡 Key Fixes You'll Need
- Change `width: 800px` to `max-width: 800px`
- Remove `overflow: hidden` that cuts off content
- Remove fixed heights like `height: 150px`
- Add `flex-wrap: wrap` where elements should wrap
- Remove `white-space: nowrap` that prevents text wrapping

## Test Your Solution
- [ ] Zoom to 300% - no horizontal scrolling needed
- [ ] All text and content is still visible
- [ ] Navigation and form elements wrap properly
- [ ] No content gets cut off or hidden

## Why This Matters
Making websites work at 300% zoom helps:
- People with visual impairments who need larger text
- Users on small screens or high-DPI displays
- Anyone who finds default text sizes too small

---
When ready, move on to `05-final-challenge/`
