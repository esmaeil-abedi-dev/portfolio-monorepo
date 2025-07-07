import React from 'react';

export const TailwindTest = () => {
  return (
    <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Tailwind CSS Test Component
      </h2>
      <p className="text-gray-700 mb-4">
        This component tests various Tailwind CSS classes to ensure they're properly applied.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-200 p-4 rounded">
          <h3 className="text-lg font-semibold text-blue-800">Blue Box</h3>
          <p className="text-blue-700">This box should have a light blue background.</p>
        </div>
        <div className="bg-green-200 p-4 rounded">
          <h3 className="text-lg font-semibold text-green-800">Green Box</h3>
          <p className="text-green-700">This box should have a light green background.</p>
        </div>
      </div>
      <div className="mt-4 flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Blue Button
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
          Green Button
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
          Red Button
        </button>
      </div>
    </div>
  );
};
