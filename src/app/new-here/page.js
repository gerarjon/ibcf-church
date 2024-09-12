import Image from 'next/image'

export default function NewHere() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-5 mx-12 m-5">
        <div className="flex">

          {/* Title */}
          <div className="basis-3/5 flex flex-col">
            <h3 className="text-lg lg:text-3xl text-subtitle font-black">New here?</h3>
            <h1 className="text-4xl lg:text-7xl text-title flex flex-col uppercase font-black">Plan a Visit <span className="italic -my-3 lg:-my-5">Or</span> Learn what to <span className="-my-3 lg:-my-5">expect</span></h1>
          </div>

          {/* Images */}
          <div className="basis-2/5 max-sm:hidden grid grid-rows-2 grid-flow-col gap-4 max-h-64">
            <div className='row-span-2 relative'>
              <Image
                src="https://res.cloudinary.com/ibcf/image/upload/v1723851932/IMG_0070_x3xp0q.jpg"
                alt="Picture of pastor"
                fill={true}
                className="w-full h-full object-cover"
              />
            </div>
            <div className='relative'>
              <Image
                src="https://res.cloudinary.com/ibcf/image/upload/v1723851707/IMG_0446_xlvpww.jpg"
                alt="Picture of church playground"
                fill={true}
                className="w-full h-full object-cover"
              />
            </div>
            <div className='relative'>
              <Image
                src="https://res.cloudinary.com/ibcf/image/upload/v1723851936/IMG_0082_ck25qb.jpg"
                alt="Picture of church having food"
                fill={true}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>  
      </div>

      {/* Welcome to our church */}
      <section className="container mx-auto px-5 mt-20">
        <div className="flex">
          <div className="basis-2/5 flex flex-col space-y-5 text-lg leading-relaxed">
            <h3 className="flex flex-col text-4xl uppercase italic font-bold">Welcome <span>to</span> Our Church</h3>

            <p>Whether you&apos;re visiting, exploring faith for the first  time, returning to church or looking for a place to call home, you&apos;re so welcome!</p>

            <p>Connect with us outside of church too!</p>

            <div className="display flex space-x-3"><a href="#">fb</a><a href="#">yt</a></div>
          </div>
          
          <div>

          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className='bg-light-orange'>
        <div className='container mx-auto px-36 py-20 mt-20'>
          <div className='grid place-content-center pb-10'>
            <h1 className='text-3xl uppercase font-black'>What to expect</h1>
          </div>

          <div className='flex flex-col lg:flex-row gap-10'>
            <div className='lg:basis-1/3'>
              <h3 className='pb-5 text-xl text-center font-bold'>Casual Dress Wear</h3>

              <p className='text-lg'>You don&apos;t have to worry about what you wear as long as you&apos;re with us.</p>
            </div>

            <div className='lg:basis-1/3'>
              <h3 className='pb-5 text-xl text-center font-bold'>Cordial Services</h3>

              <p className='text-lg'>Our services start at 10:30 am and last for roughly 1 hour long. Included during these services are prayer praises and requests, joyful worship music, and a powerful sermon.</p>
            </div>

            <div className='lg:basis-1/3'>
              <h3 className='pb-5 text-xl text-center font-bold'>For the Kids</h3>

              <p className='pb-5 text-lg'>From infants to elementary age, we have done our best to help your children have  a blast while learning about Jesus. We have created a fun and safe environment for them to learn and grow with Jesus.</p>

              <p className='text-lg'>We also have a separate room to take care of your infant while being able to listen to the Sunday message.</p>
            </div>
          </div>
        </div>
        
      </section>
    </main>
  )
}
