import Image from "next/image"
import { assets } from "../../../assets/assets"
import Link from "next/link"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";





const Footer = () => {
  return (
    <footer className="py-10">
        <div>
        <Link href='/' className="text-center">
        <h1 className="font  text-4xl mb-4">
            Freddy<span className="text-blue-500 font-semibold">M</span>
          </h1>
        </Link>
        <div className="w-max flex items-center gap-2 mx-auto">
        <Image src={assets.mail_icon} alt="logo" className="w-6"/>
        freddymandaba@gmail.com
        </div>
        </div>

        <div className="text-centr sm:flex items-center justify-between border-t boder-gray-400 mx-[10%] mt-12 py-6">
            <p>&copy; 2025 Freddy MANDABA. All rights reserved.</p>
            <div className="flex items-center justify-center text-lg mt-4 sm:mt-0 gap-5">
                <Link target='blank' 
                className="border-[0.5px] border-gray-400 rounded-xl py-2 px-2 hover:bg-black hover:shadow-[4px_4px_4px_#000] hover:-translate-y-1 duration-500 cursor-pointer" href='/'>
                <FaGithub />
                </Link>
                <Link target='blank' 
                className="border-[0.5px] border-gray-400 rounded-xl py-2 px-2 hover:bg-blue-500 hover:shadow-[4px_4px_4px_#000] hover:-translate-y-1 duration-500 cursor-pointer" href='/'>
                <FaLinkedin />
                </Link>
                <Link target='blank' 
                className="border-[0.5px] border-gray-400 rounded-xl py-2 px-2 hover:bg-black hover:shadow-[4px_4px_4px_#000] hover:-translate-y-1 duration-500 cursor-pointer" href='/'>
                <FaXTwitter />
                </Link>
                <Link target="blank" 
                className="border-[0.5px] border-gray-400 rounded-xl py-2 px-2 hover:bg-orange-50 hover:shadow-[4px_4px_4px_#000] hover:-translate-y-1 duration-500 cursor-pointer" href='/'>
                <FaInstagram />
                </Link>
                <Link target="blank" 
                className="border-[0.5px] border-gray-400 rounded-xl py-2 px-2 hover:bg-blue-500 hover:shadow-[4px_4px_4px_#000] hover:-translate-y-1 duration-500 cursor-pointer" href='/'>
                <FaFacebook />
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer