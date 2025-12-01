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
              POETRY
            </p>
            <p className="text-3xl font-nanum font-bold tracking-tight mb-1 px-24 text-center">
              BORROWED HOPE
            </p>
            <p className="text-base font-nanum font-regular tracking-tight text-center px-24 mb-3 italic">
              Written by Christophe Mervyn Rodriguez
            </p>
          </div>

          <div className="w-1/2 relative flex-1 h-full overflow-hidden">
            <Image
              src="/borrowed-hope.jpg"
              alt="Protest Image"
              fill
              className="object-cover mt-14 py-32 grayscale contrast-125 brightness-90"
            />
          </div>
        </div>

        {/* <p className="text-[10px] text-white/60 italic mt-2 text-right pr-2">
          Image from https://www.tagaloglang.com/noche-buena-filipino-christmas-eve/
        </p> */}

        {/* content section */}
        <div className="flex flex-col h-fit bg-gray-100 text-black -mx-10 px-96 py-14">
          <p className="text-xl leading-relaxed mb-14">
            <span className="text-6xl float-left leading-none mr-1">W</span>
            hat once was a glorious land
            <br />
            Has now faded into the margins of injustice
            <br />
            A world that is now full of empty promises of change
            <br />
            And believers in borrowed hope
            <br />
            <br />
            While they live in luxury
            <br />
            There are those who dwell in despair
            <br />
            Beyond the veiled wealth stolen
            <br />
            Is the pilfered trust that the people bestowed on them
            <br />
            <br />
            The same story with a different cast
            <br />
            The same greed and hunger for power
            <br />
            Whose consequences are bore by the people
            <br />
            How much longer must we endure
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
                  Christophe Mervyn Rodriguez
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
            <Link href="/works/shania-2">
              <div
                className="flex flex-col max-w-[500px] flex-1 cursor-pointer 
                              overflow-hidden 
                              transition-all duration-300 
                              hover:-translate-y-1"
              >
                <div className="w-full h-[260px] relative">
                  <Image
                    src="/between-the-lights.jpg"
                    alt="Protest Image"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105 grayscale contrast-125 brightness-90"
                  />
                </div>

                <p className="text-sm font-albert font-bold tracking-tight text-red-800 mt-9">
                  FLASH FICTION
                </p>
                <p className="text-black font-nanum text-xl mt-1 tracking-tight">
                  BETWEEN THE LIGHTS
                </p>
                <p className="text-black font-nanum text-base mt-4 tracking-tight">
                  The parol outside their window flickered unevenly, its colors
                  pooling onto the living room floor where....
                </p>
              </div>
            </Link>

            <Link href="/works/kathleen-1">
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
                  POETRY
                </p>
                <p className="text-black font-nanum text-xl mt-1 tracking-tight">
                  {`THEY'RE`} COMING FOR US
                </p>
                <p className="text-black font-nanum text-base mt-4 tracking-tight">
                  Exploring the circus in our government where the spectacle
                  goes on while the people are left to suffer.
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
