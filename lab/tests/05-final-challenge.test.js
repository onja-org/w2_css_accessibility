/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

let htmlContent;
let cssContent;

beforeAll(() => {
  // Load HTML file
  const htmlPath = path.join(__dirname, '..', '05-final-challenge', 'challenge.html');
  htmlContent = fs.readFileSync(htmlPath, 'utf8');
  document.documentElement.innerHTML = htmlContent;

  // Load CSS file
  const cssPath = path.join(__dirname, '..', '05-final-challenge', 'starter.css');
  cssContent = fs.readFileSync(cssPath, 'utf8');
});

describe('Challenge 5: Final Accessibility Challenge', () => {
  // --- COLOR CONTRAST TESTS ---
  test('no low-contrast gray text colors remain', () => {
    const grayColors = /(color\s*:\s*#(?:999999|666666|777777|888888))/i;
    expect(cssContent).not.toMatch(grayColors);
  });

  test('error messages include more than color for emphasis (border or background)', () => {
    const errorClass = /\.error[-_]?(message)?\s*{[^}]*}/gi;
    const matches = cssContent.match(errorClass);
    if (matches) {
      expect(cssContent).toMatch(/(border|background)\s*:/i);
    }
  });

  test('links and buttons have visible, distinct styles', () => {
    expect(cssContent).toMatch(/a:hover|button:hover/i);
  });

  // --- FOCUS INDICATOR TESTS ---
  test('outline is not globally removed', () => {
    expect(cssContent).not.toMatch(/\*:focus\s*{[^}]*outline\s*:\s*none/i);
  });

  test('focus indicators are visible (outline or box-shadow)', () => {
    const focusStyles = /:focus\s*{[^}]*?(outline|box-shadow)\s*:/i;
    expect(cssContent).toMatch(focusStyles);
  });

  // --- RESPONSIVE LAYOUT TESTS ---
  test('no fixed widths used; max-width used instead', () => {
    const fixedWidth = /width\s*:\s*\d+px/i;
    const maxWidth = /max-width\s*:\s*\d+px/i;
    if (fixedWidth.test(cssContent)) {
      expect(maxWidth.test(cssContent)).toBe(true);
    } else {
      expect(fixedWidth.test(cssContent)).toBe(false);
    }
  });

  test('no fixed heights that can cut off content', () => {
    const fixedHeight = /height\s*:\s*\d+px/i;
    expect(cssContent).not.toMatch(fixedHeight);
  });

  test('no overflow: hidden that hides content', () => {
    const overflowHidden = /overflow\s*:\s*hidden/i;
    expect(cssContent).not.toMatch(overflowHidden);
  });

  test('flex containers can wrap content', () => {
    const noWrap = /flex-wrap\s*:\s*nowrap/i;
    expect(cssContent).not.toMatch(noWrap);
  });

  test('text wrapping allowed (no white-space: nowrap)', () => {
    const nowrapText = /white-space\s*:\s*nowrap/i;
    expect(cssContent).not.toMatch(nowrapText);
  });
});
