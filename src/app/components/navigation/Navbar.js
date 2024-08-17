'use client' 

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState} from 'react'

const navigation = [
  { name: 'About Us', href: '/about-us'},
  { name: 'New Here', href: '/new-here'},
  { name: 'Sermons', href: '/sermons'},
  { name: 'Ministries', href: '/ministries'},
  { name: 'Give', href: '/give'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return(
    <nav className={`fixed w-screen transition-colors duration-300 ${isScrolled || !isHomePage ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
      <div className='container mx-auto my-4 flex items-center md:justify-between '>
        {/* Logo */}
        <div className="flex-1 flex mx-auto mx-0 justify-center md:justify-start">
          <Link href="/">
            <img
              alt="IBCF"
              src='https://images.squarespace-cdn.com/content/v1/5a10737da9db09ca22f3cf32/1585997798079-5K97H01ALKLGXW8M7M2W/camaGreenGlobe.png'
              className="h-12 w-auto"
            />
          </Link>
          <Link
            className="flex items-center text-2xl text-xl font-bold" 
            href='/'
          >
            <div>
              IBCF
            </div>
          </Link>
        </div>

        {/* Menu Items */}
        <div>
          <ul className="flex-1 hidden md:flex text-xl space-x-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li
                  key={item.name}
                >
                  <Link
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={classNames(
                      isHomePage && !isScrolled ? 'text-white' : 'text-black', //White on homepage, black on other pages
                      isActive ? 'bg-gray-900 text-white' : 'hover:bg-subtitle hover:text-white',
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
      </div>
    </nav>
    )
}