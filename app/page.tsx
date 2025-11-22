import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="px-10">

        {/* hero container */}
        <div className="flex flex-row items-center h-screen">
          <div className="w-1/2 flex flex-col items-center gap-2">
            <p className="text-sm font-albert font-bold tracking-tight text-red-800 mb-2">Explore</p>
            <p className="text-3xl font-nanum font-bold tracking-tight mb-3 px-24 text-center">POWER IN POETRY & PROSE</p>
            <p className="text-lg font-nanum font-regular tracking-tight text-center px-24 mb-3">We create a space where these important narratives can be shared, deepen awareness of social issues, and encourage meaningful action. </p>
            
            {/* TODO: Link this button to 'collections' section */}
            <button className="text-sm font-albert font-regular text-white px-7 py-3 mt-7 bg-slate-900 hover:bg-slate-700 transition tracking-tight">Start Reading</button>
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



        {/* featured pieces container */}
        <div className="flex flex-col bg-slate-950 h-full -mx-10">
          <div className="px-36">
            <p className="text-base font-albert font-bold tracking-tight text-white pt-20 mb-5">In Focus</p>
            <p className="text-5xl font-nanum font-regular tracking-tight text-white pb-2">Featured Pieces</p>
            <p className="text-lg font-nanum font-regular tracking-tight text-white pb-14 italic mb-5">Curated by our editorial team</p>
          </div>
          
          {/* pieces*/}
          <div className="flex flex-row gap-5 px-36 relative flex-1 h-full overflow-hidden justify-between mb-32">
            {/* piece 1 */}
            <Link href="/works/kathleen">
              <div className="flex flex-col w-[400px] cursor-pointer hover:shadow-lg transition">
                <Image
                  src="/edsa-rev.jpg"
                  alt="Protest Image"
                  width={400}
                  height={0}
                  className="object-cover"
                />
                <p className="text-sm font-albert font-bold tracking-tight text-white mt-9">POETRY</p>
                <p className="text-white font-nanum text-xl mt-1 tracking-tight">LOREM IPSUM DOLOR SIT</p>
                <p className="text-white font-nanum text-base mt-4 tracking-tight">Dirt was my first hypothesis. It had its way of going where nothing else would go, and I kept seeing it, on surfaces, in corners, underneath furniture and long nails.</p>
              </div>
            </Link>
          </div>          
        </div>


        {/* collections */}
        <div className="">
          <p>Collection</p>
          <p>Poetry</p>
          <p>Flash Fiction</p>
          <p>Essays</p>
          <p>Reflections</p>
        </div>



        {/* authors */}
        <div>
          <p>Gabriel Clarence Balboa</p>
          <p>Castillo, Vincent Thaddeus Catalan</p>
          <p>Cloma, Shania Francine Tagudinay</p>
          <p>Gabriel Clarence Balboa</p>
          <p>Cruz, Kathleen Therese Ramos</p>
        </div>



        {/* about */}
        <div>
          <p>This magazine explores the theme of power and resistance in Philippine literature, reflecting how writers explore themes of societal struggles such as inequality, oppression, and social injustice. It examines the ways that depict the interactions between individuals and institutions where power and authority are exercised. In this context, power refers to the authority of individuals and institutions, including their ability to influence and dominate others. While resistance represents the efforts of others to challenge authority or to endure it to survive. Due to this, Philippine literature becomes a tool that allows writers and individuals to shed light on these struggles and give voice to those who resist and endure. Allowing the spread of awareness and inspiring and encouraging action and resilience in the face of injustice.</p>
        </div>

        
      </main>
    </div>
  );
}
