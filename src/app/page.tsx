// src/app/trips/page.tsx
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
  
  export default function TripsPage() {
    return (
      <main className="min-h-screen p-4 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Trips 🚗</h1>
        <ul className="space-y-4">
          {trips.map((trip) => (
            <li
              key={trip.id}
              className="p-4 bg-white shadow rounded hover:bg-gray-50 transition"
            >
              <h2 className="text-xl font-semibold">{trip.destination}</h2>
              <p className="text-gray-600">
                Driver: {trip.driver} | Start Date: {trip.startDate}
              </p>
              <a
                href={`/trips/${trip.id}`}
                className="text-blue-600 underline hover:text-blue-800"
              >
                View Details
              </a>
            </li>
          ))}
        </ul>
      </main>
    );
  }
  