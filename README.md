# LECTER Lounge Bar Web App

A luxury, mobile-first React application for LECTER Lounge Bar.

## 🚀 How to Run Locally

1.  **Download the files**: Save all the files in a folder named `lecter-lounge`.
2.  **Install dependencies**:
    Open your terminal/command prompt in that folder and run:
    ```bash
    npm install
    ```
3.  **Add your logo**:
    Place your logo image file named `logo.png` in the `public` folder (create one if it doesn't exist) or directly in the root folder alongside `index.html`.
4.  **Start the server**:
    ```bash
    npm run dev
    ```
    Open the link shown (usually `http://localhost:5173`) in your browser.

## ☁️ How to Deploy to Vercel

Vercel is the easiest way to host this app for free.

1.  **Push to GitHub**:
    - Create a new repository on GitHub.
    - Upload all these files to that repository.

2.  **Connect to Vercel**:
    - Go to [vercel.com](https://vercel.com) and log in.
    - Click **"Add New..."** -> **"Project"**.
    - Select your GitHub repository (`lecter-lounge`).
    - Click **"Deploy"**.

Vercel will automatically detect that this is a Vite project and build it. Within a minute, your site will be live!

## 🛠 Project Structure

- `src/` - Source code
  - `components/` - React components (Header, Menu, Cart, etc.)
  - `constants.ts` - Menu items, prices, and translations. **Edit this file to change menu content.**
  - `types.ts` - TypeScript definitions.
  - `App.tsx` - Main application logic.
- `index.html` - Entry HTML file.
- `vite.config.ts` - Build configuration.
