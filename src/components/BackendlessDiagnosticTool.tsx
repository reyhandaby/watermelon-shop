'use client';

import { useState } from 'react';
import { runBackendlessDiagnostics } from '@/lib/backendlessDiagnostics';

export default function BackendlessDiagnosticTool() {
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const runDiagnostics = async () => {
    setIsRunning(true);
    setResults(null);
    
    try {
      const diagnosticResults = await runBackendlessDiagnostics();
      setResults(diagnosticResults);
    } catch (error) {
      setResults({
        overall: {
          success: false,
          message: 'Diagnostic test failed to run'
        },
        tests: [],
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="mt-4 border rounded-md overflow-hidden">
      <div className="bg-gray-100 p-3 flex justify-between items-center">
        <h3 className="font-medium text-gray-800">Backendless Connection Diagnostics</h3>
        <button
          onClick={runDiagnostics}
          disabled={isRunning}
          className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center"
        >
          {isRunning ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Running...
            </>
          ) : 'Run Diagnostics'}
        </button>
      </div>

      {results && (
        <div className="p-4">
          <div className={`p-3 rounded-md mb-3 ${results.overall.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <p className={`font-medium ${results.overall.success ? 'text-green-800' : 'text-red-800'}`}>
              {results.overall.success ? '✓ ' : '✗ '}
              {results.overall.message}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Tested at: {new Date(results.timestamp).toLocaleString()}
            </p>
          </div>

          <div className="mb-2">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
            >
              {isExpanded ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  Hide Details
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Show Details
                </>
              )}
            </button>
          </div>

          {isExpanded && results.tests && results.tests.length > 0 && (
            <div className="space-y-2">
              {results.tests.map((test: any, index: number) => (
                <div 
                  key={index} 
                  className={`p-2 border rounded-md ${test.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}
                >
                  <p className={`text-sm font-medium ${test.success ? 'text-green-800' : 'text-red-800'}`}>
                    {test.success ? '✓ ' : '✗ '}
                    {test.message}
                  </p>
                  {test.details && (
                    <pre className="mt-1 text-xs bg-gray-100 p-2 rounded overflow-x-auto">
                      {JSON.stringify(test.details, null, 2)}
                    </pre>
                  )}
                </div>
              ))}
            </div>
          )}

          {results.error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-800 text-sm">{results.error}</p>
            </div>
          )}

          <div className="mt-4">
            <h4 className="font-medium text-gray-800 mb-2">Recommended Actions:</h4>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              {!results.overall.success && results.tests.some((t: any) => !t.success && t.message.includes('offline')) && (
                <li>Check your internet connection and ensure you're online</li>
              )}
              {!results.overall.success && results.tests.some((t: any) => !t.success && t.message.includes('configuration')) && (
                <li>Verify your Backendless App ID and API Key in the .env.local file</li>
              )}
              {!results.overall.success && results.tests.some((t: any) => !t.success && t.message.includes('DNS')) && (
                <li>DNS resolution failed - check your network settings or try a different network</li>
              )}
              {!results.overall.success && results.tests.some((t: any) => !t.success && t.message.includes('API endpoint')) && (
                <li>Could not connect to Backendless API - the service might be down or experiencing issues</li>
              )}
              {results.overall.success && (
                <li>All tests passed! If you're still experiencing issues, try refreshing the page or clearing your browser cache</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}