const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const API_BASE_URL_DEV = 'http://localhost:5000/api';
const API_BASE_URL_PROD = '/api';

export const API_BASE_URL = IS_PRODUCTION ? API_BASE_URL_PROD : API_BASE_URL_DEV;

// Log for debugging during startup (optional, consider removing for production builds if too noisy)
console.log(`API Configuration Loaded. Environment: ${process.env.NODE_ENV}, Base URL: ${API_BASE_URL}`);