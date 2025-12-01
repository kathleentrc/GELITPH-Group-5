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
            <p className="text-3xl font-nanum font-bold tracking-tight mb-1 px-24 text-center">RESISTANCE THROUGH READING</p>
            <p className="text-base font-nanum font-regular tracking-tight text-center px-24 mb-3 italic">Written by Kathleen Therese Cruz</p>
          </div>
          
          <div className="w-1/2 relative flex-1 h-full overflow-hidden">
            <Image
              src="/books.jpg"
              alt="Protest Image"
              fill
              className="object-cover mt-14 py-32 grayscale contrast-125 brightness-90"
            />
          </div>
        </div>


        {/* content section */}
        <div className="flex flex-col h-fit bg-gray-100 text-black -mx-10 px-96 py-14">
          <p className="text-xl leading-relaxed mb-14">
            <span className="text-6xl float-left leading-none mr-1">T</span>
            hroughout the past years, I have witnessed the lives of ordinary Filipinos being taken away in the news, in the articles I’ve read, and in the literature I’ve consumed. This is a result of the destructive nature of absolute power. Power, in the wrong hands, corrupts, and it creates a cycle of violence and injustice that still continues in the country today. 
            <br/><br/>

            Power is not only something held by those in authority. We all possess it, but some people, especially those above us, fail to practice it properly. 

            This is evident during the Duterte administration. His three words, “shoot them dead,” carried a form of power that took thousands of lives away during his presidency. Some, like Kian Delos Santos, were already familiar to me. To others, their names may have been reduced to numbers. One person became hundreds, followed by thousands. 
            <br/><br/>

            Their stories fade quickly in the news, but reading literature brings them back to life again. According to Ezra Pound, literature is {`"news that stays news”`}. Because of it, we learn to remember dates and the names of victims who are denied due process and justice due to absolute power. By reading literature, we learn empathy and kindness. However, it doesn’t simply stop there—it’s only the start of our “pagkamulat”. When absolute power exists, we must also resist and fight against it. 
            <br/><br/>

            Once we’ve opened our eyes to how power corrupts, we learn to resist and take action: vote for public officials who exercise their power in the right way. Read books and articles about Martial Law, the War on Drugs, the Israel-Palestine conflict, and many other issues that continue to affect humanity. Protest and fight for the issues that demand accountability and proper action.
            <br/><br/>

            My understanding of power has evolved into a commitment to stay informed, to challenge the system, and to take action—this is where resistance begins.
            <br/><br/>
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
                  The parol outside their window flickered unevenly, its colors pooling onto the living room floor where....
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

export default Cruz;
