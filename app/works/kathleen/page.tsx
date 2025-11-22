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
        <div className="flex flex-row h-screen bg-orange-50 text-black -mx-10 px-80">
          <p className="text-5xl">T</p>
          <p className="text-lg">he Coin marks the arrival of a striking new voice to the literary landscape. Yasmin Zaher’s irreverent debut is as shocking as it is stunning, as bonkers as it is beautiful. The Dylan Thomas Prize-winning novel is full of big ideas, but without ever moralising, as our unnamed narrator navigates the squalor of New York City after leaving Palestine. Dirt, in this novel, represents disorder and chaos, but it’s more complicated than that. The dirt from the outside disgusts our narrator, but she finds that dirt she chooses can be liberating. Cleanliness is all about control. This can manifest in meticulous regimes, long showers, and full-body scrubs, but also in the decision to be dirty, to bring dirt in, to commit to being filthy like it is your religion. “The women in my family place a lot of emphasis on being clean, perhaps because there was little else they could control,” explains The Coin’s narrator. For a while she abides by this ideology, but later flips it on its head. In the physical edition of the book, you may spot a stylistic choice in the printing of the book – a coin in the bottom right corner of every other page. If you brush through the pages backwards like a flip-book, you’ll notice that the coin flips just like our narrator. Short vignette-like chapters accommodate its propulsive tone, in which the glamorously neurotic narrator discusses sex, beauty, grief, art, wealth, poverty, appetite, destruction, statehood, and statelessness. At times, you can almost imagine Yasmin Zaher typing away at these pages, cackling at her own audacity. Perhaps this is the luxury of the debut novelist, writing for an abstract audience who don’t exist yet, but there’s a distinct subversiveness in its lack of inhibitions that makes The Coin so unique.</p>
        </div>


        {/* author info*/}
        
        {/* read more */}
      </main>
    </div>
  );
};

export default Cruz;
