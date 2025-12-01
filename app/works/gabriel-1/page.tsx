import Image from "next/image";
import Link from "next/link";

const Cruz = () => {
  return (
    <div className="bg-gray-950 font-nanum text-white">
      <main className="px-10">

        {/* top section */}
        <div className="flex flex-row items-center h-screen">
          <div className="w-1/2 flex flex-col items-center gap-2">
            <p className="text-sm font-albert font-bold tracking-tight mb-5">ESSAY</p>
            <p className="text-3xl font-nanum font-bold tracking-tight mb-1 px-24 text-center">POWER AND RESISTANCE <br/>IN MODERN SOCIETY</p>
            <p className="text-base font-nanum font-regular tracking-tight text-center px-24 mb-3 italic">Written by Gabriel Clarence Balboa</p>
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
            <span className="text-6xl float-left leading-none mr-1">W</span>
            e live in a world where power shapes nearly every aspect of our lives. We work to gain power, believing that it will bring fulfillment or rise through societal hierarchies. Whether we acknowledge it or not, power is there controlling our very lives. Power decides and shapes society, who decides, and who must follow. Resistance comes to those who are strong willed, emerging to those who want change, instead of faltering to the demands of authority.  This has been what shaped society since its inception: power to control people, creating change for {`one's`} own benefit or for the advancement of society; resistance to check the balance of power, see that no abuse or total power is achieved. 
            <br/><br/>
            These forces are in constant tension. Power creates conditions for resistance, while resistance constantly reshapes the meaning of power and how it’s exercised. Understanding this reveals what power truly is, it is never absolute. No matter how much power a person has, with enough resistance, they can fall and submit. Even at times where one feels powerless, they must find a way to fight and resist, instead of groveling to  submission to the power of authority. Everyone has the power of change, what lacks is the courage and will to do so.
            <br/><br/>
            In our modern society, resistance has taken new forms. With the prevalent use of technology, people have been able to communicate and gather with great speed. Giving voices to those marginalized and exposing the wrong doing of people. However, while essential, it can be controlled and abused by those with power. The spread of misinformation and fake news, to hide the misconducts and abuses caused by them, is strong. People tend to not research what they learn, being bombarded with information everyday, fact checking each one tends to be an impossible task. Tending to keep within their circle of knowledge, believing what they have, believing in what they believe in. 
            <br/><br/>
            Power and resistance remains fundamental to our society, defining what it truly means. While power still controls our society, people are now capable of resisting and challenging them with great speed. The digital age has made resistance more accessible, while introducing more vulnerabilities requiring presence and responsibility. So while power is still guiding and a major influence, resistance lessens this and ensures that it continues to evolve in new ways.
            <br/><br/>
          </p>



          {/* author info*/}
          <div className="border-t border-gray-300 pt-8 mb-14">
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



            <Link href="/works/vincent-1">
              <div className="flex flex-col max-w-[500px] flex-1 cursor-pointer 
                              overflow-hidden 
                              transition-all duration-300 
                              hover:-translate-y-1 mb-20">
                
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
          </div>


        </div>
      </main>
    </div>
  );
};

export default Cruz;
