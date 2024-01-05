import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';

const roboto = Roboto({ 
  weight: '400',
  subsets: ['latin'] 
})

export const metadata = {
  title: 'IBCF Church',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
