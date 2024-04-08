# JATE (Just Another Text Editor)

JATE is a Progressive Web Application (PWA) text editor that allows users to create and save notes or code snippets with or without an internet connection. The application features data persistence techniques using IndexedDB, ensuring reliable retrieval of content for later use. JATE also functions offline, making it a versatile tool for developers and note-takers.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [License](#license)

## Installation

To run JATE locally, follow these steps:

1. Clone the repository to your device.
2. Navigate to the project directory.
3. Install dependencies: `npm install`
4. Build the project: `npm run start`
5. Open your browser and go to `http://localhost:3001`

## Usage

Once the application is running, you can use the text editor to create, edit, and save notes or code snippets. The application utilizes IndexedDB for data storage, allowing you to access your content even without an internet connection. You can also install JATE as a Progressive Web App (PWA) for quick access from your desktop or mobile device.

## Features

- Create, edit, and save notes or code snippets
- Offline functionality using IndexedDB for data storage
- Progressive Web App (PWA) support for installation and offline access

## Technologies

JATE is built using the following technologies:

- Frontend:
  - HTML, CSS (Sass)
  - JavaScript (ES6+)
  - CodeMirror (for the text editor functionality)
- Backend:
  - Node.js
  - Express.js
- Additional Tools:
  - IndexedDB (for data storage)
  - Webpack (for bundling assets)
  - Workbox (for Service Worker and PWA functionality)


## License

This project is licensed under the [MIT License](LICENSE).
