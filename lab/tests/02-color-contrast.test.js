/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

let htmlContent;
let cssContent;

beforeAll(() => {
  // Load HTML
  const htmlPath = path.join(__dirname, '..', '02-color-contrast', 'challenge.html');
  htmlContent = fs.readFileSync(htmlPath, 'utf8');
  document.documentElement.innerHTML = htmlContent;

  // Load CSS
  const cssPath = path.join(__dirname, '..', '02-color-contrast', 'starter.css');
  cssContent = fs.readFileSync(cssPath, 'utf8');
});

describe('Challenge 2: Color Contrast', () => {
  test('subtle-text class has sufficient contrast (dark enough color)', () => {
    const subtleText = document.querySelector('.subtle-text');
    expect(subtleText).toBeTruthy();

    // Find the color in CSS
    const styleMatch = cssContent.match(/\.subtle-text\s*{[^}]*color\s*:\s*([^;]+);?/i);
    const colorValue = styleMatch ? styleMatch[1].trim() : '';

    expect(colorValue).toBeTruthy();

    // Should not be too light (forbidden colors)
    const forbiddenColors = ['#fff', '#ffffff', '#eee', 'white', 'lightgray'];
    expect(forbiddenColors).not.toContain(colorValue.toLowerCase());
  });

  test('error-message class uses more than just color', () => {
    const errorMessage = document.querySelector('.error-message');
    expect(errorMessage).toBeTruthy();

    const match = cssContent.match(/\.error-message\s*{([^}]*)}/i);
    const styles = match ? match[1] : '';

    const hasBorder = /border/i.test(styles);
    const hasBg = /background/i.test(styles);
    const hasFontWeight = /font-weight/i.test(styles);

    // Should include at least one extra visual cue
    expect(hasBorder || hasBg || hasFontWeight).toBe(true);
  });

  test('link hover state is distinguishable', () => {
    const link = document.querySelector('.link');
    expect(link).toBeTruthy();

    const hoverMatch = cssContent.match(/\.link:hover\s*{([^}]*)}/i);
    expect(hoverMatch).toBeTruthy();

    const hoverStyles = hoverMatch ? hoverMatch[1] : '';
    // Must change color, text-decoration, or background
    expect(/color|text-decoration|background/i.test(hoverStyles)).toBe(true);
  });
});
