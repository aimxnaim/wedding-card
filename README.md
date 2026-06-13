# Wedding Card — Malay Digital Invitation

A digital Malay wedding invitation card built with React (Vite + TypeScript) on the frontend and Express on the backend.

## Features

- **Welcome** — Opening screen with the couple's names, wedding date, and a welcoming message
- **Pre-Wedding Photos** — Gallery of pre-wedding photography
- **Location Map** — Embedded map with venue name, address, and directions
- **Guest Wishes** — Guests can submit and view well-wishes (ucapan)
- **Doa** — Wedding prayer/doa section displayed for guests to read
- **QR Code** — Scannable QR code for easy sharing of the invitation link

## Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | React 19, TypeScript, Vite        |
| Backend  | Node.js, Express 5                |

## Project Structure

```
wedding-card/
├── frontend/        # React + Vite app
│   └── src/
└── backend/         # Express API server
    └── index.js
```

## Getting Started

### Prerequisites

- Node.js 18+

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and the backend on the port defined in `backend/.env`.
