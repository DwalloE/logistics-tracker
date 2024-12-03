// Add this line in src/app/layout.tsx
import "../styles/globals.css";


// src/app/layout.tsx
export const metadata = {
    title: "LOGISTICS-TRACKER",
    description: "Track and manage logistics operations efficiently.",
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className="bg-gray-50 text-gray-900">{children}</body>
      </html>
    );
  }
  