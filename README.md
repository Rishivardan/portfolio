# Portfolio Website

A personal portfolio built with React and Vite. The site includes sections for About, Projects (with filters), Education, Technical Skills, Certifications, Contact, and a footer with quick links.

## Features

- Modern hero with scroll-reveal animations
- Project filters and hover action icons
- Skills filters with custom logo/text icons
- Clickable certifications with external links
- EmailJS contact form integration
- Responsive layout for desktop and mobile

## Tech Stack

- React 19
- Vite 7
- EmailJS
- CSS (custom styling)

## Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Environment Variables (EmailJS)

Create a `.env` file in the project root with:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Make sure your EmailJS template uses these variables:

- `{{from_name}}`
- `{{from_email}}`
- `{{message}}`

Set Reply-To to `{{from_email}}` in the EmailJS template so you can reply to the sender.

## Assets

Place custom images in `public/`:

- `public/profile.jpeg` (About photo)
- `public/rag-chatbot.png` (RAG chatbot project)
- `public/study-planner.png` (AI study planner project)

## Project Configuration

Update content in `src/App.jsx`:

- `PROFILE` for your details
- `PROJECTS` for your work
- `SKILL_GROUPS` for skills and icons
- `CERTIFICATIONS` for certificates and links

## License

This project is for personal portfolio use.
