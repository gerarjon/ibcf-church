export default function Home() {

  return (
    <main>

      {/* Hero */}
      <section className="bg-home-image bg-cover bg-bottom mx-auto flex flex-col items-center justify-items-center place-content-center h-svh">
        <div className="text-center mt-20 lg:mt-40 mb-6">
          <div className="text-subtitle text-xl lg:text-3xl font-black">
            Welcome to
          </div>
          <h1 className="flex flex-col text-5xl lg:text-9xl font-black italic uppercase text-white tracking-tighter">
            International <span className="not-italic -my-3 lg:-my-9">Bible Christian</span> Fellowship
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

      <section className="h-screen">
        hello
      </section>
    </main>
  )
}
