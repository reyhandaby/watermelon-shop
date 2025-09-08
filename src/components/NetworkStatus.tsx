'use client';

import { useState, useEffect } from 'react';

export default function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Set initial state
    setIsOnline(navigator.onLine);

    // Add event listeners for online/offline events
    const handleOnline = () => {
      setIsOnline(true);
      setShowMessage(true);
      // Hide the message after 3 seconds
      setTimeout(() => setShowMessage(false), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowMessage(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Clean up event listeners
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!showMessage) return null;

  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-md shadow-lg transition-all duration-300 ${isOnline ? 'bg-green-100' : 'bg-red-100'}`}>
      <div className="flex items-center">
        <div className={`w-3 h-3 rounded-full mr-2 ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <p className={`text-sm font-medium ${isOnline ? 'text-green-800' : 'text-red-800'}`}>
          {isOnline ? 'You are back online' : 'You are currently offline'}
        </p>
      </div>
    </div>
  );
}