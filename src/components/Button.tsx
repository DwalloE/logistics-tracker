// src/components/Button.tsx
export default function Button({ label }: { label: string }) {
    return (
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        {label}
      </button>
    );
  }
  