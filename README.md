# Study Night - Flashcard Application

A flashcard tool for studying that allows users to create card sets and study with interactive flashcards.

## Project Overview

This project demonstrates front-end optimization and testing best practices, including:
- Code quality enforcement with ESLint and Prettier
- Unit testing with Mocha and Chai
- End-to-end testing with Cypress
- Build optimization with Parcel
- Task automation with Gulp

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository (if you haven't already):
```bash
git clone <repository-url>
cd frontend-preparing-for-production
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode

To run the application in development mode with live reload:

```bash
npm run gulp
```

This will:
- Start the Parcel development server
- Open the application in your default browser at `http://localhost:1234`
- Watch for file changes and auto-reload

### Production Build

To create an optimized production build:

```bash
npx parcel build index.html
```

The optimized files will be created in the `dist/` directory with:
- Minified CSS and JavaScript
- Optimized and compressed images
- Bundled and concatenated files

## Running Tests

### Unit Tests (Mocha)

To run the unit tests:

```bash
npm test
```

Or:

```bash
npm run gulp test
```

This will run all Mocha tests in the `test/` directory.

### End-to-End Tests (Cypress)

**Important:** The development server must be running before executing Cypress tests.

#### Option 1: Run tests in headless mode

1. Start the development server in one terminal:
```bash
npm run gulp
```

2. In a separate terminal, run Cypress tests:
```bash
npm run gulp cypress
```

#### Option 2: Run tests interactively

1. Start the development server in one terminal:
```bash
npm run gulp
```

2. In a separate terminal, open Cypress Test Runner:
```bash
npx cypress open
```

3. Select "E2E Testing" and choose a browser
4. Click on test files to run them interactively

## Code Quality

### Linting

To check for ESLint errors:

```bash
npx eslint src/**/*.js
```

### Formatting

To format code with Prettier:

```bash
npx prettier --write "src/**/*.js"
```

## Project Structure

```
frontend-preparing-for-production/
├── cypress/
│   ├── e2e/
│   │   ├── navigation.cy.js    # Navigation tests
│   │   └── form.cy.js           # Form validation tests
│   └── cypress.config.js        # Cypress configuration
├── data/
│   └── data.js                  # Application data
├── images/
│   ├── aboutImage.png
│   └── homePage.png
├── src/
│   ├── aboutPage.js
│   ├── cardSetsPage.js
│   ├── cardsPage.js
│   ├── createCard.js
│   ├── createSet.js
│   ├── errors.js
│   ├── homePage.js
│   ├── index.js
│   ├── shuffle.js               # Shuffle function (tested)
│   └── utilityRenderFunctions.js # DOM helper functions
├── styles/
│   ├── about.css
│   ├── flipcard.css
│   ├── form.css
│   ├── home.css
│   ├── navigationMenu.css
│   └── style.css
├── test/
│   └── shuffle.js               # Mocha unit tests
├── .gitignore
├── .prettierrc                  # Prettier configuration
├── eslint.config.js             # ESLint configuration
├── gulpfile.js                  # Gulp task automation
├── index.html                   # Main HTML file
├── package.json
└── README.md
```

## Available Gulp Tasks

- `gulp` (default): Start the development server with Parcel
- `gulp test`: Run Mocha unit tests
- `gulp cypress`: Run Cypress E2E tests (requires server to be running)

## Technologies Used

### Core
- HTML5
- CSS3
- JavaScript (ES6+)

### Development Tools
- **Parcel**: Build tool and bundler
- **Gulp**: Task automation
- **ESLint**: Code linting
- **Prettier**: Code formatting

### Testing
- **Mocha**: Unit testing framework
- **Chai**: Assertion library
- **Cypress**: End-to-end testing framework

## Features

- Create flashcard sets with custom titles
- Add flashcards with terms and descriptions
- Interactive flip cards for studying
- Shuffle functionality for random card order
- Form validation with error handling
- Responsive design for mobile and desktop

## Testing Coverage

### Unit Tests
- Shuffle function validation
- Array immutability checks
- Edge case handling (empty arrays, single elements)

### E2E Tests
- Navigation between pages (Home, About, Card Sets)
- Form submissions (happy paths)
- Form validation (unhappy paths with empty inputs)
- Error message display

## License

MIT
