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
            <p className="text-3xl font-nanum font-bold tracking-tight mb-1 px-24 text-center">LOREM IPSUM DOLOR SIT</p>
            <p className="text-base font-nanum font-regular tracking-tight text-center px-24 mb-3 italic">Written by Kathleen Therese Cruz</p>
          </div>
          
          <div className="w-1/2 relative flex-1 h-full overflow-hidden">
            <Image
              src="/protest.png"
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
            he Coin marks the arrival of a striking new voice to the literary landscape. Yasmin Zaher’s irreverent debut is as shocking as it is stunning, as bonkers as it is beautiful. The Dylan Thomas Prize-winning novel is full of big ideas, but without ever moralising, as our unnamed narrator navigates the squalor of New York City after leaving Palestine. Dirt, in this novel, represents disorder and chaos, but it’s more complicated than that. The dirt from the outside disgusts our narrator, but she finds that dirt she chooses can be liberating. Cleanliness is all about control. This can manifest in meticulous regimes, long showers, and full-body scrubs, but also in the decision to be dirty, to bring dirt in, to commit to being filthy like it is your religion. “The women in my family place a lot of emphasis on being clean, perhaps because there was little else they could control,” explains The Coin’s narrator. For a while she abides by this ideology, but later flips it on its head.

            In the physical edition of the book, you may spot a stylistic choice in the printing of the book – a coin in the bottom right corner of every other page. If you brush through the pages backwards like a flip-book, you’ll notice that the coin flips just like our narrator. Short vignette-like chapters accommodate its propulsive tone, in which the glamorously neurotic narrator discusses sex, beauty, grief, art, wealth, poverty, appetite, destruction, statehood, and statelessness. At times, you can almost imagine Yasmin Zaher typing away at these pages, cackling at her own audacity. Perhaps this is the luxury of the debut novelist, writing for an abstract audience who don’t exist yet, but there’s a distinct subversiveness in its lack of inhibitions that makes *The Coin* so unique.
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
            <Link href="/works/kathleen">
              <div className="flex flex-col max-w-[500px] flex-1 cursor-pointer 
                              overflow-hidden 
                              transition-all duration-300 
                              hover:-translate-y-1">
                
                <div className="w-full h-[260px] relative">
                  <Image
                    src="/edsa-rev.jpg"
                    alt="Protest Image"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <p className="text-sm font-albert font-bold tracking-tight text-red-800 mt-9">POETRY</p>
                <p className="text-black font-nanum text-xl mt-1 tracking-tight">LOREM IPSUM DOLOR SIT</p>
                <p className="text-black font-nanum text-base mt-4 tracking-tight">
                  Dirt was my first hypothesis. It had its way of going where nothing else would go...
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
                <p className="text-black font-nanum text-xl mt-1 tracking-tight">LOREM IPSUM DOLOR SIT</p>
                <p className="text-black font-nanum text-base mt-4 tracking-tight">
                  Dirt was my first hypothesis. It had its way of going where nothing else would go...
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
