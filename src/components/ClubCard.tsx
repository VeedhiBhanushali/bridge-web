// src/components/ClubCard.tsx
type Club = {
    id: string;
    name: string;
    category: string;
    description: string;
  };
  
  export function ClubCard({ club }: { club: Club }) {
    return (
      <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
        <h3 className="text-lg font-semibold mb-1">{club.name}</h3>
        <p className="text-sm text-blue-600 font-medium">{club.category}</p>
        <p className="text-gray-600 mt-2">{club.description}</p>
        <button className="mt-4 text-sm text-white bg-blue-300 px-3 py-1 rounded hover:bg-blue-400">
          View Details
        </button>
      </div>
    );
  }
  