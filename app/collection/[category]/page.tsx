'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;

  // format category name for display
  const categoryDisplay = category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // sample pieces data 
  const pieces = [
    {
      id: 'sample-1',
      title: 'Voices of the Unheard',
      author: 'Gabriel Clarence Balboa',
      date: 'March 15, 2024',
      excerpt: 'In the silence of the night, we find our voices. They echo through the corridors of power, challenging the status quo...',
      image: '/edsa-rev.jpg',
      category: categoryDisplay
    },
    {
      id: 'sample-2',
      title: 'Resistance in Verse',
      author: 'Kathleen Therese Ramos Cruz',
      date: 'March 10, 2024',
      excerpt: 'Words become weapons, poetry becomes protest. Each line a battle cry, each stanza a revolution...',
      image: '/protest.png',
      category: categoryDisplay
    },
    {
      id: 'sample-3',
      title: 'The Power of Narrative',
      author: 'Vincent Thaddeus Catalan Castillo',
      date: 'March 5, 2024',
      excerpt: 'Stories shape reality. They define who we are and who we can become. In telling our stories, we reclaim our power...',
      image: '/edsa-rev.jpg',
      category: categoryDisplay
    },
    {
      id: 'sample-4',
      title: 'Echoes of the Past',
      author: 'Shania Francine Tagudinay Cloma',
      date: 'February 28, 2024',
      excerpt: 'History repeats itself, but we are not bound by it. We learn, we grow, we resist...',
      image: '/protest.png',
      category: categoryDisplay
    },
    {
      id: 'sample-5',
      title: 'Breaking the Silence',
      author: 'Gabriel Clarence Balboa',
      date: 'February 20, 2024',
      excerpt: 'Silence is complicity. We must speak, we must act, we must resist the forces that seek to silence us...',
      image: '/edsa-rev.jpg',
      category: categoryDisplay
    },
    {
      id: 'sample-6',
      title: 'The Art of Resistance',
      author: 'Kathleen Therese Ramos Cruz',
      date: 'February 15, 2024',
      excerpt: 'Art is not just expression—it is resistance. It challenges, it provokes, it transforms...',
      image: '/protest.png',
      category: categoryDisplay
    }
  ];

  const categoryColors: Record<string, { bg: string; border: string }> = {
    'Poetry': { bg: '#F5E8E8', border: '#990100' },
    'Flash Fiction': { bg: '#E8EDF3', border: '#244E81' },
    'Essays': { bg: '#F5F5F5', border: '#171717' },
    'Reflections': { bg: '#EFEFEF', border: '#244E81' }
  };

  const colors = categoryColors[categoryDisplay] || { bg: '#EFEFEF', border: '#171717' };

  return (
    <div className="min-h-screen bg-white">
      <main className="px-10 pt-32 pb-20">
        {/* header */}
        <div className="max-w-7xl mx-auto mb-12 mt-10">
          {/* commented out back btn 
          <Link 
            href="/#collection"
            className="text-sm font-albert font-regular text-gray-600 hover:text-[#990100] transition mb-4 inline-block"
          >
            ← Back to Collection
          </Link>*/}
          <h1 className="text-5xl font-nanum font-bold tracking-tight mb-3">{categoryDisplay}</h1>
          <p className="text-lg font-nanum font-regular tracking-tight text-gray-600 italic">
            Explore our curated collection of {categoryDisplay.toLowerCase()} pieces
          </p>
        </div>

        {/* pieces grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pieces.map((piece) => (
              <Link 
                key={piece.id}
                href={`/works/${piece.id}`}
                className="group cursor-pointer"
              >
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={piece.image}
                      alt={piece.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p 
                      className="text-xs font-albert font-bold tracking-tight uppercase mb-2"
                      style={{ color: colors.border }}
                    >
                      {piece.category}
                    </p>
                    <h2 className="text-xl font-nanum font-bold tracking-tight mb-2 text-[#171717] group-hover:text-[#990100] transition">
                      {piece.title}
                    </h2>
                    <p className="text-sm font-nanum font-regular text-gray-600 mb-3">
                      {piece.author}
                    </p>
                    <p className="text-xs font-albert font-regular text-gray-500 mb-4">
                      {piece.date}
                    </p>
                    <p className="text-sm font-nanum font-regular tracking-tight text-gray-700 line-clamp-3">
                      {piece.excerpt}
                    </p>
                    <p className="text-xs font-albert font-bold tracking-tight mt-4 text-[#244E81] group-hover:text-[#990100] transition">
                      Read More →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

