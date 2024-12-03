// src/app/trips/new/page.tsx

"use client"; // Ensures the page is rendered on the client-side

import { useState } from "react";

export default function NewTripPage() {
  const [formData, setFormData] = useState({
    destination: "",
    driver: "",
    startDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Trip Data:", formData);
  };

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Add a New Trip</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="destination" className="block font-medium mb-1">
            Destination
          </label>
          <input
            id="destination"
            type="text"
            name="destination"
            onChange={handleChange}
            value={formData.destination}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="driver" className="block font-medium mb-1">
            Driver
          </label>
          <input
            id="driver"
            type="text"
            name="driver"
            onChange={handleChange}
            value={formData.driver}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="startDate" className="block font-medium mb-1">
            Start Date
          </label>
          <input
            id="startDate"
            type="date"
            name="startDate"
            onChange={handleChange}
            value={formData.startDate}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save Trip
        </button>
      </form>
    </main>
  );
}
