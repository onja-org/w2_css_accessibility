/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

let htmlContent;
let cssContent;

beforeAll(() => {
  // Load HTML content directly into Jest's built-in jsdom
  const htmlPath = path.join(__dirname, '..', '04-responsive-text', 'challenge.html');
  htmlContent = fs.readFileSync(htmlPath, 'utf8');
  document.documentElement.innerHTML = htmlContent;

  // Load CSS content for validation
  const cssPath = path.join(__dirname, '..', '04-responsive-text', 'starter.css');
  cssContent = fs.readFileSync(cssPath, 'utf8');
});

describe('Challenge 4: Responsive Text & Layouts', () => {
  test('no elements use fixed widths that break layouts', () => {
    const fixedWidthRegex = /width\s*:\s*\d+px/i;
    const matches = cssContent.match(fixedWidthRegex);

    if (matches) {
      // If fixed widths exist, ensure corresponding max-widths are used
      const maxWidthRegex = /max-width\s*:\s*\d+px/i;
      const maxWidthMatches = cssContent.match(maxWidthRegex) || [];
      expect(maxWidthMatches.length).toBeGreaterThanOrEqual(matches.length);
    } else {
      expect(matches).toBeNull();
    }
  });

  test('no elements use fixed heights that cut off content', () => {
    const fixedHeightRegex = /height\s*:\s*\d+px/i;
    const matches = cssContent.match(fixedHeightRegex);
    expect(matches).toBeNull(); 
  });

  test('no elements hide content with overflow: hidden', () => {
    const overflowHiddenRegex = /overflow\s*:\s*hidden/i;
    const matches = cssContent.match(overflowHiddenRegex);
    expect(matches).toBeNull(); 
  });

  test('flex containers allow wrapping', () => {
    const flexNoWrapRegex = /flex-wrap\s*:\s*nowrap/i;
    const matches = cssContent.match(flexNoWrapRegex);
    expect(matches).toBeNull(); 
  });

  test('text and elements can wrap', () => {
    const noWrapRegex = /white-space\s*:\s*nowrap/i;
    const matches = cssContent.match(noWrapRegex);
    expect(matches).toBeNull();
  });
});
