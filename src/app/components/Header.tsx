import Image from "next/image"
import { assets } from "../../../assets/assets"
import Link from "next/link"

const Header = () => {
  return (
    <header className="flex flex-col pt-25 items-center justify-center gap-3 w-11/12 max-w-3xl text-center mx-auto h-screen ">
        <div>
            <Image src={assets.freddy_photo} alt="profile" className="rounded-full w-35" />
        </div>
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
            Hi ! I&apos;m Freddy MANDABA 
            <Image src={assets.hand_icon} alt="hand" className="w-8" />
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
            Frontend web developer based in RCA.
        </h1>
        <p className="max-w-2xl mx-auto font-Ovo">
            I am a frontend developer from Bangui RCA with 1 year of experience in multiple companies like IKOUE, Orange Centrafrique and BGFI.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link href="#contact"
            className="flex items-center gap-2 px-10 py-3 border border-white rounded-full 
             bg-blue-500 text-white dark:text-white dark:border-gray-700
             hover:bg-blue-600 hover:dark:bg-[#220033]"
            >
                Contact Me
                <Image src={assets.right_arrow_white} alt="right arrow" className="w-4"/>
            </Link>

            <Link href="/sample-resume.pdf" download
            className="flex items-center gap-2 px-10  py-3 border boder-gray-500  rounded-full"
            >
                My CV
                <Image src={assets.download_icon} alt="right arrow" className="w-4"/>
            </Link>
        </div>
    </header>
  )
}

export default Header