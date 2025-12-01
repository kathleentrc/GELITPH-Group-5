import Image from "next/image";
import Link from "next/link";

const Cloma = () => {
  return (
    <div className="bg-gray-950 font-nanum text-white">
      <main className="px-10">

        {/* top section */}
        <div className="flex flex-row items-center h-screen">
          <div className="w-1/2 flex flex-col items-center gap-2">
            <p className="text-sm font-albert font-bold tracking-tight mb-5">REFLECTION</p>
            <p className="text-3xl font-nanum font-bold tracking-tight mb-1 px-24 text-center">GROWING UP, FINDING MY VOICE</p>
            <p className="text-base font-nanum font-regular tracking-tight text-center px-24 mb-3 italic">Written by Shania Francine Cloma</p>
          </div>
          
          <div className="w-1/2 relative flex-1 h-full overflow-hidden">
            <Image
              src="/growing-up.webp"
              alt="Protest Image"
              fill
              className="object-cover mt-14 py-32 grayscale contrast-125 brightness-90"
            />
          </div>
        </div>

        <p className="text-[10px] text-white/60 italic mt-2 text-right pr-2">
          Image from https://www.tagaloglang.com/noche-buena-filipino-christmas-eve/
        </p>


        {/* content section */}
        <div className="flex flex-col h-fit bg-gray-100 text-black -mx-10 px-96 py-14">
          <p className="text-xl leading-relaxed mb-14">
            <span className="text-6xl float-left leading-none mr-1">P</span>
            ower isn't something new to us. We grow up learning who holds it long before we ever learn what it means. And now that the Christmas season is coming—the season of long tables, overflowing food, and relatives emerging from corners of the world, we're reminded again of the spaces where power is first taught: our own families.
            <br/><br/>

            Every year, as parols light up the streets and the familiar smell of holiday cooking fills the air, I'm pulled back to the gatherings of my childhood. Those rooms were loud and warm, the kind of warmth that sits between laughter and the clatter of utensils. I remember kids running around in loose hand-me-down shirts, titos singing songs they barely knew the lyrics to, and the quiet comfort of being surrounded by people who shared the same stories and blood.

            <br/><br/>

            But if I'm honest, those gatherings were never just about joy. They were also places where I first learned what it meant to stay silent. What it meant to swallow discomfort. What it meant to behave. 
            <br/><br/>

            Growing up in a typical Filipino household, there were countless unwritten rules—none more powerful than bawal mangatuwiran and bawal sumagot sa nakakatanda. You didn't question an elder, even when you felt the weight of your own thoughts trying to rise. Puberty wasn't just about changes in our bodies; it was the time we started forming our own morals, shaped by school, peers, the internet, and a growing understanding of the society around us. But those new thoughts often collided with the world inside our home.
            <br/><br/>

            I remember the Duterte administration vividly, not just for the national turmoil, but for the conflict it created in our living room. I would share posts about the injustices of the war on drugs. My parents would call me into their room, sit me down, and "correct" me. They supported the administration; I didn't. And every attempt to voice my reasoning ended with the same line: "Mas matanda kami. Makinig ka."
            <br/><br/>

            It didn't matter that I was speaking calmly. It didn't matter that I was citing facts or expressing concern for victims. What mattered was age. Hierarchy. The imbalance baked so deeply into our culture that to challenge it felt like a betrayal.
            <br/><br/>

            And that problem wasn't mine alone. I saw it in my cousin, who grew up even more sheltered than I did. When I asked her about a political issue once, she shrugged and said, “Ganon talaga. Wala naman tayo magagawa kung ganon na yung desisyon ng nakakataas." There was no anger in her voice—just resignation. The kind so many Filipino youth inherit without realizing it, handed down quietly like family recipes or old photo albums.
            <br/><br/>

            This is where the discussion of power and resistance stops being abstract. It becomes personal. Because before we even face the larger systems outside: government, institutions, history, we first learn how to resist within the walls of our own home. And sometimes, that is harder. There is love intertwined with obedience, fear intertwined with respect, and silence intertwined with survival.

            <br/><br/>

            But understanding our elders also requires compassion. Their world taught them different rules. They grew up in environments where questioning was punished, where conformity kept you safe, where stability depended on not rocking the boat. They mirrored what they knew. And so do we—until we choose otherwise.
            <br/><br/>

            Change does not happen in a single argument or a single generation. It happens in small acts of courage: a respectful challenge, a difficult conversation, a refusal to surrender one's principles. It happens when a young person decides that obedience should not come at the cost of their moral clarity.

            <br/><br/>

            As Christmas approaches again, I think of how our homes reflect the country we live in. Power sits at the head of the table. Resistance often whispers from the corner. But hope; hope lingers like the lights strung across windows, soft but persistent, waiting for someone to notice.

            <br/><br/>

            Perhaps resistance doesn't always manifest as protests. Sometimes, it looks like a child who finally says, "Pag-usapan natin." A youth who questions why things are the way they are. A generation that chooses awareness over apathy, even when taught to simply accept things as they are.

            <br/><br/>

            We carry the weight of old habits, yes. But we also carry the capacity to rewrite them.

            <br/><br/>

            And perhaps this Christmas, while surrounded by familiar faces and familiar rules, we might find the courage to begin.

            <br/><br/>
            
          </p>



          {/* author info*/}
          <div className="border-t border-gray-300 pt-8 mb-14">
            <div className="flex items-start gap-4 mt-5">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-nanum font-bold text-gray-600">
                  SFTC
                </span>
              </div>
              <div>
                <h3 className="text-xl font-nanum font-bold tracking-tight mb-1 text-[#171717] mt-1">
                  Shania Francine Cloma
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



            <Link href="/works/vincent">
              <div className="flex flex-col max-w-[500px] flex-1 cursor-pointer 
                              overflow-hidden 
                              transition-all duration-300 
                              hover:-translate-y-1 mb-20">
                
                <div className="w-full h-[260px] relative">
                  <Image
                    src="/edsa-rev.jpg"
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

export default Cloma;
