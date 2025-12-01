import Image from "next/image";
import Link from "next/link";

const Cruz = () => {
  return (
    <div className="bg-gray-950 font-nanum text-white">
      <main className="px-10">

        {/* top section */}
        <div className="flex flex-row items-center h-screen">
          <div className="w-1/2 flex flex-col items-center gap-2">
            <p className="text-sm font-albert font-bold tracking-tight mb-5">POETRY</p>
            <p className="text-3xl font-nanum font-bold tracking-tight mb-1 px-24 text-center">{`THEY'RE`} COMING FOR US</p>
            <p className="text-base font-nanum font-regular tracking-tight text-center px-24 mb-3 italic">Written by Kathleen Therese Cruz</p>
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
            hey’re coming for us.<br/>
            I sense their presence in<br/>
            The middle of smoke-filled streets and alleyways.<br/>
            <i>They’re here</i>, shaking my hand,<br/>
            Promoting flyers, secretly handing out money<br/>
            With a large grin on their face<br/>
            That may seem friendly on the surface.<br/>
            They tell me their surnames<br/>
            That I recognize from a long line of trapos.<br/>
            Each line, each narrative,<br/>
            Felt rehearsed to fool me.<br/>
            <i>I can give you a promising future</i>, they said.<br/><br/>

            I spent years searching for that promise<br/>
            While they rummaged through a circus<br/>
            In front of our very eyes.<br/>
            They shackle us to a system<br/>
            That fills its streets<br/>
            With a bloodbath that reeks of injustice.<br/>
            Names are being forgotten<br/>
            And I wish I could wipe my brain clean<br/>
            Of the horrors I’ve seen.<br/>
            Budgets are cut here and there,<br/>
            My education, traded for corruption.<br/>
            <i>Aren’t these shackles supposed to be for them?</i><br/><br/>

            They’re coming for us<br/>
            But the streets chose to rise and clamor<br/>
            Hand in hand,<br/>
              <span className="ml-8">We walk,</span><br/>
              <span className="ml-8">We resist,</span><br/>
              <span className="ml-8">We create a space</span><br/>
            Where we can speak the truth to power.<br/><br/>
            At last, <br/>
              <span className="ml-8">this is only the beginning.</span><br/>


          </p>



          {/* author info*/}
          <div className="border-t border-gray-300 pt-8 mb-14">
            <div className="flex items-start gap-4 mt-5">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-nanum font-bold text-gray-600">
                  KTC
                </span>
              </div>
              <div>
                <h3 className="text-xl font-nanum font-bold tracking-tight mb-1 text-[#171717] mt-1">
                  Kathleen Therese Cruz
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
