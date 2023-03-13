import React from 'react';
import logo from './ww.png';
// import './App.css';
import './index.css';
//import 'tailwindcss/dist/tailwind.min.css';

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-500">
      <div className="text-center">
        <img src={logo} className="h-80 mx-auto mb-6" alt="WetWeb logo" />
        <div className="flex items-center justify-center mb-8">
        <div className="h-0.5 w-20 bg-white mr-4"></div>
        <h1 className="text-4xl font-bold text-white uppercase">Wet Web</h1>
        <div className="h-0.5 w-20 bg-white ml-4"></div>
      </div>
        <div className="inline-flex space-x-4">
          <a href="#" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Coming Soon</a>
        </div>
      </div>
    </div>
  );
}

export default App;
