'use client';

import { useState } from 'react';
import BackendlessDiagnosticTool from './BackendlessDiagnosticTool';

export default function BackendlessTroubleshooting() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDiagnostics, setShowDiagnostics] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
      >
        {isOpen ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Hide Troubleshooting Guide
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            View Troubleshooting Guide
          </>
        )}
      </button>

      {isOpen && (
        <div className="mt-2 p-4 bg-gray-50 border rounded-md text-sm">
          <h3 className="font-medium text-gray-900 mb-2">Backendless API Troubleshooting</h3>
          
          <h4 className="font-medium text-gray-800 mt-3 mb-1">1. Check Your Internet Connection</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Ensure your device is connected to the internet</li>
            <li>Try accessing other websites to verify your connection</li>
          </ul>
          
          <h4 className="font-medium text-gray-800 mt-3 mb-1">2. Verify Backendless Configuration</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Check your <code className="bg-gray-100 px-1 rounded">.env.local</code> file for correct credentials</li>
            <li>Verify App ID and API Key from your Backendless console</li>
          </ul>
          
          <h4 className="font-medium text-gray-800 mt-3 mb-1">3. Check Backendless Service Status</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>
              <a 
                href="https://status.backendless.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit Backendless Status Page
              </a>
            </li>
          </ul>
          
          <h4 className="font-medium text-gray-800 mt-3 mb-1">4. Clear Browser Cache</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Clear your browser's cache and cookies</li>
            <li>Try using a different browser</li>
          </ul>
          
          <div className="mt-4 flex justify-between items-center">
            <p className="text-gray-600 text-xs">
              For more detailed troubleshooting steps, please refer to the 
              <a 
                href="/docs/backendless-troubleshooting.md" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-1"
              >
                complete troubleshooting guide
              </a>.
            </p>
            
            <button
              onClick={() => setShowDiagnostics(!showDiagnostics)}
              className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition-colors"
            >
              {showDiagnostics ? 'Hide Diagnostic Tool' : 'Advanced Diagnostics'}
            </button>
          </div>
          
          {showDiagnostics && <BackendlessDiagnosticTool />}
        </div>
      )}
    </div>
  );
}