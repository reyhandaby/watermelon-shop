// 'use client';

// import { useState, useEffect } from 'react';
// import { checkBackendlessStatus } from '@/lib/backendless';

// export default function BackendlessStatusChecker() {
//   const [status, setStatus] = useState<{ status: string; message: string } | null>(null);
//   const [showStatus, setShowStatus] = useState(false);
//   const [isChecking, setIsChecking] = useState(false);

//   const checkStatus = async () => {
//     setIsChecking(true);
//     try {
//       const result = await checkBackendlessStatus();
//       setStatus(result);
//       setShowStatus(true);
      
//       // If status is online, hide after 3 seconds
//       if (result.status === 'online') {
//         setTimeout(() => setShowStatus(false), 3000);
//       }
//     } catch (error) {
//       console.error('Error checking Backendless status:', error);
//       setStatus({
//         status: 'error',
//         message: 'Failed to check Backendless status. Please try again.'
//       });
//       setShowStatus(true);
//     } finally {
//       setIsChecking(false);
//     }
//   };

//   useEffect(() => {
//     // Check status on component mount
//     checkStatus();

//     // Set up interval to check status periodically (every 30 seconds)
//     const intervalId = setInterval(checkStatus, 30000);

//     return () => clearInterval(intervalId);
//   }, []);

//   if (!showStatus || !status) return null;

//   const statusColors = {
//     online: 'bg-green-100 text-green-800 border-green-200',
//     offline: 'bg-red-100 text-red-800 border-red-200',
//     error: 'bg-yellow-100 text-yellow-800 border-yellow-200'
//   };

//   const dotColors = {
//     online: 'bg-green-500',
//     offline: 'bg-red-500',
//     error: 'bg-yellow-500'
//   };

//   const colorClass = statusColors[status.status as keyof typeof statusColors] || statusColors.error;
//   const dotColorClass = dotColors[status.status as keyof typeof dotColors] || dotColors.error;

//   return (
//     <div className={`fixed top-4 right-4 p-3 rounded-md shadow-lg transition-all duration-300 ${colorClass} border max-w-xs`}>
//       <div className="flex items-start">
//         <div className={`w-3 h-3 rounded-full mr-2 mt-1 ${dotColorClass}`}></div>
//         <div className="flex-1">
//           <p className="text-sm font-medium">
//             {status.status === 'online' ? 'Backendless API: Connected' : 'Backendless API: Issue Detected'}
//           </p>
//           <p className="text-xs break-words">{status.message}</p>
          
//           {status.status !== 'online' && (
//             <div className="mt-2 flex items-center space-x-2">
//               <button 
//                 onClick={checkStatus}
//                 disabled={isChecking}
//                 className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
//               >
//                 {isChecking ? (
//                   <>
//                     <svg className="animate-spin -ml-1 mr-2 h-3 w-3 text-blue-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Checking...
//                   </>
//                 ) : 'Retry Connection'}
//               </button>
//               <button 
//                 onClick={() => setShowStatus(false)}
//                 className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition-colors"
//               >
//                 Dismiss
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }