# Project Blueprint

## Overview

This project is a "Dinner Menu Recommendation" web application. It helps users decide what to eat by randomly selecting a dinner menu item from a predefined list. The application features a clean, modern interface with a theme switcher for light and dark modes, a contact form, and a comment section.

## Deployment Strategy

The primary deployment method is through Cloudflare Pages, connected to the GitHub repository `https://github.com/chachamagicion/product-web1`.

To deploy changes, the code must be pushed to the `main` branch. Cloudflare will automatically build and deploy the new version.

**Default Command:** When asked to "deploy", the default action is to push the latest code to the `main` branch on GitHub (`git push origin main`).

## Current Plan: Refactor to Dinner Menu Recommender

- **Objective:** Change the site's purpose from a Lotto Number Generator to a Dinner Menu Recommender.
- **HTML:** Update titles, headers, and content to reflect the new theme.
- **JavaScript:** Replace the number generation logic with a function that randomly selects a menu item from a predefined list. Add a brief "thinking" animation for a better user experience.
- **CSS:** Redesign the result display area from lotto balls to a modern card-style layout suitable for displaying text.
- **Blueprint:** Update this `blueprint.md` file to reflect the new project identity.

## Implemented Features

### Version 2.0 (Dinner Menu Recommender)
*   **Menu Recommendation:**
    *   Randomly selects one menu item from a comprehensive list (Korean, Chinese, Japanese, Western, etc.).
    *   Displays the result in a clean, card-style UI.
    *   Includes a short "thinking" animation before showing the result.
*   **Theme Switcher:**
    *   Allows users to switch between light and dark themes.
    *   Saves the user's preference in local storage.
*   **Contact Form:**
    *   A functional contact form that submits to Formspree.
*   **Comments Section:**
    *   Integrated Disqus for public comments.
*   **Styling:**
    *   Modern, responsive, and clean design.

### Version 1.0 (Lotto Number Generator) - *Retired*
*   **Lotto Number Generation:**
    *   Generated 6 unique random numbers between 1 and 45.
