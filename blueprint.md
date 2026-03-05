# Project Blueprint

## Overview

This project is a simple Lotto Number Generator web application. It allows users to generate six unique random numbers between 1 and 45. The application also features a theme switcher to toggle between light and dark modes.

## Deployment Strategy

The primary deployment method for this project is through Cloudflare Pages, which is connected to the GitHub repository `https://github.com/chachamagicion/product-web1`.

To deploy the latest changes, the code must be pushed to the `main` branch of the GitHub repository. Cloudflare will automatically detect these changes and deploy the new version of the site.

**Default Command:** When asked to "deploy", the default action will be to push the latest code to the `main` branch on GitHub (e.g., `git push origin main`).

## Current Plan

No active plan. Ready for user's request.

## Implemented Features

### Version 1.0
*   **Lotto Number Generation:**
    *   Generates 6 unique random numbers between 1 and 45.
    *   Displays the generated numbers in a visually appealing way.
*   **Theme Switcher:**
    *   Allows users to switch between a light and a dark theme.
    *   The user's theme preference is saved in local storage.
*   **Styling:**
    *   Modern and clean design.
    *   Responsive layout.
    *   Gradient background.
    *   Animations for the generated numbers.
