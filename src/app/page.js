import Image from 'next/image'
import Link from "next/link"

export default function Home() {

  return (
    <main>

      {/* Hero */}
      <section className="hero-image mx-auto flex flex-col items-center justify-items-center place-content-center h-svh">
        <div className="text-center mt-20 lg:mt-40 mb-6">
          <div className="text-subtitle text-xl lg:text-3xl font-black">
            Welcome to
          </div>
          <h1 className="flex flex-col text-5xl lg:text-9xl font-black italic uppercase text-white tracking-tighter">
            International <span className="not-italic -my-4 lg:-my-10">Bible Christian</span> Fellowship
          </h1>
        </div>

        <div className="text-center text-white m-8">
          <h3 className="uppercase text-xl lg:text-4xl font-black tracking-tight">
            Join us live or in person
          </h3>
          <p className="font-black">
            Sundays at 10:30am
          </p>
          <div className="flex space-x-4 text-xs justify-center pt-2">
            <button className="border border-transparent rounded-full h-10 px-2 bg-light-orange uppercase">
              Watch online
            </button>
            <button className="border rounded-full h-10 px-5 bg-white text-black uppercase">
              New here?
            </button>
          </div>
        </div>

        <div className="text-white m-4 font-black text-lg">
          <p>5823 176th St SW Lynnwood, WA 98037</p>
        </div>
      </section>

      <section className="container mx-auto p-10 m-5">
        <div className="flex flex-col md:flex-row p-5 gap-y-20 justify-around">
          <div className="md:basis-1/2 relative">
            <div className="relative mx-auto w-80 h-80 md:w-[31rem] md:h-96 overflow-hidden">
              <Image 
                src="https://res.cloudinary.com/ibcf/image/upload/v1723851920/IMG_0040_fmjzkk.jpg"
                fill={true}
                alt="Picture of group worship"
                objectFit="cover"
                className=""
              />
          </div>
            <div className="absolute inset-x-0 -bottom-9">
              <p className="max-w-fit mx-auto bg-mint border-none rounded-3xl p-5 lg:text-2xl font-bold uppercase">Come worship with us!</p>
            </div>
          </div>

          <div className="md:basis-1/2 flex flex-col md:px-16 gap-y-14 justify-center">
            <p>We are glad that you checked us here! Whatever is your race, the color of your skin, the language that you speak, or the accent that you have, you are very much welcome here.</p>
            <p>If you come and join us in our worship, you don't have to wory about the clothes that you will wear (as long as you are covered) or whether you know how to sing.</p>

            <button className="max-w-fit mx-auto border-2 border-black rounded-full h-10 px-5 bg-white text-black uppercase italic">
              <Link href="/about-us">Learn more</Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
