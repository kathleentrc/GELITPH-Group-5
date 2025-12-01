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
            <p className="text-3xl font-nanum font-bold tracking-tight mb-1 px-24 text-center">FINDING POWER WITHIN:<br/>A PERSONAL REFLECTION</p>
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
            <span className="text-6xl float-left leading-none mr-1">P</span>
            ower is often known to be authority, something with influence that is held by leaders, institutions, or people. But often one’s first encounter is often inside our own homes. Started by living with small rules, expectations of us, and decisions that shapes our very being, on how one should behave, act, speak, or think. For me, my first experience of authority was with my parents, about not being able to do the things I want, lacking the freedom to do so, being scolded for doing wrong, and seeking their opinions. 

            <br/><br/>
            From much of my early life, I believed I lacked the power to act independently, believing that others are more powerful or smarter than me. Choosing to stay quiet and be invisible, instead of truly being curious about what is out there in the world. I secluded myself from much of the world, learning to step aside, hiding in my own thoughts. Over time, I learned to grow cautious and restrained, allowing me to be reserved and shy. 

            <br/><br/>
            Gradually, I learned the importance of having my own personal power. Breaking from the comfort of my own world, to slowly finding my own voice. It started with small moments of awareness such as participating in classroom discussion, making my own decisions, socializing with others, and taking responsibility for my own mistakes. Instead of running away or choosing to stay silent, I slowly began to realize the power I had on myself. It isn’t just about authority but knowing that I have the power to control my own life, doing things and actions even when it feels uncomfortable. As I continue with this practice, I became more self confident, willing to take risks and actions I wouldn’t normally do. Knowing that I’m more capable and confident that I was before. 

            <br/><br/>
            Overall, I learned that power isn’t only for a select group of people, but something that everyone has, they only need to find and hone it. The lessons I learned taught me the importance and limitations of power. One’s own personal power is about believing in oneself, to act with courage and humility, willingness to go beyond one’s comfort zone, the determination to shape their own life. 

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
