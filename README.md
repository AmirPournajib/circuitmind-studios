# CircuitMind Studios

Website for CircuitMind Studios: hands-on machine learning workshops, career coaching, and fast proof-of-concept builds for teams with an idea to test.

![React](https://img.shields.io/badge/React-18-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white)

## Pages

| Route | File | What it covers |
|---|---|---|
| `/` | `App.jsx` | Home: overview of the three services and contact |
| `/workshops/ml` | `pages/WorkshopPage.jsx` | Interactive machine learning workshops |
| `/coaching` | `pages/CoachingPage.jsx` | One-to-one career coaching |
| `/poc` | `pages/PoCPage.jsx` | Turning an idea into a working proof of concept |

## Tech

- **React 18** with **React Router** for pages
- **Vite** for the dev server and build
- **Tailwind CSS** for styling, with a responsive navbar
- **Framer Motion** for page animations
- ESLint and Prettier for code style

## Run it locally

```bash
git clone https://github.com/AmirPournajib/circuitmind-studios.git
cd circuitmind-studios
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Project structure

```text
src/
  main.jsx           Routes
  App.jsx            Home page and navbar
  pages/
    HomePage.jsx
    WorkshopPage.jsx
    CoachingPage.jsx
    PoCPage.jsx
public/              Images and favicon
```

## Credits

Started from the [vite-react-tailwind-starter](https://github.com/itsMinar/vite-react-tailwind-starter) template by Md. Minar Munshi.
