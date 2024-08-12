import React from 'react';

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
    <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-5 shadow-lg">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Welcome to the Home Page</h1>
      </div>
    </header>
    <main className="flex-grow p-8 container mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <p className="text-xl text-gray-800 dark:text-gray-300 mb-8">
        Explore the following sections:
      </p>
      <ul className="list-disc pl-6 space-y-3">
        <li className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
          Admin Dashboard
        </li>
        <li className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
          Flashcard
        </li>
      </ul>
      <div className="mt-8">
        {children}
      </div>
    </main>
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 text-center text-gray-600 dark:from-gray-800 dark:to-gray-900 dark:text-gray-400 py-4">
      <div className="container mx-auto">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default Layout;