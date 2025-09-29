# Alma test task

This application is implemented using Next.js.

## Installation

To install dependencies, run:
```bash
npm install
```

## Development

To start the development server, run:
```bash
npm run dev
```

## How to Test/Use the Application

The application includes the following pages:

### Public Pages (No Authentication Required)
- **`/`** - Create lead page where users can submit lead forms
- **`/success`** - Confirmation page shown after successfully submitting a lead form
- **`/sign-in`** - Authentication page to sign in and access private pages

### Private Pages (Authentication Required)
- **`/leads`** - Leads management page displaying all created leads
- **`/settings`** - Settings page (currently empty, created from UI mock)

## Authentication

Authentication implemented in a naive way using the Next-auth package.

To sign in to the application, use the following mock user credentials:
- **Username:** `JohnDoe`
- **Password:** `JohnDoe`

## Task Requirements & TODO List

### Public Lead Form
- [x] A form PUBLICLY available for prospects to fill in
- [x] Upon submission, display a confirmation message to the prospect
- [x] Match the mock-up design as closely as possible

### Internal Leads List UI
- [x] Internal UI guarded by authentication to display a list of leads with all information
- [x] Each lead should have a state that starts as PENDING
- [ ] Leads can be manually transitioned to REACHED_OUT by internal users
- [ ] Include a button to change lead state from PENDING to REACHED_OUT
- [x] Match the mock-up design as closely as possible

### Tech Requirements
- [x] Use Next.js to implement the application
- [x] Mock the API endpoints if necessary
- [x] Implement a mock authentication mechanism to protect internal leads list UI
- [ ] Implement file upload for the resume/CV
- [x] Implement form validation to ensure all required fields are filled correctly
- [x] Style the application using CSS or CSS-in-JS library
- [x] Match the mock-up designs as closely as possible

### Bonus Points
- [x] Implement API routes using Next.js API (for AUTH)
- [ ] Use JsonForms to implement the lead form in a configuration driven way
- [ ] Use a state management library (e.g., Redux) to manage leads state
- [ ] Implement unit tests for key components and functionalities
- [ ] Add responsiveness for different screen sizes
- [x] Use TypeScript for type safety
- [x] Implement form validation feedback (error messages)
- [x] Document the system design

