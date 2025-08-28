// This will be 'development' when running `npm start` or `yarn dev`
// and 'production' when running `npm run build` or `yarn build`.
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// Define your base URLs
const API_BASE_URL_DEV = 'http://localhost:5000/api'; // Your local development backend
const API_BASE_URL_PROD = '/api'; // Your production backend

// Select the appropriate base URL
export const API_BASE_URL = IS_PRODUCTION ? API_BASE_URL_PROD : API_BASE_URL_DEV;

// You can also export other configuration variables if needed
// export const ANOTHER_CONFIG_VALUE = 'some_value';

// Log for debugging during startup (optional, consider removing for production builds if too noisy)
console.log(`API Configuration Loaded. Environment: ${process.env.NODE_ENV}, Base URL: ${API_BASE_URL}`);