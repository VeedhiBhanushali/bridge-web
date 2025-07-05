// src/lib/api.ts
export async function fetchClubs() {
    const res = await fetch('/api/clubs');
    if (!res.ok) throw new Error('Failed to fetch clubs');
    return res.json();
  }
  