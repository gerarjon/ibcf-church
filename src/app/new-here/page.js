import Image from 'next/image'

export default function NewHere() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-5 m-5">
        <div className="flex">
          <div className="basis-3/5 flex flex-col">
            <h3 className="text-lg lg:text-3xl text-subtitle font-black">New here?</h3>
            <h1 className="text-4xl lg:text-7xl text-title flex flex-col uppercase font-black">Plan a Visit <span className="italic -my-3 lg:-my-5">Or</span> Learn what to <span className="-my-3 lg:-my-5">expect</span></h1>
          </div>

          <div className="basis-2/5 max-sm:hidden grid grid-rows-2 grid-flow-col gap-4 max-h-64">
            <div className="row-span-2">
              <img
                src="https://res.cloudinary.com/ibcf/image/upload/v1723851932/IMG_0070_x3xp0q.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <img
                src="https://res.cloudinary.com/ibcf/image/upload/v1723851707/IMG_0446_xlvpww.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <img
                src="https://res.cloudinary.com/ibcf/image/upload/v1723851936/IMG_0082_ck25qb.jpg"
                alt="Picture of church having food"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
      </div>
    </main>
  )
}
