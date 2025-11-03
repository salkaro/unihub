# UniHub

A centralized academic dashboard for university students to track assignments, manage courses, and access educational resources in one place.

## Description

UniHub is a modern web application built with Next.js that consolidates academic information from multiple sources into a single, user-friendly interface. By integrating with Gradescope and other educational platforms, UniHub helps students stay organized and on top of their coursework.

### Key Features

- **Unified Dashboard** - View all upcoming assignments and enrolled modules at a glance
- **Assignment Tracking** - Real-time assignment listings with due dates, status badges, and submission tracking
- **Smart Filtering** - Automatically filters out completed assignments and shows only relevant upcoming work
- **Course Management** - Display enrolled courses with semester information and assignment counts
- **Resource Access** - Quick links to Blackboard, lecture recordings, gradebooks, and other course resources
- **Dark/Light Mode** - Toggle between themes for comfortable viewing in any environment
- **Responsive Design** - Fully responsive interface that works seamlessly on desktop and mobile devices
- **Session Caching** - Intelligent caching system with 1-hour TTL for faster performance

### Technology Stack

**Framework & Core:**
- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety and developer experience

**UI & Styling:**
- **Chakra UI 2.10.9** - Component library with theming support
- **Framer Motion 12.23.24** - Smooth animations and transitions
- **Tailwind CSS 4** - Utility-first CSS framework
- **Emotion** - CSS-in-JS styling

**Integration:**
- **Gradescope API** - Custom FastAPI backend for course and assignment data

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Access to a Gradescope account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd unihub
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Setup

The application is configured to connect to the Gradescope API. Make sure the API server is running and accessible.

## Project Structure

```
src/
├── app/
│   ├── api/                    # API routes
│   │   ├── gs-login/          # Gradescope authentication
│   │   ├── gs-courses/        # Fetch courses
│   │   └── gs-assignments/    # Fetch assignments
│   ├── dashboard/             # Main dashboard page
│   ├── module/                # Module-specific pages
│   │   └── physics/           # Physics resources
│   ├── layout.tsx             # Root layout with metadata
│   ├── page.tsx               # Login page
│   └── providers.tsx          # Chakra UI provider
├── components/
│   ├── app/                   # Application components
│   │   ├── LoginPage.tsx      # Login form
│   │   └── dashboard/         # Dashboard components
│   │       ├── Page.tsx       # Dashboard container
│   │       ├── Modules.tsx    # Course modules grid
│   │       └── UpcomingAssignments.tsx  # Assignment list
│   └── ui/                    # Reusable UI components
│       ├── navbar.tsx         # Navigation bar
│       └── module-card.tsx    # Module card component
├── lib/
│   └── api.ts                 # API client functions
└── styles/
    └── globals.css            # Global styles
```

## Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Login | User authentication with email/password |
| `/dashboard` | Dashboard | Main view with assignments and modules |
| `/module/physics` | Physics Resources | Quick links to physics course materials |

## Features in Detail

### Smart Assignment Management

The dashboard intelligently filters assignments to show only relevant items:
- Filters out submitted assignments that are past due
- Hides assignments overdue by more than 1 week (if not submitted)
- Color-coded status badges:
  - **Red**: Overdue
  - **Orange**: Due today
  - **Yellow**: Due tomorrow
  - **Blue**: Shows days remaining

### Session-Based Caching

To improve performance and reduce API calls:
- Credentials and API responses stored in sessionStorage
- 1-hour cache duration for courses and assignments
- Automatic cache invalidation on retry
- Persists across page refreshes within the same session

### Module Filtering

The system automatically filters out specific courses (e.g., administrative or archived courses) from the student view for a cleaner interface.

## API Integration

UniHub connects to a custom Gradescope API backend. The following endpoints are available:

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/gs-login` | POST | Authenticate user with Gradescope |
| `/api/gs-courses` | GET | Fetch all enrolled courses |
| `/api/gs-assignments` | POST | Fetch assignments for a course |

See the [Gradescope API documentation](../../../unihub/gradescope-api/README.md) for more details.

## Development

### Building for Production

```bash
npm run build
# or
yarn build
```

### Linting

```bash
npm run lint
# or
yarn lint
```

## Deployment

The application is configured for deployment on Vercel with the following settings:

- Production URL: `https://unihub.salkaro.com`
- CORS origins: `http://localhost:3000`, `https://unihub.salkaro.com`

## Future Enhancements

Planned features and improvements:
- Additional module pages (Maths A, Maths B, Astronomy, Geoscience)
- Calendar view for assignments
- Notification system for upcoming deadlines
- Assignment submission tracking and statistics
- Integration with additional educational platforms
- Export functionality for assignment data

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is developed by Salkaro.

## Authors

- Salkaro

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Chakra UI](https://chakra-ui.com/)
- Integrates with [Gradescope](https://www.gradescope.com/)