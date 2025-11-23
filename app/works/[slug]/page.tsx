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
    title: 'Voices of the Unheard',
    tag: 'POETRY',
    author: 'Gabriel Clarence Balboa',
    date: 'March 15, 2024',
    image: '/edsa-rev.jpg',
    imageSource: 'Photo by John Doe, Unsplash',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget velit non nulla commodo congue sit amet in dui. Cras at sollicitudin quam, quis rutrum libero. Proin ut vestibulum ligula. Praesent pellentesque metus justo, eget laoreet urna tempor a. Ut quis mi feugiat, facilisis lorem vitae, tincidunt justo. Nunc et diam volutpat, malesuada quam sit amet, auctor justo. Aliquam et eros ac nibh facilisis fringilla. Nunc eget nibh eget velit dignissim condimentum. In hac habitasse platea dictumst. Nulla lobortis lectus eu nisi porta rutrum. In at quam vel enim cursus porta.

Phasellus eget tempor justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ac lectus non elit tempor fermentum accumsan non orci. Vestibulum porta quam eget magna rutrum, in rutrum magna porta. Sed sit amet nulla ac nisl pharetra scelerisque vel in arcu. Suspendisse in justo quis velit consequat sagittis. Donec ut ultricies risus, commodo porta augue. Donec vulputate ullamcorper pharetra.

Curabitur ornare tempus quam sit amet tincidunt. Quisque volutpat nisl vitae magna semper lobortis. Donec libero metus, gravida quis cursus a, mollis congue eros. Sed volutpat dictum metus non porta. Aenean ullamcorper condimentum venenatis. In hendrerit sem vel urna vulputate, non imperdiet nisi semper. Donec egestas, arcu at tincidunt volutpat, felis sapien tincidunt nibh, nec interdum velit erat sit amet libero. Donec lobortis nisl et nisl convallis ornare. Pellentesque malesuada hendrerit lorem, a convallis nisi mattis sit amet. Quisque consectetur massa tortor, non placerat leo efficitur sit amet. Phasellus vitae porta neque. In suscipit, nisl in vehicula mollis, velit neque placerat libero, in dictum ipsum sem id risus. Nam finibus hendrerit nibh quis molestie. In dignissim non mauris a lobortis. In semper augue id arcu faucibus suscipit. Donec a euismod arcu, vitae molestie mauris.`,
    category: 'Poetry'
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
        <div className="max-w-4xl mx-auto">
          {/* bck button */}
          <Link 
            href={`/collection/${article.category.toLowerCase().replace(' ', '-')}`}
            className="text-sm font-albert font-regular text-gray-600 hover:text-[#990100] transition mb-8 inline-block"
          >
            ← Back to {article.category}
          </Link>

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
                <h3 className="text-xl font-nanum font-bold tracking-tight mb-1 text-[#171717]">
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

