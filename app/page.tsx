import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="px-10">
        <div className="flex flex-row items-center h-screen">
          <div className="w-1/2 flex flex-col items-center p-5 gap-2">
            <p className="text-sm font-albert font-bold tracking-tight text-red-800 mb-2">Explore</p>
            <p className="text-3xl font-nanum font-bold tracking-tight mb-3 px-24 text-center">POWER IN POETRY & PROSE</p>
            <p className="text-lg font-nanum font-regular tracking-tight text-center px-24 mb-3">We create a space where these important narratives can be shared, deepen awareness of social issues, and encourage meaningful action. </p>
            <button className="text-sm font-albert font-regular text-white px-7 py-3 mt-7 bg-slate-900 hover:bg-slate-700 transition tracking-tight">Start Reading</button>
          </div>
          
          <div className="w-1/2 h-[700px] bg-gray-500 m-10">
            {/* img placeholder */}
          </div>
        </div>

        <div className="flex flex-col bg-slate-950 h-full -mx-10">
          <p className="text-4xl font-nanum font-regular tracking-tight text-white text-center pt-20 pb-10">Featured Pieces</p>
        </div>  
        
      </main>
    </div>
  );
}
