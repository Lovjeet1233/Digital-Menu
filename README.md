# OrderEase

OrderEase is a pizza ordering system built with React.js and Redux. This project demonstrates a simple yet functional e-commerce platform where users can browse pizzas, add them to the cart, and proceed to checkout.

## Features

- Browse a list of pizzas
- Add pizzas to the cart
- View cart items
- Login functionality (placeholder)
- Responsive design with Bootstrap

## Technologies Used

- React.js
- Redux
- Redux Thunk
- Bootstrap
- Axios

## Project Structure

client/
├── public/
├── src/
│ ├── actions/
│ ├── components/
│ │ ├── Navbar.js
│ │ ├── Pizza.js
│ ├── reducers/
│ │ ├── cartReducers.js
│ │ ├── pizzaReducers.js
│ ├── screens/
│ │ ├── Homescreen.js
│ │ ├── Cartscreen.js
│ ├── App.js
│ ├── store.js
│ ├── index.js
│ ├── pizzasdata.js
│ ├── App.css
│ ├── index.css
│ ├── setupProxy.js
├── package.json
└── .gitignore

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/OrderEase.git
   cd OrderEase/client
Available Scripts
In the project directory, you can run:
Here are the packages that have been installed during the development of your OrderEase project, based on the dependencies listed in your `package.json` file:

### Dependencies

- **@testing-library/jest-dom**: Provides custom Jest matchers for asserting on DOM nodes.
- **@testing-library/react**: Simple and complete testing utilities that encourage good testing practices.
- **@testing-library/user-event**: Provides user event simulation utilities.
- **axios**: Promise-based HTTP client for making requests to the server.
- **bootstrap**: Frontend framework for responsive web design.
- **init**: Utility to help initialize a project.
- **react**: JavaScript library for building user interfaces.
- **react-dom**: Entry point for DOM-related rendering paths.
- **react-redux**: Official React bindings for Redux.
- **react-router-dom**: Declarative routing for React web applications.
- **react-scripts**: Scripts and configuration used by Create React App.
- **redux**: Predictable state container for JavaScript apps.
- **redux-devtools-extension**: Provides the Redux DevTools extension.
- **redux-thunk**: Middleware for Redux to handle asynchronous actions.
- **start**: Utility to help start scripts.
- **web-vitals**: Library for measuring web performance metrics.

### Scripts

- **start**: `set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start` - Starts the development server.
- **build**: `set NODE_OPTIONS=--openssl-legacy-provider && react-scripts build` - Builds the app for production.
- **test**: `set NODE_OPTIONS=--openssl-legacy-provider && react-scripts test` - Launches the test runner.
- **eject**: `react-scripts eject` - Ejects the Create React App configuration, allowing customization of the configuration.

### Development Dependencies (if any)

If there are additional packages that were used during development but are not listed in your `package.json`, you can run the following command to list all installed packages:

```bash
npm list --depth=0
```



npm start: Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.
npm build: Builds the app for production to the build folder.
npm test: Launches the test runner in the interactive watch mode.
npm eject: Removes this tool and copies build dependencies, configuration files, and scripts into the app directory. If you do this, you can’t go back!
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
