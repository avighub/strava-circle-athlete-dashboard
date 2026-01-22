# StravaCircle

A modern, minimal analytics dashboard for tracking athletic performance and activities. StravaCircle connects with Strava to provide detailed insights into your running, cycling, and swimming activities with beautiful visualizations and comprehensive metrics.

## Features

- **Activity Dashboard** - View comprehensive overview of all your activities with key metrics
- **Performance Analytics** - Interactive charts showing activity trends over time
- **Activity Tracking** - Detailed table with sortable activity logs including distance, time, and pace
- **Activity Management** - Browse all activities with filtering and comparison tools
- **Athlete Comparison** - Compare performance metrics with other athletes
- **Advanced Insights** - Detailed analysis and performance insights
- **User Settings** - Customize dashboard preferences and account settings
- **Strava Integration** - Seamless login and data synchronization with Strava API
- **Responsive Design** - Optimized for desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Frontend**: React 19.2, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui components
- **Charts**: Recharts for data visualization
- **UI Components**: Radix UI primitives
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

## Installation

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd strava-circle
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Add your environment variables here
   # Example:
   # NEXT_PUBLIC_STRAVA_CLIENT_ID=your_strava_client_id
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## Strava Integration

To enable Strava login functionality:

1. Go to [Strava Settings](https://www.strava.com/settings/api)
2. Create a new OAuth Application
3. Note your Client ID and Client Secret
4. Configure the redirect URI in your Strava app settings
5. Add the credentials to your environment variables

## Project Structure

```
StravaCircle/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page (redirects to dashboard)
│   ├── login/                  # Authentication pages
│   │   └── page.tsx
│   └── dashboard/              # Dashboard pages
│       ├── layout.tsx
│       ├── page.tsx
│       ├── activities/
│       ├── compare/
│       ├── insights/
│       └── settings/
├── components/
│   ├── dashboard/              # Dashboard-specific components
│   │   ├── sidebar.tsx
│   │   ├── header.tsx
│   │   ├── filters.tsx
│   │   ├── metrics-grid.tsx
│   │   ├── performance-chart.tsx
│   │   └── activity-table.tsx
│   └── ui/                     # Shadcn UI components
├── lib/
│   └── utils.ts               # Utility functions
├── app/globals.css             # Global styles and design tokens
└── next.config.mjs             # Next.js configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

3. **Configure Environment Variables**
   - In Vercel project settings, add your environment variables
   - Include Strava API credentials

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application

### Deploy to Other Platforms

#### Docker Deployment
```bash
# Build Docker image
docker build -t strava-circle .

# Run container
docker run -p 3000:3000 strava-circle
```

#### Manual Deployment
```bash
# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

Required environment variables (if using Strava integration):

```env
NEXT_PUBLIC_STRAVA_CLIENT_ID=your_client_id
STRAVA_CLIENT_SECRET=your_client_secret
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Server-side rendering for faster initial page load
- Image optimization with Next.js Image component
- CSS and JavaScript code splitting
- Recharts for efficient data visualization

## Design System

StravaCircle uses a cohesive design system with:

- **Colors**: Strava orange (#FC4C02) as primary accent with light neutral palette
- **Typography**: Clean, readable fonts with consistent hierarchy
- **Components**: Reusable shadcn/ui components with Tailwind CSS customization
- **Spacing**: Consistent spacing scale based on Tailwind's design system

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or feedback:

- Open an issue on GitHub
- Contact the development team
- Check existing documentation

## Roadmap

- [ ] Advanced activity filtering and search
- [ ] Social features (follow athletes, leaderboards)
- [ ] Custom workouts and training plans
- [ ] Export data to CSV/PDF
- [ ] Dark mode support
- [ ] Mobile app version
- [ ] Real-time activity notifications

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Data visualization with [Recharts](https://recharts.org/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Strava API integration
