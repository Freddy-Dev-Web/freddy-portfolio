import Image from "next/image"
import { assets, infoList, toolsData } from "../../../assets/assets"
import Link from "next/link"

const About = () => {
  return (
    <section id="about" className="w-full px-[12%] pt-10 scroll-mt-20 ">
        <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
        <h2 className="text-center text-5xl font-Ovo">About Me</h2>

        <div className="flex flex-col items-center lg:flex-row w-full gap-20 my-10">
            <div className="w-64 sm:w-80 rounded-3xl max-w-none">
                <Image src={assets.freddy_logo} alt="user" className='rounded-3xl w-[170%]' />
            </div>
            <div className="flex-1">
                <p className="mb-10 max-w-2xl font-Ovo">
                    I am an experienced frontend Developer with over a decede of professional expertise in the field.
                    Throughout my career, I have had the privilege of collaborating with prestigious organizations,
                    contributing to their success and growth.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                    {infoList.map(({icon, title, description}, index) => (
                        <Link href="/" key={index}
                        className="border-[0.5px] border-gray-400 rounded-xl py-6 hover:bg-[#fcf4ff] hover:shadow-[4px_4px_4px_#000] hover:-translate-y-1 duration-500 cursor-pointer "
                        >
                            <Image src={icon} alt={title} className="w-7 mt-3 mx-4" />
                            <h3 className="my-4 mx-4 font-semibold text-gray-700 dark:text-blue-700">{title}</h3>
                            <p className="text-gray-600 dark:text-blue-600 text-sm mx-4">{description}</p>
                        </Link>
                    ))}
                </ul>

                <h4 className="mt-6 mb-2 text-gray-700 font-Ovo">Tools I use</h4>

                <ul className="flex items-center gap-2 sm:gap-4">
                    {toolsData.map((tool, index) => (
                        <Link href='/' key={index} 
                        className="flex items-center justify-center w-12 sm:w-14 aspect-square border boder-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:bg-[#fcf4ff]"
                        >
                            <Image src={tool} alt='Tool' className="w-8 sm:w-7"/>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default About