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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <nav className={`fixed w-screen transition-colors duration-300 ${isScrolled || !isHomePage ? 'bg-main text-black' : 'bg-transparent text-white'}`}>
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Desktop Menu */}
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
                      isActive ? 'bg-gray-900 text-white' : 'transition duration-200 ease-out hover:bg-subtitle hover:text-white hover:ease-in',
                      'rounded-md px-3 py-2 font-semibold',
                  )}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile Menu */}
          <div
          className={classNames(
            mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none',
            'md:hidden absolute top-16 left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform'
          )}
          >
            <ul className="flex flex-col space-y-2 p-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className="text-black"
                      onClick={() => setMobileMenuOpen(false)} // Close mobile menu on link click
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
    )
}
