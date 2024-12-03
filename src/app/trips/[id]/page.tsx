// src/app/trips/[id]/page.tsx
import { notFound } from "next/navigation";

interface Trip {
  id: string;
  destination: string;
  driver: string;
  startDate: string;
  endDate?: string; // Optional
}

const trips: Trip[] = [
  { id: "1", destination: "New York", driver: "Jane", startDate: "2024-01-01" },
  { id: "2", destination: "San Francisco", driver: "John", startDate: "2024-01-05" },
  { id: "3", destination: "Los Angeles", driver: "Alice", startDate: "2024-01-08" },
];

export default function TripDetailsPage({ params }: { params: { id: string } }) {
  const trip = trips.find((trip) => trip.id === params.id);

  if (!trip) notFound(); // Show a 404 page if the trip is not found

  return (
    <main className="min-h-screen p-4 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Trip Details</h1>
      <div className="p-6 bg-white shadow rounded">
        <h2 className="text-xl font-semibold mb-2">Destination: {trip.destination}</h2>
        <ul className="space-y-2">
          <li>Driver: {trip.driver}</li>
          <li>Start Date: {trip.startDate}</li>
          {trip.endDate && <li>End Date: {trip.endDate}</li>}
        </ul>
      </div>
      <a
        href="/trips"
        className="mt-4 inline-block text-blue-600 underline hover:text-blue-800"
      >
        Back to Trips
      </a>
    </main>
  );
}
