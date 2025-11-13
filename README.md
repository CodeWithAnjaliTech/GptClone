# GPTClone

A simplified GPT-style application built with React, TypeScript, TailwindCSS, and Node.js Express. This application demonstrates a chat interface with structured table data display, feedback system, and theme switching capabilities.

## Features

### Frontend (React, TypeScript, TailwindCSS)
- ✅ **Landing Page** - Clean "New Chat" screen to start conversations
- ✅ **Left Side Panel** - Collapsible sidebar with sessions list, "New Chat" option, and user info
- ✅ **Chat Interface** - Interactive chat with question input and response display
- ✅ **Table View** - Structured tabular data display with descriptions
- ✅ **Answer Feedback** - Like/Dislike buttons for each answer
- ✅ **Dark/Light Theme** - Full theme toggle with persistent preference
- ✅ **Responsive Design** - Works seamlessly on mobile, tablet, and desktop

### Backend (Node.js, Express)
- ✅ **Mock Data API** - Serves structured JSON data via REST API
- ✅ **Question Processing** - Intelligent keyword matching for different data types
- ✅ **CORS Enabled** - Configured for frontend communication

## Tech Stack

**Frontend:**
- React 18
- TypeScript
- TailwindCSS
- Vite

**Backend:**
- Node.js
- Express
- TypeScript

## Project Structure

```
cursorProject2/
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ChatInterface.tsx
│   │   │   ├── MessageBubble.tsx
│   │   │   ├── SidePanel.tsx
│   │   │   ├── TableView.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── pages/          # Page components
│   │   │   └── LandingPage.tsx
│   │   ├── hooks/          # Custom hooks
│   │   │   └── useTheme.ts
│   │   ├── services/       # API services
│   │   │   └── api.ts
│   │   ├── types/          # TypeScript types
│   │   │   └── index.ts
│   │   ├── App.tsx         # Main app component
│   │   ├── main.tsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── package.json
│   └── vite.config.ts
├── backend/
│   ├── src/
│   │   ├── routes/         # API routes
│   │   │   └── chatRoutes.ts
│   │   ├── controllers/    # Route controllers
│   │   │   └── chatController.ts
│   │   ├── data/           # Mock JSON data
│   │   │   └── mockData.json
│   │   ├── app.ts          # Express app setup
│   │   └── server.ts        # Server entry point
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd cursorProject2/backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The backend server will run on **http://localhost:4040**

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd cursorProject2/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on **http://localhost:3000**

## API Endpoints

### POST `/api/chat/ask`
Ask a question and receive structured data response.

**Request Body:**
```json
{
  "question": "Show me sales data"
}
```

**Response:**
```json
{
  "message": "Here is the sales data...",
  "tableData": {
    "headers": ["Product", "Region", "Revenue"],
    "rows": [
      ["Laptop Pro 15", "North America", "$125,000"]
    ]
  },
  "description": "Here is the sales data for the last quarter..."
}
```

**Supported Keywords:**
- `sales` or `sale` - Returns sales data
- `user` or `users` - Returns user analytics
- `product` or `products` - Returns product catalog
- `revenue` or `revenues` - Returns revenue breakdown
- `employee` or `employees` - Returns employee directory
- `order` or `orders` - Returns order details
- Any other question - Returns default data

### GET `/health`
Health check endpoint to verify server status.

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

## Usage

1. Start both backend and frontend servers (in separate terminals)
2. Open `http://localhost:3000` in your browser
3. Click "New Chat" or "Start New Chat" to begin a conversation
4. Type a question (try: "sales", "users", "products", "revenue", "employees", "orders")
5. View the response in table format with description
6. Use Like/Dislike buttons to provide feedback
7. Toggle dark/light theme using the button in the top bar
8. Use the sidebar menu (hamburger icon on mobile) to access "New Chat" and user info

## Development

### Frontend Development
```bash
cd cursorProject2/frontend
npm run dev
```

### Backend Development
```bash
cd cursorProject2/backend
npm run dev
```

### Building for Production

**Frontend:**
```bash
cd cursorProject2/frontend
npm run build
```

**Backend:**
```bash
cd cursorProject2/backend
npm run build
npm start
```

## Port Configuration

- **Frontend:** Port 3000
- **Backend:** Port 4040

Make sure both ports are available before starting the servers.

## Notes

- The backend uses mock JSON data stored in `backend/src/data/mockData.json`
- Theme preference is saved in browser localStorage
- The application is fully responsive and works on mobile devices
- Session management is not implemented (will be added in future)
- All data is served from static JSON files (no database required)

## Code Quality

- Clean, modular, and well-structured code
- TypeScript for type safety
- Responsive design with TailwindCSS
- Follows React and Express best practices
- Proper error handling and loading states

## License

This project is created for educational purposes.

