# Backendless API Troubleshooting Guide

## Common Connection Issues

If you're seeing the error message "Unable to connect to Backendless API. The service may be down or experiencing issues," here are some steps to troubleshoot and resolve the problem:

### 1. Check Your Internet Connection

- Ensure your device is connected to the internet
- Try accessing other websites to verify your connection is working
- If using Wi-Fi, try switching to a wired connection or different Wi-Fi network

### 2. Verify Backendless Configuration

- Check your `.env.local` file to ensure your Backendless credentials are correct:
  ```
  BACKENDLESS_APP_ID=your-app-id
  BACKENDLESS_API_KEY=your-api-key
  BACKENDLESS_API_URL=https://api.backendless.com
  ```
- Verify that you're using the correct App ID and API Key from your Backendless console
- Make sure there are no extra spaces or special characters in your credentials

### 3. Check Backendless Service Status

- Visit the [Backendless Status Page](https://status.backendless.com/) to check if there are any reported outages
- Check the [Backendless Twitter account](https://twitter.com/backendless) for any announcements about service disruptions

### 4. Test API Directly

You can test the Backendless API directly using a tool like cURL or Postman:

```bash
curl -X GET "https://api.backendless.com/YOUR_APP_ID/YOUR_API_KEY/users/isvalidusertoken?token=test-token"
```

This should return a 401 error if the API is reachable but the token is invalid (which is expected).

### 5. Check for Firewall or Network Restrictions

- If you're on a corporate or school network, check if there are firewall rules blocking access to external APIs
- Try using a different network or VPN to rule out network restrictions

### 6. Clear Browser Cache and Cookies

- Clear your browser's cache and cookies
- Try using a different browser or incognito/private browsing mode

### 7. Restart the Application

- Stop the development server (Ctrl+C in the terminal)
- Run `npm run dev` to restart the application

### 8. Contact Support

If you've tried all the above steps and still can't connect to the Backendless API, contact support:

- [Backendless Support](https://support.backendless.com/)
- [Backendless Forums](https://forum.backendless.com/)

## Using the Retry Connection Button

The application includes a "Retry Connection" button that appears when a connection issue is detected. Click this button to attempt to reconnect to the Backendless API without refreshing the page.

## Offline Mode

If you're working offline, the application will detect this and show an appropriate message. Some features may be limited or unavailable when offline.