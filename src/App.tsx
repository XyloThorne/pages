import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LanguageIcon } from '@heroicons/react/24/outline';

function App() {
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-8 lg:px-10">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Utocoin</span>
              <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" className="h-8 w-auto" />
            </a>
            {/* <p className="h-8 w-auto">Utocoin</p> */}
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">Introduction</a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">Features</a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">Participate</a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">FAQ</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              <LanguageIcon className="h-5 w-5 text-gray-700" />
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>
      <div className='flex flex-col lg:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 items-center justify-center min-h-screen bg-gray-50'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md">
          按钮一
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-md">
          按钮二
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-md">
          按钮三
        </button>
      </div>
    </div>
  );
}

export default App;
