import Image from "next/image";
import Link from "next/link";

const Cruz = () => {
  return (
    <div className="bg-gray-950 font-nanum text-white">
      <main className="px-10">

        {/* top section */}
        <div className="flex flex-row items-center h-screen">
          <div className="w-1/2 flex flex-col items-center gap-2">
            <p className="text-sm font-albert font-bold tracking-tight mb-5">REFLECTION</p>
            <p className="text-3xl font-nanum font-bold tracking-tight mb-1 px-24 text-center">INVISIBLE IN PLAIN SIGHT:<br/>A PERSONAL REFLECTION</p>
            <p className="text-base font-nanum font-regular tracking-tight text-center px-24 mb-3 italic">Written by Vincent Castillo</p>
          </div>
          
          <div className="w-1/2 relative flex-1 h-full overflow-hidden">
            <Image
              src="/edsa-rev.jpg"
              alt="Protest Image"
              fill
              className="object-cover mt-14 py-32"
            />
          </div>
        </div>


        {/* content section */}
        <div className="flex flex-col h-fit bg-gray-100 text-black -mx-10 px-96 py-14">
          <p className="text-xl leading-relaxed mb-14">
            <span className="text-6xl float-left leading-none mr-1">T</span>
            o me, it felt like being invincible.

            <br/><br/>
            It was within a moment I anticipated being heard but was not. I remember expressing an idea that had meaning to me; it seemed to be ignored; my words somehow did not matter. A few minutes later, the same idea was stated by someone else, and suddenly everybody was paying attention. It was just a small event, but somehow it reduced me to something small, as if my thoughts had been irrelevant because others were seen as more important. I sat there wondering why such an incident could disturb me. 

            <br/><br/>
            I SATURATED MYSELF with such stories about social injustice in order that I come to terms with the phenomenon of being overlooked or treated as less by millions of other people who go through more severe and more painful experiences. In “Sa Mga Kuko ng Liwanag,” Julio, though hard-working and struggling to survive, faces a society that does not even recognize him at all. Furthermore, in “The Virgin” by Kerima Polotan-Tuvera, Miss Mijares seems to meander through life, so molded by the expectations and judgements that confine her worth before others. 

            <br/><br/>
            These stories have helped me understand that my own experience has a measure. Even if it’s comparatively little, it still mirrors a genuine issue. Literature has enabled me to speak of something I could not articulate well before. It made me understand that invisibility is not only being ignored. It also has to do with how society empowers certain voices but silences others.

            <br/><br/>
            I learned that justice does not talk only about laws or major decisions; sometimes it begins with simple things like listening, fairly acknowledging the other, or respecting each and every person. The silence in itself engenders social injustice. When the voice of distaste is raised with awareness and understanding, it nurtures resilience among the oppressed. The thought of how it feels to feel unheard drives with determination my desire to ensure that no one else is made to feel in the same way. 

            <br/><br/>
            I think back to how loud the room was and how utterly quiet it felt inside. In hindsight, however, that silence in itself was not weakening, as it taught me to honor every voice, including my own. 



          </p>



          {/* author info*/}
          <div className="border-t border-gray-300 pt-8 mb-14">
            <div className="flex items-start gap-4 mt-5">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-nanum font-bold text-gray-600">
                  VTC
                </span>
              </div>
              <div>
                <h3 className="text-xl font-nanum font-bold tracking-tight mb-1 text-[#171717] mt-1">
                  Vincent Thaddeus Castillo
                </h3>
                <p className="text-sm font-nanum font-regular text-gray-600">
                  Contributing writer exploring themes of power, resistance, and social justice in Philippine literature.
                </p>
              </div>
            </div>
          </div>



          {/* read more section */}
          <div className="border-t border-gray-300 pt-10"/>
          <h2 className="text-3xl font-nanum font-bold tracking-tight mb-8 text-[#171717]">
            Read More
          </h2>

          {/* other works */}
          <div className="flex flex-row gap-7">
            <Link href="/works/research">
              <div className="flex flex-col max-w-[500px] flex-1 cursor-pointer 
                              overflow-hidden 
                              transition-all duration-300 
                              hover:-translate-y-1">
                
                <div className="w-full h-[260px] relative">
                  <Image
                    src="/featured1.png"
                    alt="Protest Image"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105 grayscale contrast-125 brightness-90"
                  />
                </div>

                <p className="text-sm font-albert font-bold tracking-tight text-red-800 mt-9">ESSAY</p>
                <p className="text-black font-nanum text-xl mt-1 tracking-tight">HISTORY OF POWER IN THE PHILIPPINES</p>
                <p className="text-black font-nanum text-base mt-4 tracking-tight">
                  In the historical context, power has often been seen as authority figures,  from precolonial Datus to Presidents, in modern times. 
                </p>
              </div>
            </Link>



            <Link href="/works/kathleen">
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

export default Cruz;
