import Image from "next/image";
import Link from "next/link";

const Research = () => {
  return (
    <div className="bg-gray-950 font-nanum text-white">
      <main className="px-10">

        {/* top section */}
        <div className="flex flex-row items-center h-screen">
          <div className="w-1/2 flex flex-col items-center gap-2">
            <p className="text-sm font-albert font-bold tracking-tight mb-5">ESSAY</p>
            <p className="text-3xl font-nanum font-bold tracking-tight mb-1 px-24 text-center">HISTORY OF POWER IN THE PHILIPPINES</p>
            <p className="text-base font-nanum font-regular tracking-tight text-center px-24 mb-3 italic">Written by Gabriel Clarence Balboa & Christophe Mervyn Rodriguez</p>
          </div>
          
          <div className="w-1/2 relative flex-1 h-full overflow-hidden">
            <Image
              src="/featured1.png"
              alt="Protest Image"
              fill
              className="object-cover mt-14 py-32 grayscale contrast-125 brightness-90"
            />
          </div>
        </div>


        {/* content section */}
        <div className="flex flex-col h-fit bg-gray-100 text-black -mx-10 px-96 py-14">
          <p className="text-xl leading-relaxed mb-5">
            <span className="text-6xl float-left leading-none mr-1">P</span>
            ower is seen as the way to influence others and change events or actions to achieve {`one's`} goals. This can be done in different forms, such as authority, wealth, government, or social hierarchy.
            In the historical context, power has often been seen as authority figures,  from precolonial Datus to Presidents, in modern times. During the Spanish colonial period, the King was the highest figure, with the Governor-General and local officials enforcing rules. The Spaniards and friars were often the key figures of authority, having so much power that abuse of the Filipino people frequently happened. This usually came from religious domination or an unjust economic system that often favors the Spanish elites. These types of abuses have shaped society today, with widespread corruption and political repression. 
          </p>

          <p className="text-xl leading-relaxed mb-14">
            Resistance is action taken to challenge current and existing rules or social norms. One of the most common ways of resistance is through protests, which allow people to unite, make their voices heard, and demand change.
            Literature has also served as a powerful form of resistance, exposing the struggles and hardships people are facing. Many works expose periods when power has been widely abused, such as the Spanish colonial period or Martial Law. In the Spanish period, works such as Noli Me Tangere and Pag-ibig sa Tinubuan Lupa enlightened Filipinos on the hardships they had been facing. These works showed the cruelty and inequalities under colonial rule, which many Filipinos were unaware of.
            This enlightenment increased the resistance against the Spanish rule and the fight for the freedom of every Filipino. 
          </p>

          <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Related Literary Works</h2>

          <div className="space-y-6 text-lg leading-relaxed mb-14">

            <div className="p-5 rounded-2xl border border-gray-300 bg-white/40 backdrop-blur-sm">
              <h3 className="font-semibold text-xl mb-2">
                Noli Me Tangere & El Filibusterismo
              </h3>
              <p>
                One of the most influential literary works during the Spanish colonial rule. Written by Jose Rizal, it aimed to enlighten Filipinos on the abuses and corruption by the Spaniards. Showing the hypocrisy and hardships they were facing and challenging this oppressive rule. 
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-gray-300 bg-white/40 backdrop-blur-sm">
              <h3 className="font-semibold text-xl mb-2">Dekada ‘70</h3>
              <p>
                Written by Lualhati Bautista, it was written during the height of Martial Law under Ferdinand Marcos. Exposing the oppressive social hierarchy and human rights abuses of that era and exploring themes of political repression and societal changes, encouraging people to resist and stand up for what’s right.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-gray-300 bg-white/40 backdrop-blur-sm">
              <h3 className="font-semibold text-xl mb-2">Pag-ibig sa Tinubuang Lupa</h3>
              <p>
                Written by Andres Bonfacio, it calls on Filipinos to fight against Spanish rule out of patriotism for the country.
              </p>
            </div>

          </div>


          <h2 className="text-2xl font-semibold mb-4">References</h2>
          <p className="mb-6">
            Canete-Trinidad, M. (n.d.). <i>Spanish colonial government</i>. Slideshare. 
            <a
              href="https://www.slideshare.net/slideshow/spanish-colonial-government/11272002"
              className="text-blue-900 underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.slideshare.net/slideshow/spanish-colonial-government/11272002
            </a>
          </p>

          <p className="mb-20">
            Mendoza et al. (2022). <i>Political dynasties, business, and poverty in the Philippines</i>. 
            Science Direct.
            <a
              href="https://www.sciencedirect.com/science/article/pii/S2667319322000222"
              className="text-blue-900 underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.sciencedirect.com/science/article/pii/S2667319322000222
            </a>
          </p>
        </div>





          {/* author info*/}
          <div className="border-t border-gray-300 pt-8 mb-6">
            <div className="flex items-start gap-4 mt-5">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-nanum font-bold text-gray-600">
                  GCB
                </span>
              </div>
              <div>
                <h3 className="text-xl font-nanum font-bold tracking-tight mb-1 text-[#171717] mt-1">
                  Gabriel Clarence Balboa
                </h3>
                <p className="text-sm font-nanum font-regular text-gray-600">
                  Contributing writer exploring themes of power, resistance, and social justice.
                </p>
              </div>
            </div>
          </div>

          
          <div className="flex items-start gap-4 mt-5 mb-14">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-nanum font-bold text-gray-600">
                CMR
              </span>
            </div>
            <div>
              <h3 className="text-xl font-nanum font-bold tracking-tight mb-1 text-[#171717] mt-1">
                Christophe Mervyn Rodriguez
              </h3>
              <p className="text-sm font-nanum font-regular text-gray-600">
                Curating the best of Philippine literature.
              </p>
            </div>
          </div>




          {/* read more section */}
          <div className="border-t border-gray-300 pt-10"/>
          <h2 className="text-3xl font-nanum font-bold tracking-tight mb-8 text-[#171717]">
            Read More
          </h2>

          {/* other works */}
          <div className="flex flex-row gap-7">
            <Link href="/works/vincent-1">
              <div className="flex flex-col max-w-[500px] flex-1 cursor-pointer 
                              overflow-hidden 
                              transition-all duration-300 
                              hover:-translate-y-1">
                
                <div className="w-full h-[260px] relative">
                  <Image
                    src="/vincent-placeholder.jpg"
                    alt="Protest Image"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105 grayscale contrast-125 brightness-90"
                  />
                </div>

                <p className="text-sm font-albert font-bold tracking-tight text-red-800 mt-9">REFLECTION</p>
                <p className="text-black font-nanum text-xl mt-1 tracking-tight">INVISIBLE IN PLAIN SIGHT</p>
                <p className="text-black font-nanum text-base mt-4 tracking-tight">
                  To me, it felt like being invincible. It was within a moment I anticipated being heard but was not...
                </p>
              </div>
            </Link>



            <Link href="/works/kathleen-1">
              <div className="flex flex-col max-w-[500px] flex-1 cursor-pointer 
                              overflow-hidden 
                              transition-all duration-300 
                              hover:-translate-y-1 mb-20">
                
                <div className="w-full h-[260px] relative">
                  <Image
                    src="/edsa-rev.jpg"
                    alt="Protest Image"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <p className="text-sm font-albert font-bold tracking-tight text-red-800 mt-9">POETRY</p>
                <p className="text-black font-nanum text-xl mt-1 tracking-tight">{`THEY'RE COMING FOR US`}</p>
                <p className="text-black font-nanum text-base mt-4 tracking-tight">
                  Exploring the circus in our government where the spectacle goes on while the people are left to suffer.
                </p>
              </div>
            </Link>
          </div>


        </div>
      </main>
    </div>
  );
};

export default Research;
