// import axios from 'axios';

// interface DiagnosticResult {
//   success: boolean;
//   message: string;
//   details?: any;
//   timestamp: string;
// }

// interface DiagnosticReport {
//   overall: {
//     success: boolean;
//     message: string;
//   };
//   tests: DiagnosticResult[];
//   timestamp: string;
// }

// /**
//  * Run a comprehensive diagnostic test on the Backendless API connection
//  * @returns A diagnostic report with test results
//  */
// export const runBackendlessDiagnostics = async (): Promise<DiagnosticReport> => {
//   const tests: DiagnosticResult[] = [];
//   const timestamp = new Date().toISOString();
//   let overallSuccess = true;
  
//   // Get environment variables
//   const APP_ID = process.env.BACKENDLESS_APP_ID || 'YOUR_APP_ID';
//   const API_KEY = process.env.BACKENDLESS_API_KEY || 'YOUR_API_KEY';
//   const BASE_URL = process.env.BACKENDLESS_API_URL || 'https://api.backendless.com';
  
//   // Test 1: Check browser online status
//   const isOnline = typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
//     ? navigator.onLine
//     : true;
  
//   tests.push({
//     success: isOnline,
//     message: isOnline ? 'Browser reports online status' : 'Browser reports offline status',
//     timestamp
//   });
  
//   if (!isOnline) {
//     overallSuccess = false;
//     return {
//       overall: {
//         success: false,
//         message: 'Device is offline. Please check your internet connection.'
//       },
//       tests,
//       timestamp
//     };
//   }
  
//   // Test 2: Check environment variables
//   const configValid = APP_ID !== 'YOUR_APP_ID' && API_KEY !== 'YOUR_API_KEY';
//   tests.push({
//     success: configValid,
//     message: configValid ? 'Backendless configuration is valid' : 'Backendless configuration is incomplete',
//     details: {
//       appIdConfigured: APP_ID !== 'YOUR_APP_ID',
//       apiKeyConfigured: API_KEY !== 'YOUR_API_KEY'
//     },
//     timestamp
//   });
  
//   if (!configValid) {
//     overallSuccess = false;
//   }
  
//   // Test 3: DNS resolution test (indirect via API call)
//   try {
//     const dnsTestStart = Date.now();
//     await axios.get('https://api.backendless.com', { timeout: 5000 });
//     const dnsTestDuration = Date.now() - dnsTestStart;
    
//     tests.push({
//       success: true,
//       message: 'DNS resolution successful',
//       details: { durationMs: dnsTestDuration },
//       timestamp
//     });
//   } catch (error) {
//     tests.push({
//       success: false,
//       message: 'DNS resolution failed',
//       details: { error: error instanceof Error ? error.message : String(error) },
//       timestamp
//     });
//     overallSuccess = false;
//   }
  
//   // Test 4: API endpoint test
//   if (configValid) {
//     try {
//       const apiTestStart = Date.now();
//       const pingUrl = `${BASE_URL}/${APP_ID}/${API_KEY}/users/isvalidusertoken`;
      
//       try {
//         await axios.get(pingUrl, { 
//           timeout: 5000,
//           params: { token: 'test-token' }
//         });
//         const apiTestDuration = Date.now() - apiTestStart;
        
//         tests.push({
//           success: true,
//           message: 'API endpoint test successful',
//           details: { durationMs: apiTestDuration },
//           timestamp
//         });
//       } catch (pingError: any) {
//         // If we get a 401 Unauthorized, that's actually good - it means the API is responding
//         if (axios.isAxiosError(pingError) && pingError.response && pingError.response.status === 401) {
//           const apiTestDuration = Date.now() - apiTestStart;
//           tests.push({
//             success: true,
//             message: 'API endpoint test successful (401 response is expected)',
//             details: { 
//               durationMs: apiTestDuration,
//               statusCode: pingError.response.status
//             },
//             timestamp
//           });
//         } else {
//           throw pingError;
//         }
//       }
//     } catch (error: any) {
//       let errorDetails = { error: 'Unknown error' };
      
//       if (axios.isAxiosError(error)) {
//         errorDetails = {
//           code: error.code,
//           message: error.message,
//           response: error.response ? {
//             status: error.response.status,
//             statusText: error.response.statusText,
//             data: error.response.data
//           } : 'No response'
//         };
//       } else if (error instanceof Error) {
//         errorDetails = {
//           message: error.message,
//           stack: error.stack
//         };
//       }
      
//       tests.push({
//         success: false,
//         message: 'API endpoint test failed',
//         details: errorDetails,
//         timestamp
//       });
//       overallSuccess = false;
//     }
//   }
  
//   // Generate overall result
//   let overallMessage = 'All tests passed. Backendless API is available.';
//   if (!overallSuccess) {
//     const failedTests = tests.filter(test => !test.success);
//     overallMessage = `${failedTests.length} test(s) failed. Please check the detailed results.`;
//   }
  
//   return {
//     overall: {
//       success: overallSuccess,
//       message: overallMessage
//     },
//     tests,
//     timestamp
//   };
// };