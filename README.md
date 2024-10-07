# Duolingo Clone

A React-based language learning application inspired by Duolingo.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project-Structure](#Project-Structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Testing](#testing)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a Duolingo-inspired language learning platform built with React. It aims to provide an interactive and engaging way for users to learn new languages through various exercises, progress tracking, and gamification elements.

## Project-Structure

```
duolingo-clone/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── AuthModal.tsx
│   │   │   ├── Login.tsx
│   │   │   └── Signup.tsx
│   │   ├── Common/
│   │   │   └── TopIcon.tsx
│   │   ├── Layout/
│   │   │   ├── Header.tsx
│   │   │   └── Layout.tsx
│   │   ├── Learn/
│   │   │   ├── LearningPath.tsx
│   │   │   ├── LessonButton.tsx
│   │   │   └── LessonInterface.tsx
│   │   └── Sidebar/
│   │       ├── Sidebar.tsx
│   │       ├── LeaderboardSection.tsx
│   │       ├── DailyQuestsSection.tsx
│   │       └── ProfileSection.tsx
│   ├── contexts/
│   │   ├── AuthContext.tsx
│   │   └── LessonContext.tsx
│   ├── hooks/
│   │   └── useScrollPosition.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Learn.tsx
│   │   ├── Leaderboards.tsx
│   │   └── LettersPage.tsx
│   ├── utils/
│   │   └── api.ts
│   ├── App.tsx
│   └── index.tsx
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── tailwind.config.js
```

### Key Directories and Files

- `public/`: Contains the HTML template and favicon
- `src/`: Contains all the source code for the application
  - `components/`: Reusable React components organized by feature
  - `contexts/`: React context providers for global state management
  - `hooks/`: Custom React hooks
  - `pages/`: Components that represent entire pages in the application
  - `utils/`: Utility functions and API-related code
  - `App.tsx`: The root component of the application
  - `index.tsx`: The entry point of the application
- `package.json`: Defines project dependencies and scripts
- `tsconfig.json`: TypeScript configuration file
- `tailwind.config.js`: Tailwind CSS configuration file


## Features

- User authentication (signup, login, logout)
- Interactive lesson interface with drag-and-drop functionality
- Progress tracking with a heart system
- Responsive design for mobile and desktop
- Toast notifications for user feedback
- Leaderboard system (coming soon)

## Technologies Used

- React
- TypeScript
- React Query for data fetching and caching
- Axios for API requests
- React Router for navigation
- Tailwind CSS for styling
- React Beautiful DND for drag-and-drop functionality
- React Hot Toast for notifications

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository
   ```
   git clone https://github.com/yourusername/duolingo-clone.git
   ```

2. Install NPM packages
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Auth/
│   ├── Common/
│   ├── Layout/
│   ├── Learn/
│   └── Sidebar/
├── contexts/
├── hooks/
├── pages/
├── utils/
└── App.tsx
```

## Key Components

- `AuthModal`: Handles user authentication
- `LearningPath`: Displays available lessons and user progress
- `LessonInterface`: Manages the interactive lesson experience
- `Sidebar`: Provides additional navigation and user information

## State Management

- React Context for global state (auth, lesson progress)
- React Query for server state management and data fetching

## API Integration

- Centralized API calls in `utils/api.ts`
- React Query hooks for efficient data fetching and caching

## Styling

Tailwind CSS is used for styling, allowing for rapid UI development and easy customization.

## Testing

(Add information about your testing setup and how to run tests)

## Deployment

(Add information about how your app is deployed)

## Future Improvements

- Implement more exercise types (multiple choice, speaking exercises)
- Add a spaced repetition system
- Integrate with a backend service for progress persistence
- Implement social features (friends, leaderboards)
- Add accessibility features

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.