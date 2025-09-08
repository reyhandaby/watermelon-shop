import axios from 'axios';

const APP_ID = process.env.BACKENDLESS_APP_ID || 'YOUR_APP_ID';
const API_KEY = process.env.BACKENDLESS_API_KEY || 'YOUR_API_KEY';
const BASE_URL = process.env.BACKENDLESS_API_URL || 'https://api.backendless.com';

const API_URL = `${BASE_URL}/${APP_ID}/${API_KEY}/users`;

// Check if the browser is online
const isOnline = () => {
  return typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
    ? navigator.onLine
    : true;
};

// Validate Backendless configuration
const validateConfig = () => {
  if (APP_ID === 'YOUR_APP_ID' || API_KEY === 'YOUR_API_KEY') {
    throw new Error('Backendless configuration is incomplete. Please check your environment variables.');
  }
};

// Check Backendless API status
export const checkBackendlessStatus = async () => {
  try {
    if (!isOnline()) {
      return { status: 'offline', message: 'You are currently offline' };
    }
    
    // Validate configuration first
    if (APP_ID === 'YOUR_APP_ID' || API_KEY === 'YOUR_API_KEY') {
      return { 
        status: 'error', 
        message: 'Backendless configuration is incomplete. Please check your environment variables.'
      };
    }
    
    // Use a more reliable endpoint to check if Backendless is reachable
    // The /users/isvalidusertoken endpoint is a standard Backendless endpoint
    const pingUrl = `${BASE_URL}/${APP_ID}/${API_KEY}/users/isvalidusertoken`;
    console.log('Checking Backendless connection at:', pingUrl);
    
    try {
      const response = await axios.get(pingUrl, { 
        timeout: 5000,
        params: { token: 'test-token' } // This will fail with 401, but that's expected and confirms API is reachable
      });
      console.log('Backendless connection response:', response.status);
      return { status: 'online', message: 'Backendless API is available' };
    } catch (pingError) {
      // If we get a 401 Unauthorized, that's actually good - it means the API is responding
      if (axios.isAxiosError(pingError) && pingError.response && pingError.response.status === 401) {
        return { status: 'online', message: 'Backendless API is available' };
      }
      // Otherwise, rethrow to be caught by the outer catch
      throw pingError;
    }
  } catch (error) {
    console.error('Backendless connection error:', error);
    
    // Provide more specific error messages based on the error type
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        return { 
          status: 'error', 
          message: 'Connection to Backendless API timed out. Please check your network and try again.'
        };
      }
      if (error.response) {
        // If we get any response, the API is technically reachable
        if (error.response.status >= 500) {
          return { 
            status: 'error', 
            message: `Backendless API server error (${error.response.status}). The service may be experiencing issues.`
          };
        } else {
          // For other status codes, the API is working but returned an error
          return { 
            status: 'online', 
            message: 'Backendless API is available'
          };
        }
      }
      if (error.code === 'ERR_NETWORK' || error.message.includes('Network Error')) {
        return { 
          status: 'error', 
          message: 'Network error: Unable to reach Backendless API. Please check your internet connection.'
        };
      }
    }
    
    return { 
      status: 'error', 
      message: 'Unable to connect to Backendless API. The service may be down or experiencing issues.'
    };
  }
};


// Register with Axios
export const registerUser = async (email: string, password: string) => {
  try {
    // Check if online and validate configuration
    if (!isOnline()) {
      throw new Error('Network error: You appear to be offline. Please check your internet connection and try again.');
    }
    validateConfig();
    
    const response = await axios.post(`${API_URL}/register`, {
      email,
      password,
    });
    console.log('Register success:', response.data);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Register error:', err.response?.data);
      if (!err.response) {
        // Network error occurred
        throw new Error('Network error: Unable to connect to Backendless. Please check your internet connection and try again.');
      }
      throw err;
    }
    throw err;
  }
};


// Login with Axios
export const loginUser = async (email: string, password: string) => {
  try {
    // Check if online and validate configuration
    if (!isOnline()) {
      throw new Error('Network error: You appear to be offline. Please check your internet connection and try again.');
    }
    validateConfig();
    
    const response = await axios.post(`${API_URL}/login`, {
      login: email,
      password,
    });
    console.log('Login success:', response.data);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Login error:', err.response?.data);
      if (!err.response) {
        // Network error occurred
        throw new Error('Network error: Unable to connect to Backendless. Please check your internet connection and try again.');
      }
      throw err;
    }
    throw err;
  }
};
