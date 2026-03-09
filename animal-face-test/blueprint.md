# Project Blueprint: Animal Face Test

## Overview

This project is an "Animal Face Test" web application. It uses a machine learning model, trained via Teachable Machine, to determine whether a user's face more closely resembles a cat or a dog. The application accesses the user's webcam, analyzes the video stream in real-time, and displays the prediction probabilities for "Cat Face" and "Dog Face".

## Deployment Strategy

Deployment will be handled through a separate process, likely using a new GitHub repository and a new Cloudflare Pages project. The specifics will be defined later.

## Current Plan: Initial Project Setup

- **Objective:** Create the foundational files for the "Animal Face Test" application in a new `animal-face-test` directory.
- **File Creation:**
    - `animal-face-test/index.html`: The main HTML file.
    - `animal-face-test/style.css`: The stylesheet.
    - `animal-face-test/main.js`: The JavaScript file containing the application logic.
- **HTML:**
    - Set up the basic HTML structure with a title, header, and containers for the webcam and prediction labels.
    - Include script tags for TensorFlow.js and the Teachable Machine Image library.
- **JavaScript:**
    - Implement the core logic using the provided Teachable Machine code.
    - Create `init`, `loop`, and `predict` functions to manage the model, webcam, and real-time predictions.
- **CSS:**
    - Create initial styles for a clean, modern, and user-friendly interface.
