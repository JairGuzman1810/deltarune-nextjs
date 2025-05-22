# DELTARUNE Next.JS (Learning Project)

This repository contains the source code for a personal learning project that aims to replicate the look and feel of the [DELTARUNE website](https://deltarune.com/). Built with Next.js and Tailwind CSS, this project focuses on practicing modern web development techniques, particularly animation and layout, inspired by the official site's design and user experience.

**Please Note:** This project is purely for educational purposes and is not affiliated with or endorsed by Toby Fox or the DELTARUNE development team. All assets and content used are the intellectual property of Toby Fox and are used here solely for the purpose of learning and practicing web development skills.

## Project Goal

The primary goal of this project is to learn and implement various web development techniques, including:

*   Recreating complex layouts and animations using Tailwind CSS.
*   Implementing interactive elements like countdown timers and video players in Next.js.
*   Exploring scroll reveal animations and parallax effects with custom JavaScript.
*   Utilizing external libraries like Fancybox for image galleries.

This project is a result of personal curiosity and enthusiasm for DELTARUNE while awaiting the release of Chapters 3 and 4. All external links are intentionally removed or self-referencing to prevent any potential misuse or confusion.

## Key Features

The project focuses on mimicking the main sections of the DELTARUNE website as of May 22nd, 2025:

*   **Home:** Features a countdown to the anticipated June 4th, 2025 release date of Chapters 3 & 4, a video player for the Nintendo Switch 2 Announce Trailer, and animated spire elements with reveal animations.
*   **Game:** Displays a grid of images with placeholder links representing the platforms where DELTARUNE is available (Steam, Nintendo Switch 2, PS5, Nintendo Switch, PS4).
*   **Demo:** Includes a scroll-reveal animation for a Castle Town GIF, a parallax effect on pulsating, randomly positioned stars (implemented with custom JavaScript), and information on where to download the Chapter 1 & 2 demo (PC/MAC, Nintendo Switch, PS4).
*   **About:** Showcases a main GIF of the three heroes (Susie, Kris, Ralsei) with a parallax effect on pulsating, randomly positioned particles. Below this, there's a description of the game and a grid of game images utilizing the Fancybox library for a gallery view.
*   **News:** A section mimicking the signup for email updates (Mailing list, Blue Sky, and X/Twitter links are placeholders) and a list of recent news entries with images, dates, titles, and descriptions.

## Main Technologies and Dependencies

*   **Next.js 15**: The React framework used for building the application structure, routing, and server-side rendering (where applicable).
*   **React 19**: The JavaScript library for building the user interface.
*   **TailwindCSS v4**: The utility-first CSS framework used for styling and layout, with a focus on recreating the visual style of the DELTARUNE website.
*   **Fancybox**: A JavaScript library used for displaying images in a lightbox/gallery format.

## Full List of Dependencies

```json
  "dependencies": {
    "@fancyapps/ui": "^5.0.36",
    "next": "15.3.2",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "15.3.2",
    "@eslint/eslintrc": "^3"
  }
```


## Setup and Installation

### Clone the Repository

1. Clone this repository to your local machine:

```sh
git clone "https://github.com/JairGuzman1810/deltarune-nextjs"
```
2. Navigate into the project directory:

```sh
cd deltarune-nextjs
```

### Install Dependencies

1. Run the following command to install all necessary dependencies:

```sh
bun install
```

## Running the Application

1. Once you've installed all dependencies and configured your environment variables, you can run the application using the following command:

```sh
bun run dev
```

## Screenshots of the Application

<div style="display:flex; flex-wrap:wrap; justify-content:space-between;">
  <img src="https://github.com/JairGuzman1810/deltarune-nextjs/blob/master/resources/App-1.png" alt="Screenshot 1" width="30%" style="align-self:flex-start;" />
  <img src="https://github.com/JairGuzman1810/deltarune-nextjs/blob/master/resources/App-2.png" alt="Screenshot 2" width="30%" style="align-self:flex-start;" />
  <img src="https://github.com/JairGuzman1810/deltarune-nextjs/blob/master/resources/App-3.png" alt="Screenshot 3" width="30%" style="align-self:flex-start;" />
</div>

<div style="display:flex; flex-wrap:wrap; justify-content:space-between; margin-top:16px;">
  <img src="https://github.com/JairGuzman1810/deltarune-nextjs/blob/master/resources/App-4.png" alt="Screenshot 4" width="30%" style="align-self:flex-start;" />
  <img src="https://github.com/JairGuzman1810/deltarune-nextjs/blob/master/resources/App-5.png" alt="Screenshot 5" width="30%" style="align-self:flex-start;" />
</div>

## Disclaimer

DELTARUNE © Toby Fox 2018-2025. All rights reserved.
Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.
"PlayStation" and the "PS" Family logo are registered trademarks and "PS4" is a trademark of Sony Interactive Entertainment LLC.
Nintendo Switch™ is a trademark of Nintendo.

This project is a fan-made creation for learning purposes only and is not intended for commercial use or distribution. All creative rights belong to their respective owners.

