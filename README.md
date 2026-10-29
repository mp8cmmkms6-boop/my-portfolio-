# MyPortfolio — Student UI/UX Portfolio

A simple responsive student project using HTML5, CSS3, and vanilla JavaScript.

## How to run
1. Unzip the project.
2. Open `index.html` in Chrome, or open the folder in VS Code and run Live Server.

## What the files do
- `index.html`: semantic page structure (header, navigation, main, sections, articles, footer) and validated form.
- `style.css`: colors, CSS Grid, Flexbox, spacing, responsive breakpoints, light/dark mode.
- `script.js`: hamburger menu, theme switch, demo form response, footer year.

## Important limitations
- The contact form is a **demo** and does not send data to a server.
- The projects and prices are **examples**. Customize them before presenting as real work.
- Behance and Dribbble links are homepages, not personal profiles.
- Figma desktop/mobile frames are NOT included. Make them separately to meet the Figma assessment criteria.
- GitHub publishing is NOT automatic. Upload the project to a public repository and enable Pages.

## GitHub Pages
1. Create public repository `student-portfolio`.
2. Commit `index.html` first: `feat: add semantic HTML structure`.
3. Commit `style.css` next: `feat: add responsive CSS design`.
4. Commit `script.js` next: `feat: add menu and theme switch`.
5. Commit `README.md`: `docs: explain project`.
6. Settings > Pages > Deploy from a branch > main > /(root) > Save.

## Teacher defense quick notes
- The navigation uses `display: flex`.
- The project cards use CSS Grid and change columns for smaller screens.
- The form uses `required`, `type="email"`, and `type="url"`.
- The mobile menu and dark mode use `classList.toggle()` in JavaScript.
