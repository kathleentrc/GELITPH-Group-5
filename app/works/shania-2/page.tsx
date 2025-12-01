import Image from "next/image";
import Link from "next/link";

const Cloma = () => {
  return (
    <div className="bg-gray-950 font-nanum text-white">
      <main className="px-10">
        {/* top section */}
        <div className="flex flex-row items-center h-screen">
          <div className="w-1/2 flex flex-col items-center gap-2">
            <p className="text-sm font-albert font-bold tracking-tight mb-5">
              FLASH FICTION
            </p>
            <p className="text-3xl font-nanum font-bold tracking-tight mb-1 px-24 text-center">
              BETWEEN THE LIGHTS
            </p>
            <p className="text-base font-nanum font-regular tracking-tight text-center px-24 mb-3 italic">
              Written by Shania Francine Cloma
            </p>
          </div>

          <div className="w-1/2 relative flex-1 h-full overflow-hidden">
            <Image
              src="/between-the-lights.jpg"
              alt="Protest Image"
              fill
              className="object-cover mt-14 py-32 grayscale contrast-125 brightness-90"
            />
          </div>
        </div>

        <p className="text-[10px] text-white/60 italic mt-2 text-right pr-2">
          Image from https://bluprint-onemega.com/interiors/homes/objects/everything-you-need-to-know-about-the-parol/
        </p>

        {/* content section */}
        <div className="flex flex-col h-fit bg-gray-100 text-black -mx-10 px-96 py-14">
          <p className="text-xl leading-relaxed mb-14">
            <span className="text-6xl float-left leading-none mr-1">T</span>
            he parol outside their window flickered unevenly, its colors pooling
            onto the living room floor where Maria sat scrolling through her
            phone. It was almost Christmas again. The house smelled of her
            mother’s early attempts at fruit salad, sweet and sticky, the same
            way memories tended to cling long after they were welcome.
            <br />
            <br />
            From the kitchen came the familiar noise of relatives arriving:
            heavy footsteps, laughter loud enough to shake the windows, and the
            clatter of dishes that signaled another year of gatherings. Maria
            used to love these nights. They were warm, chaotic, and full of
            cousins who felt more like siblings. But as she grew older, those
            same nights began to feel tight around the edges.
            <br />
            <br />
            "Maria," her father called. "Come here."
            <br />
            <br />
            She swallowed. She already knew why.
            <br />
            <br />
            In their room, her parents sat stiffly on opposite sides of the bed,
            both wearing the same disapproving expression she’d grown used to
            since she started speaking out online. Her latest shared post that
            criticizes the government’s violent war on drug operations was still
            open on her screen.
            <br />
            <br />
            "Delete this," her father said. "Hindi mo alam 'yung sinasabi mo."
            <br />
            <br />
            "I do," she replied quietly. "And it's wrong. People are—"
            <br />
            <br />
            "Maria." Her mother's voice sharpened. "We're older. We know better.
            Makinig ka."
            <br />
            <br />
            The words were predictable, carved deep into generations before her.
            She felt them press heavy on her throat, the old instinct to fall
            silent tugging at her. Bawal mangatuwiran. She'd heard it all her
            life, learned it the same way she learned to spoon rice onto a plate
            or fold clothes the "right" way.
            <br />
            <br />
            She lowered her gaze. "I'm just trying to understand things for
            myself."
            <br />
            <br />
            "Then understand this," her father said. "Sumunod ka."
            <br />
            <br />
            Maria left the room without answering. In the hallway, her younger
            cousin Princess sat on the staircase, hugging a stuffed pillow.
            "Narinig ko,"” she whispered. "Why do you keep fighting with them?"
            <br />
            <br />
            Maria hesitated. "Because... some things need to be questioned."
            <br />
            <br />
            Princess blinked, confused. "Eh ganon naman talaga. Wala namang
            choice, 'di ba? What the elders decide, what the people in power
            decide... we just follow."
            <br />
            <br />
            A small, sad smile tugged at Maria's lips. She recognized the
            resignation in the girl's voice—the same one she once carried. The
            same one she was trying to unlearn.
            <br />
            <br />
            She sat beside her cousin. The parol's lights blinked through the
            stairwell window, casting shifting colors on their faces.
            <br />
            <br />
            "You know," Maria said softly, "when you grow up, you don't need to
            accept everything just because someone older said so."
            <br />
            <br />
            Princess looked startled. "But they'll get mad."
            <br />
            <br />
            "They might," Lea admitted. "Change always makes someone
            uncomfortable." She paused, choosing her next words carefully. "But
            staying silent... that can hurt too."
            <br />
            <br />
            Downstairs, laughter rose again; titos warming up for another round
            of karaoke. The house was alive and loud, but between those sounds
            was a quiet space Maria hadn’t noticed before. A space where choice
            could breathe.
            <br />
            <br />
            She reached for Princess' hand. "Someday, it’ll be your turn to
            speak. And you don’t have to whisper."
            <br />
            <br />
            Princess nodded slowly, unsure but listening in a way Maria wished
            her parents did.
            <br />
            <br />
            The parol flickered once more. For a moment, its lights steadied,
            glowing bright enough to touch both of their faces. Maria squeezed
            Princess' hand, sensing something small but certain shift between
            them.
            <br />
            <br />
            Hope, maybe. Soft as a Christmas light, but stubborn enough to keep
            shining.
            <br />
            <br />
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
                  Contributing writer exploring themes of power, resistance, and
                  social justice.
                </p>
              </div>
            </div>
          </div>

          {/* read more section */}
          <div className="border-t border-gray-300 pt-10" />
          <h2 className="text-3xl font-nanum font-bold tracking-tight mb-8 text-[#171717]">
            Read More
          </h2>

          {/* other works */}
          <div className="flex flex-row gap-7">
            <Link href="/works/research">
              <div
                className="flex flex-col max-w-[500px] flex-1 cursor-pointer 
                              overflow-hidden 
                              transition-all duration-300 
                              hover:-translate-y-1"
              >
                <div className="w-full h-[260px] relative">
                  <Image
                    src="/featured1.png"
                    alt="Protest Image"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105 grayscale contrast-125 brightness-90"
                  />
                </div>

                <p className="text-sm font-albert font-bold tracking-tight text-red-800 mt-9">
                  ESSAY
                </p>
                <p className="text-black font-nanum text-xl mt-1 tracking-tight">
                  HISTORY OF POWER IN THE PHILIPPINES
                </p>
                <p className="text-black font-nanum text-base mt-4 tracking-tight">
                  In the historical context, power has often been seen as
                  authority figures, from precolonial Datus to Presidents, in
                  modern times.
                </p>
              </div>
            </Link>

            <Link href="/works/vincent">
              <div
                className="flex flex-col max-w-[500px] flex-1 cursor-pointer 
                              overflow-hidden 
                              transition-all duration-300 
                              hover:-translate-y-1 mb-20"
              >
                <div className="w-full h-[260px] relative">
                  <Image
                    src="/edsa-rev.jpg"
                    alt="Protest Image"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105 grayscale contrast-125 brightness-90"
                  />
                </div>

                <p className="text-sm font-albert font-bold tracking-tight text-red-800 mt-9">
                  REFLECTION
                </p>
                <p className="text-black font-nanum text-xl mt-1 tracking-tight">
                  INVISIBLE IN PLAIN SIGHT
                </p>
                <p className="text-black font-nanum text-base mt-4 tracking-tight">
                  To me, it felt like being invincible. It was within a moment I
                  anticipated being heard but was not...
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
