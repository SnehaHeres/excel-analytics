import React from "react";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-300 px-4">
      {/* Outer gradient border effect */}
      <div className="p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-[2rem] shadow-2xl hover:scale-105 transition-transform duration-500 w-full max-w-3xl">
        
        {/* Inner white card */}
        <div className="bg-white rounded-[2rem] p-10 text-center">

          <div className="mb-4">
            <span className="text-6xl">📊</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4">
            Welcome to <span className="text-blue-600">Excel Analytics</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl mb-8 px-2">
            Upload your Excel files and view beautiful, interactive charts and dashboards that give you insights in seconds.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-col md:flex-row justify-center gap-4">
            {/* Upload Button */}
            <a href="/upload">
              <button className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300">
                Upload Excel File
              </button>
            </a>

            {/* Dashboard Button */}
            <a href="/dashboard">
              <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300">
                Go to Dashboard
              </button>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;