// src/app/api/clubs/route.ts
import { NextResponse } from 'next/server';

const dummyClubs = [
  {
    id: '1',
    name: 'IEEE SJSU',
    category: 'Tech & Engineering',
    description: 'Connect with students in electronics, robotics, and engineering fields.',
  },
  {
    id: '2',
    name: 'International Students Club',
    category: 'Cultural',
    description: 'Meet students from all over the world and celebrate diversity.',
  },
  {
    id: '3',
    name: 'Women in Tech',
    category: 'Support & Career',
    description: 'Empowering women to succeed in STEM careers.',
  },
];

export async function GET() {
  return NextResponse.json(dummyClubs);
}
