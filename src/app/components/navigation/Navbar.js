import Link from 'next/link'

const navigation = [
  { name: 'About Us', href: '/about-us', current: false },
  { name: 'New Here', href: 'new-here', current: false },
  { name: 'Sermons', href: '/sermons', current: false },
  { name: 'Ministries', href: '/ministries', current: false },
  { name: 'Give', href: 'give', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return(
    <nav className="container mx-auto my-4 flex items-center justify-between">
      <div className="flex">
        <div>
          <Link href="/">
            <img
              alt="IBCF"
              src='https://images.squarespace-cdn.com/content/v1/5a10737da9db09ca22f3cf32/1585997798079-5K97H01ALKLGXW8M7M2W/camaGreenGlobe.png'
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center text-xl font-bold">
          IBCF
        </div>
      </div>
      <div>
        <ul className="flex text-lg space-x-4">
          {navigation.map((item) => {
            return (
              <li>
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? page : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 font-semibold',
                  )}
                >
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
    )
}