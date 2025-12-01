'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;

  // sample article data 
  const article = {
    id: slug,
    title: 'Power and Resistance in Modern Society',
    tag: 'ESSAY',
    author: 'Gabriel Clarence Balboa',
    date: 'November 27, 2025',
    image: '/edsa-rev.jpg',
    imageSource: '',
    content: `We live in a world where power shapes nearly every aspect of our lives. We work to gain power, believing that it will bring fulfillment or rise through societal hierarchies. Whether we acknowledge it or not, power is there controlling our very lives. Power decides and shapes society, who decides, and who must follow. Resistance comes to those who are strong willed, emerging to those who want change, instead of faltering to the demands of authority.  This has been what shaped society since its inception: power to control people, creating change for one's own benefit or for the advancement of society; resistance to check the balance of power, see that no abuse or total power is achieved. 

    These forces are in constant tension. Power creates conditions for resistance, while resistance constantly reshapes the meaning of power and how it’s exercised. Understanding this reveals what power truly is, it is never absolute. No matter how much power a person has, with enough resistance, they can fall and submit. Even at times where one feels powerless, they must find a way to fight and resist, instead of groveling to  submission to the power of authority. Everyone has the power of change, what lacks is the courage and will to do so.

    In our modern society, resistance has taken new forms. With the prevalent use of technology, people have been able to communicate and gather with great speed. Giving voices to those marginalized and exposing the wrong doing of people. However, while essential, it can be controlled and abused by those with power. The spread of misinformation and fake news, to hide the misconducts and abuses caused by them, is strong. People tend to not research what they learn, being bombarded with information everyday, fact checking each one tends to be an impossible task. Tending to keep within their circle of knowledge, believing what they have, believing in what they believe in. 

    Power and resistance remains fundamental to our society, defining what it truly means. While power still controls our society, people are now capable of resisting and challenging them with great speed. The digital age has made resistance more accessible, while introducing more vulnerabilities requiring presence and responsibility. So while power is still guiding and a major influence, resistance lessens this and ensures that it continues to evolve in new ways.
`,
    category: 'Essays'
  };

  // related articles
  const relatedArticles = [
    {
      id: 'related-1',
      title: 'Resistance in Verse',
      author: 'Kathleen Therese Ramos Cruz',
      date: 'March 10, 2024',
      image: '/protest.png',
      category: 'Poetry'
    },
    {
      id: 'related-2',
      title: 'The Power of Narrative',
      author: 'Vincent Thaddeus Catalan Castillo',
      date: 'March 5, 2024',
      image: '/edsa-rev.jpg',
      category: 'Flash Fiction'
    },
    {
      id: 'related-3',
      title: 'Echoes of the Past',
      author: 'Shania Francine Tagudinay Cloma',
      date: 'February 28, 2024',
      image: '/protest.png',
      category: 'Essays'
    }
  ];

  const categoryColors: Record<string, { bg: string; border: string }> = {
    'Poetry': { bg: '#F5E8E8', border: '#990100' },
    'Flash Fiction': { bg: '#E8EDF3', border: '#244E81' },
    'Essays': { bg: '#F5F5F5', border: '#171717' },
    'Reflections': { bg: '#EFEFEF', border: '#244E81' }
  };

  const colors = categoryColors[article.category] || { bg: '#EFEFEF', border: '#171717' };

  return (
    <div className="min-h-screen bg-white">
      <main className="px-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto mt-10">
          {/* bck button 
          <Link 
            href={`/collection/${article.category.toLowerCase().replace(' ', '-')}`}
            className="text-sm font-albert font-regular text-gray-600 hover:text-[#990100] transition mb-8 inline-block"
          >
            ← Back to {article.category}
          </Link>*/}

          {/* article header */}
          <div className="mb-8">
            <div 
              className="inline-block px-4 py-2 rounded mb-4"
              style={{ backgroundColor: colors.bg, border: `2px solid ${colors.border}` }}
            >
              <p className="text-xs font-albert font-bold tracking-tight uppercase" style={{ color: colors.border }}>
                {article.tag}
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-nanum font-bold tracking-tight mb-4 text-[#171717]">
              {article.title}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
              <p className="text-base font-nanum font-regular text-[#171717]">
                By {article.author}
              </p>
              <span className="hidden md:inline text-gray-400">•</span>
              <p className="text-sm font-albert font-regular text-gray-600">
                {article.date}
              </p>
            </div>
          </div>

          {/* featured image */}
          <div className="mb-6">
            <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-lg">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs font-albert font-regular text-gray-500 mt-2 italic">
              {article.imageSource}
            </p>
          </div>

          {/* article content */}
          <article className="prose prose-lg max-w-none mb-16">
            <div className="text-lg font-nanum font-regular tracking-tight text-[#171717] leading-relaxed whitespace-pre-line">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* author info section */}
          <div className="border-t border-gray-200 pt-8 mb-16">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-nanum font-bold text-gray-600">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-nanum font-bold tracking-tight mb-1 text-[#171717] mt-1">
                  {article.author}
                </h3>
                <p className="text-sm font-nanum font-regular text-gray-600">
                  Contributing writer exploring themes of power, resistance, and social justice in Philippine literature.
                </p>
              </div>
            </div>
          </div>

          {/* read more section */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-nanum font-bold tracking-tight mb-8 text-[#171717]">
              Read More
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => {
                const relatedColors = categoryColors[related.category] || { bg: '#EFEFEF', border: '#171717' };
                return (
                  <Link 
                    key={related.id}
                    href={`/works/${related.id}`}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all">
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <p 
                          className="text-xs font-albert font-bold tracking-tight uppercase mb-2"
                          style={{ color: relatedColors.border }}
                        >
                          {related.category}
                        </p>
                        <h3 className="text-lg font-nanum font-bold tracking-tight mb-2 text-[#171717] group-hover:text-[#990100] transition line-clamp-2">
                          {related.title}
                        </h3>
                        <p className="text-sm font-nanum font-regular text-gray-600 mb-1">
                          {related.author}
                        </p>
                        <p className="text-xs font-albert font-regular text-gray-500">
                          {related.date}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

