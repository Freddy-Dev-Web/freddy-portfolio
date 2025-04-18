import Image from "next/image"
import Link from "next/link"
import { assets, NAV_LINKS } from "../../../assets/assets"
import { useEffect, useRef, useState } from "react"
import ButtonDark from "./ButtonDark"



const Navbar = () => {


  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef(null)

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(scrollY > 50) {
        setIsScroll(true)
      }else {
        setIsScroll(false)
      }
    })
  },[])

  return (
    <>
    {/* <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
      <Image src={assets.header_bg_color} alt="bg-color" className="w-full" />
    </div> */}
    <nav className={`flex items-center justify-between w-full fixed px-5 py-4 z-50 lg:px-8 xl:px-[8%] ${
    isScroll
      ? "bg-gray-200 text-black backdrop-blur-lg shadow-sm dark:bg-red dark:text-white"
      : "bg-transparent"
  }`}>
          <Link href='#home'>
          <h1 className="font  text-3xl">
            Freddy<span className="text-blue-500 font-semibold">M</span>
          </h1>
        </Link>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
    isScroll
      ? "text-black dark:bg-gray-800 dark:text-white"
      : "bg-transparent"}`}>
          {NAV_LINKS.map((link) => (
            <Link 
            href={link.href} 
            key={link.key} 
            className="font-Ovo  hover:text-white px-3 hover:bg-blue-500 hover:rounded-lg dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="flex items-center gap-4">
            <ButtonDark />
          <Link 
          href="#contact" 
          className="font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 text-white bg-blue-500 hover:bg-blue-600 rounded-full ml-4">
          Contact Me
          <Image src={assets.arrow_icon} alt="Contact Icon" className="w-3"/>
          </Link>

          <button className="block md:hidden ml-3" onClick={openMenu}>
              <Image src={assets.menu_black} alt="moon-icon" className="cursor-pointer"  width={25}/>
            </button>
        </div>

        {/* ------------MOBILE MENU---------- */}

        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-blue-500 transition duration-400">
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close_black} alt="close-black" className="w-5 cursor-pointer text-white" />
          </div>
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.href} onClick={closeMenu}
            className="text-white"
            >
              {link.label}
            </Link>
          ))}
        </ul>
    </nav>
    </>
  )
}

export default Navbar