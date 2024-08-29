import Image from 'next/image'
import Link from "next/link"

export default function Home() {

  return (
    <main>

      {/* Hero */}
      <section className="mx-auto flex flex-col items-center justify-items-center place-content-center h-svh">
        <div className="gradiantBackground"></div>
        <Image
          src="https://res.cloudinary.com/ibcf/image/upload/v1723866139/IMG_0430-2_n8xsq5.jpg"
          alt="Picture of IBCF Church"
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/ibcf/image/upload/c_thumb,w_200,g_face/v1724211083/churchcover_jbkhd6.png"
          fill
          className="hero-image"
        />
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


      {/* Come worship with us */}
      <section className="container mx-auto p-10 lg:py-16 m-5">
        <div className="flex flex-col lg:flex-row p-5 gap-y-20 justify-around">
          <div className="md:basis-1/2 relative">
            <div className="relative mx-auto w-80 h-80 md:w-[31rem] md:h-96 overflow-hidden shadow-md">
              <Image 
                src="https://res.cloudinary.com/ibcf/image/upload/v1723851920/IMG_0040_fmjzkk.jpg"
                fill={true}
                alt="Picture of group worship"
                className=""
                style={{objectFit: "cover"}}
              />
          </div>
            <div className="absolute inset-x-0 -bottom-7">
              <p className="shadow-md max-w-fit mx-auto bg-mint border-none rounded-3xl p-5 lg:text-3xl font-bold uppercase ">Come worship with us</p>
            </div>
          </div>

          <div className="md:basis-1/2 flex flex-col md:px-16 gap-y-14 justify-center">
            <p>We are glad that you checked us here! Whatever is your race, the color of your skin, the language that you speak, or the accent that you have, you are very much welcome here.</p>
            <p>If you come and join us in our worship, you don't have to wory about the clothes that you will wear (as long as you are covered) or whether you know how to sing.</p>

            <button className="max-w-fit mx-auto border-2 border-black rounded-full h-10 px-5 bg-white text-black text-sm uppercase italic">
              <Link href="/new-here">Learn more</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="container mx-auto p-10 lg:py-16 m-5">
        <div className="flex flex-col lg:flex-row-reverse p-5 gap-y-20 justify-around">
          <div className="md:basis-1/2 relative">
            <div className="relative mx-auto w-80 h-80 md:w-[31rem] md:h-[30rem] overflow-hidden shadow-md">
              <Image 
                src="https://res.cloudinary.com/ibcf/image/upload/v1723851926/IMG_0055_pzseqn.jpg"
                fill={true}
                alt="Picture of group worship"
                style={{objectFit: "cover"}}
              />
          </div>
            <div className="absolute inset-x-0 -bottom-7">
              <p className="shadow-md max-w-fit mx-auto bg-mint border-none rounded-3xl p-5 lg:text-3xl font-bold uppercase ">Our Values</p>
            </div>
          </div>

          <div className="md:basis-1/2 flex flex-col md:px-16 gap-y-14 justify-center">
            <div>
              <p><strong>Our mission</strong> is to reach out to people from different races, languages, and ethincities with the love of God and lead them to become devoted followers of Christ.</p>
              <ul className="list-disc pl-7 pt-3">
                <li>Matthew 28:18-20</li>
              </ul>
            </div>
            <div>
              <p><strong>Our vision</strong> is to see people from different nations, tribes, and languages serving and worshipping Jesus Christ in this church.</p>
              <ul className="list-disc pl-7 pt-3">
                <li>Revelation 7:9</li>
              </ul>
            </div>

            <button className="max-w-fit mx-auto border-2 border-black rounded-full h-10 px-5 bg-white text-black text-sm uppercase italic">
              <Link href="/about-us">About Us</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Our Latest Sermon */}
      <section className="bg-light-orange">
        <div className="container mx-auto p-10 m-5 lg:py-16 space-y-5 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-black">Our Latest Sermon</h1>
          
          <Link href={"/sermons"}>
            <h3 className="underline text-blue-900">View All Sermons</h3>
          </Link>

          <div className="border rounded-lg md:flex bg-white w-full">
            <iframe 
              src="https://www.youtube.com/embed/v1IVQM5DCuY?si=gmuh91bvpSxZtyz-"
              title="YouTube video player"
              frameorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen="allowfullscreen"
              loading="lazy"
              className="w-full lg:w-3/4 min-h-96 border rounded-lg"
              >
            </iframe>
            <div className="px-3 py-12 space-y-5">
              <h2 className="text-lg lg:text-2xl text-subtitle font-bold">EVERY FATHER'S NUMBER ONE ENEMY #1 - FATHER'S DAY SERMON</h2>
              <p>Pastor Doods Sente</p>
              <p>July 22, 2024</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
