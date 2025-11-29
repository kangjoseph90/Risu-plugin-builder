# Risu Plugin Builder

A boilerplate template for building plugins for RisuAI using **Svelte**, **TypeScript**, and **Tailwind CSS**. This project provides a pre-configured environment to jumpstart your plugin development.

## Features

### Modern Tech Stack

-   **Svelte 4**: Build reactive and efficient UI components.
-   **TypeScript**: Develop with type safety and better developer experience.
-   **Tailwind CSS**: Style your plugin quickly with utility-first CSS.
-   **Vite**: Fast build tool and development server.

### RisuAI Integration

-   **API Wrapper**: Includes a `RisuAPI` wrapper for easy interaction with RisuAI's core functions.
-   **Header Generation**: Automatically generates the required metadata header for RisuAI plugins.
-   **Optimized Build**: Produces a single JavaScript file ready for import into RisuAI.
-   **Example Components**:
    -   `OpenButton.svelte`: Demonstrates how to inject a button into the RisuAI UI.
    -   `MyPopup.svelte`: Example of a modal/popup component.

---

## Getting Started

### 1. Clone & Install

Clone this repository and install dependencies:

```sh
npm install
```

### 2. Build

Build your plugin for production:

```sh
npm run build
```

The output file will be located at `dist/my-plugin.js`.

### 3. Import

Import the built file into RisuAI to test and use your plugin.

---

## License

This project is licensed under the **MIT License**.
