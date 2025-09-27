# Next.js Project Setup and Basics

This project is a comprehensive introduction to setting up and working with Next.js, TypeScript, and Tailwind CSS. It guides you through creating a modern web application with reusable components, routing, API integration, and proper project structure. The project covers fundamental concepts from initial setup to building interactive components and fetching data from external APIs.

## Purpose

The goal of this repository is to provide a clean, well-structured foundation for learning and implementing:

- **Next.js** with **TypeScript**
- **Tailwind CSS** for responsive styling
- Best practices in project organization and component design

## Folder Structure

```

├── alx-project-0x02/
|   |
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── PostCard.tsx
│   │   │   ├── PostModal.tsx
│   │   └── layout/
│   │       └── Header.tsx
│   ├── interfaces/
│   │   └── index.ts
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── about.tsx
│   │   ├── home.tsx
│   │   ├── index.tsx
│   │   ├── posts.tsx
│   │   └── api/
│   │       └── hello.ts
│   ├── styles/
│   |   └── globals.css
|   |
│   ├── .gitignore
│   ├── eslint.config.mjs
│   ├── next-env.d.ts
│   ├── next.config.ts
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── README.md
│   ├── tsconfig.json
│
```

## Getting Started

1. **Install dependencies**

   Open your terminal and run:
   ```
   npm install
   ```

2. **Run the development server**

   ```
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

3. **Build for production**

   ```
   npm run build
   ```

4. **Start the production server**

   ```
   npm start
   ```
