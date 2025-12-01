'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const scrollToCollection = () => {
    const element = document.getElementById('collection');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const authors = [
    {
      name: "Gabriel Clarence Balboa",
      role: "Poet & Writer",
      bio: "Exploring themes of resistance and identity through verse."
    },
    {
      name: "Vincent Thaddeus Catalan Castillo",
      role: "Fiction Writer",
      bio: "Crafting narratives that challenge societal norms."
    },
    {
      name: "Shania Francine Tagudinay Cloma",
      role: "Essayist & Web Developer",
      bio: "Examining power dynamics in contemporary society."
    },
    {
      name: "Kathleen Therese Ramos Cruz",
      role: "Poet & Web Developer",
      bio: "Giving voice to untold stories of resilience."
    },
    {
      name: "Christophe Mervyn Lacustales Rodriguez",
      role: "Editor",
      bio: "Curating the best of Philippine literature."
    }
  ];

  const collectionItems = [
    {
      category: "Poetry",
      title: "Voices of Resistance",
      description: "A collection of poems exploring themes of power, resistance, and social justice.",
      count: 12,
      bgColor: "#F5E8E8",
      borderColor: "#990100",
      textColor: "#171717"
    },
    {
      category: "Flash Fiction",
      title: "Brief Encounters",
      description: "Short stories that capture moments of struggle and triumph in Philippine society.",
      count: 8,
      bgColor: "#E8EDF3",
      borderColor: "#244E81",
      textColor: "#171717"
    },
    {
      category: "Essays",
      title: "Critical Perspectives",
      description: "Thought-provoking essays examining power structures and social dynamics.",
      count: 10,
      bgColor: "#F5F5F5",
      borderColor: "#171717",
      textColor: "#171717"
    },
    {
      category: "Reflections",
      title: "Personal Narratives",
      description: "Intimate reflections on personal experiences with power and resistance.",
      count: 6,
      bgColor: "#EFEFEF",
      borderColor: "#244E81",
      textColor: "#171717"
    }
  ];

  return (
    <div>
      <main className="px-10">
        {/* hero container - Home Section */}
        <section id="home" className="flex flex-row items-center h-screen">
          <div className="w-1/2 flex flex-col items-center gap-2">
            <p className="text-sm font-albert font-bold tracking-tight text-red-800 mb-2">Explore</p>
            <p className="text-3xl font-nanum font-bold tracking-tight mb-3 px-24 text-center">POWER IN POETRY & PROSE</p>
            <p className="text-lg font-nanum font-regular tracking-tight text-center px-24 mb-3">We create a space where these important narratives can be shared, deepen awareness of social issues, and encourage meaningful action. </p>
            
            <button 
              onClick={scrollToCollection}
              className="text-sm font-albert font-regular text-white px-7 py-3 mt-7 bg-slate-900 hover:bg-slate-700 transition tracking-tight"
            >
              Start Reading
            </button>
          </div>
          
          <div className="w-1/2 relative flex-1 h-full overflow-hidden">
            <Image
              src="/protest.png"
              alt="Protest Image"
              fill
              className="object-cover mt-14 py-32"
            />
          </div>
        </section>

        {/* featured pieces container */}
        <section id="featured" className="flex flex-col bg-slate-950 h-full -mx-10">
          {/* pieces*/}
          <div className="flex flex-col px-36 mb-36">
            
            <div className="flex flex-col">
              <p className="text-base font-albert font-bold tracking-tight text-white pt-20 mb-5 mt-8">In Focus</p>
              <p className="text-5xl font-nanum font-regular tracking-tight text-white pb-2">Featured Pieces</p>
              <p className="text-lg font-nanum font-regular tracking-tight text-white pb-14 italic mb-5">Curated by our editorial team</p>
            </div>

            <div className="flex flex-row items-center justify-center gap-10">
              {/* piece 1 */}
              <Link href="/works/research">
                <div className="flex flex-col max-w-[500px] flex-1 cursor-pointer hover:shadow-lg transition">
                  <div className="w-full h-[260px] relative">
                    <Image
                      src="/featured1.png"
                      alt="Protest Image"
                      fill
                      className="object-cover rounded grayscale contrast-125 brightness-90"
                    />
                  </div>

                  <p className="text-sm font-albert font-bold tracking-tight text-white mt-9">ESSAY</p>
                  <p className="text-white font-nanum text-xl mt-1 tracking-tight">HISTORY OF POWER IN THE PHILIPPINES</p>
                  <p className="text-white font-nanum text-base mt-4 tracking-tight">
                    In the historical context, power has often been seen as authority figures,  from precolonial Datus to Presidents, in modern times.
                  </p>
                </div>
              </Link>

              {/* piece 2 */}
              <Link href="/works/vincent">
                <div className="flex flex-col max-w-[500px] flex-1 cursor-pointer hover:shadow-lg transition">
                  <div className="w-full h-[260px] relative">
                    <Image
                      src="/edsa-rev.jpg"
                      alt="Protest Image"
                      fill
                      className="object-cover rounded"
                    />
                  </div>

                  <p className="text-sm font-albert font-bold tracking-tight text-white mt-9">REFLECTION</p>
                  <p className="text-white font-nanum text-xl mt-1 tracking-tight">INVISIBLE IN PLAIN SIGHT</p>
                  <p className="text-white font-nanum text-base mt-4 tracking-tight">
                    To me, it felt like being invincible. It was within a moment I anticipated being heard but was not...

                  </p>
                </div>
              </Link>


              {/* piece 3 */}
              <Link href="/works/kathleen">
                <div className="flex flex-col max-w-[500px] flex-1 cursor-pointer hover:shadow-lg transition">
                  <div className="w-full h-[260px] relative">
                    <Image
                      src="/edsa-rev.jpg"
                      alt="Protest Image"
                      fill
                      className="object-cover rounded"
                    />
                  </div>

                  <p className="text-sm font-albert font-bold tracking-tight text-white mt-9">POETRY</p>
                  <p className="text-white font-nanum text-xl mt-1 tracking-tight">{`THEY'RE`} COMING FOR US</p>
                  <p className="text-white font-nanum text-base mt-4 tracking-tight">
                    Exploring the circus in our government where the spectacle goes on while the people are left to suffer.
                  </p>
                </div>
              </Link>
            </div>
          </div>          
        </section>

        {/* collections */}
        <section id="collection" className="py-20 px-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-base font-albert font-bold tracking-tight text-red-800 mb-3">Browse</p>
              <p className="text-5xl font-nanum font-regular tracking-tight mb-3">Collection</p>
              <p className="text-lg font-nanum font-regular tracking-tight text-gray-600 italic">Explore our curated works by category</p>
            </div>
            
            {/* category bento grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {collectionItems.map((item, index) => {
                const categorySlug = item.category.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link 
                    key={index}
                    href={`/collection/${categorySlug}`}
                  >
                    <div 
                      style={{
                        backgroundColor: item.bgColor,
                        borderColor: item.borderColor,
                        color: item.textColor
                      }}
                      className="border-2 rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                    >
                      <p className="text-xs font-albert font-bold tracking-tight uppercase mb-2 opacity-70">
                        {item.category}
                      </p>
                      <p className="text-xl font-nanum font-bold tracking-tight mb-3">
                        {item.title}
                      </p>
                      <p className="text-sm font-nanum font-regular tracking-tight mb-4 opacity-80">
                        {item.description}
                      </p>
                      <p className="text-xs font-albert font-regular opacity-60">
                        {item.count} pieces
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* scrollable preview */}
            <div className="overflow-x-auto pb-6 scroll-smooth">
              <div className="flex gap-6 min-w-max">
                {[1, 2, 3, 4, 5, 6].map((item) => {
                  const category = collectionItems[item % 4].category;
                  const categoryColors = {
                    'Poetry': { bg: '#F5E8E8', border: '#990100' },
                    'Flash Fiction': { bg: '#E8EDF3', border: '#244E81' },
                    'Essays': { bg: '#F5F5F5', border: '#171717' },
                    'Reflections': { bg: '#EFEFEF', border: '#244E81' }
                  };
                  const colors = categoryColors[category as keyof typeof categoryColors] || { bg: '#EFEFEF', border: '#171717' };
                  return (
                    <Link 
                      key={item}
                      href={`/works/sample-${item}`}
                    >
                      <div className="flex-shrink-0 w-64 cursor-pointer hover:shadow-lg transition group">
                        <div className="relative bg-gray-200 h-48 rounded-t-lg overflow-hidden">
                          <Image
                            src={item % 2 === 0 ? '/edsa-rev.jpg' : '/protest.png'}
                            alt={`Sample Title ${item}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="bg-white border border-gray-200 rounded-b-lg p-4">
                          <p 
                            className="text-xs font-albert font-bold tracking-tight uppercase mb-1"
                            style={{ color: colors.border }}
                          >
                            {category}
                          </p>
                          <p className="text-base font-nanum font-bold tracking-tight mb-2 group-hover:text-[#990100] transition">
                            Sample Title {item}
                          </p>
                          <p className="text-sm font-nanum font-regular tracking-tight text-gray-600 line-clamp-2">
                            A brief excerpt from this piece that captures its essence and themes...
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* authors */}
        <section id="authors" className="py-20 px-10 bg-gray-50 -mx-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 px-10">
              <p className="text-base font-albert font-bold tracking-tight text-red-800 mb-3">Meet</p>
              <p className="text-5xl font-nanum font-regular tracking-tight mb-3">Our Team</p>
              <p className="text-lg font-nanum font-regular tracking-tight text-gray-600 italic">The voices behind the words</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
              {authors.map((author, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition cursor-pointer"
                >
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-nanum font-bold text-gray-600">
                      {author.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <p className="text-lg font-nanum font-bold tracking-tight text-center mb-1">
                    {author.name}
                  </p>
                  <p className="text-xs font-albert font-regular text-gray-500 text-center mb-3">
                    {author.role}
                  </p>
                  <p className="text-sm font-nanum font-regular tracking-tight text-gray-600 text-center">
                    {author.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* about */}
        <section id="about" className="py-20 px-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-base font-albert font-bold tracking-tight text-red-800 mb-3">About</p>
              <p className="text-5xl font-nanum font-regular tracking-tight mb-3">Our Mission</p>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg font-nanum font-regular tracking-tight text-gray-700 leading-relaxed">
                This magazine explores the theme of power and resistance in Philippine literature, reflecting how writers explore themes of societal struggles such as inequality, oppression, and social injustice.
              </p>
              <p className="text-lg font-nanum font-regular tracking-tight text-gray-700 leading-relaxed">
                It examines the ways that depict the interactions between individuals and institutions where power and authority are exercised. In this context, power refers to the authority of individuals and institutions, including their ability to influence and dominate others. While resistance represents the efforts of others to challenge authority or to endure it to survive.
              </p>
              <p className="text-lg font-nanum font-regular tracking-tight text-gray-700 leading-relaxed">
                Due to this, Philippine literature becomes a tool that allows writers and individuals to shed light on these struggles and give voice to those who resist and endure. Allowing the spread of awareness and inspiring and encouraging action and resilience in the face of injustice.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
