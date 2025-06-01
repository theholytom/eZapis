# eZapis - Volleyball Scoring Application

## Overview

eZapis is a modern web application designed for managing and scoring volleyball matches. It provides an intuitive interface for tracking games, managing teams, and viewing match statistics in real-time. It was created as semestral project as part of studies at CTU Prague.

The scope of this project was to create a front-end application that offers to handle some of the agenda performed by volleyball match organisors. Back-end is not in the scope of this project, therefore features relyant on back-end prepared for its implementation in the future and are not functional at the moment.

## Technologies Used

-   React
-   TypeScript
-   Tailwind CSS
-   Shadcn/ui
-   React Router
-   Vite

## Access

Users can access this app via this link: https://theholytom.github.io/eZapis/ as the project was deployed with github pages.

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── ui/        # Base UI components
│   └── ...        # Feature-specific components
├── data/          # Static data and mock databases
├── pages/         # Page components and routes
├── styles/        # Global styles and Tailwind configuration
└── App.tsx        # Main application component
```

## Features

### Core Components

#### Navigation & Layout

-   **Navigation Bar**: Features the Czech Volleyball Federation logo with a direct link to the official website, along with intuitive navigation links. Implements responsive design patterns that adapt to various screen sizes.
-   **Footer**: Provides quick access to Czech volleyball social media channels, affiliated volleyball institutions, and project resources including bug reporting and administrative contact information.

#### Match Management

-   **Match Overview Page**: Displays a comprehensive table of scheduled matches with intelligent styling that highlights upcoming events. Each match entry is interactive, linking to detailed match information.
-   **Match Viewer**:
    -   Scoreboard display
    -   Complete team rosters
    -   Disciplinary card tracking system (yellow/red cards)
    -   Optimized for spectators and fans following matches
-   **Match Editor**:
    -   Dedicated interface for match officials and authorized personnel
    -   Real-time score management
    -   Player substitution system (in development)
    -   Disciplinary action recording
    -   Past matches are read-only as they cannot be edited
    -   Changes made to matches are not being saved

#### User Features

-   **Homepage Dashboard**:
    -   Featured matches with direct access links
    -   Statistical highlights and performance metrics
    -   Dynamic content updates based on match progression
-   **Authentication System**:
    -   Secure login and registration forms (`/login`, `/register`)
    -   Form validation with immediate feedback
    -   Note: Backend integration pending for full authentication implementation
-   **Favorites System**:
    -   Personalized content section (requires authentication)
    -   Customizable dashboard for following specific teams or matches
    -   Note: Currently displaying prototype content; full personalization pending authentication implementation

### Technical Features

-   Intuitive user interface with consistent design patterns
-   Cross-browser compatibility

### Upcoming Features - if development continues

-   Complete authentication system integration
-   Enhanced user personalization
-   Advanced statistics and analytics
-   Team management portal
-   Official match report generation

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/eZapis.git
cd eZapis
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Tomáš Holý - holytom5@fel.cvut.cz
Project Link: https://github.com/yourusername/eZapis
