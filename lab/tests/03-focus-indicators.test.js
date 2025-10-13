/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

let htmlContent;
let cssContent;

beforeAll(() => {
  // Load HTML content into Jest's jsdom environment
  const htmlPath = path.join(__dirname, '..', '03-focus-indicators', 'challenge.html');
  htmlContent = fs.readFileSync(htmlPath, 'utf8');
  document.documentElement.innerHTML = htmlContent;

  // Load CSS content
  const cssPath = path.join(__dirname, '..', '03-focus-indicators', 'starter.css');
  cssContent = fs.readFileSync(cssPath, 'utf8');
});

describe('Challenge 3: Focus Indicators', () => {
  const interactiveSelectors = ['a', 'button', 'input', 'textarea', 'select'];

  test('all interactive elements exist', () => {
    interactiveSelectors.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  test('interactive elements have visible focus indicators', () => {
    interactiveSelectors.forEach((selector) => {
      const focusRule = new RegExp(`${selector}:focus\\s*{([^}]*)}`, 'i');
      const match = cssContent.match(focusRule);

      expect(match).toBeTruthy();

      const focusStyles = match[1];

      // Must include visible styles like outline, border, box-shadow, or background
      const hasVisibleIndicator = /outline|box-shadow|border|background/i.test(focusStyles);
      expect(hasVisibleIndicator).toBe(true);
    });
  });

  test('focus indicators are thick or visible enough', () => {
    interactiveSelectors.forEach((selector) => {
      const focusRule = new RegExp(`${selector}:focus\\s*{([^}]*)}`, 'i');
      const match = cssContent.match(focusRule);

      if (match) {
        const styles = match[1];

        // Look for thick outline, thick border, or a noticeable box-shadow
        const hasThickOutline = /outline\s*:\s*\d{1,2}px/i.test(styles);
        const hasThickBorder = /border\s*:\s*\d{1,2}px/i.test(styles);
        const hasBoxShadow = /box-shadow/i.test(styles);

        expect(hasThickOutline || hasThickBorder || hasBoxShadow).toBe(true);
      }
    });
  });
});
