import React from 'react'
import { assets, workData } from '../../../assets/assets'
import Image from 'next/image'
import Link from 'next/link'

 const Work = () => {
  return (
    <section id="work" className="w-full px-[12%] pt-20 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
        <h2 className="text-center text-5xl font-Ovo">My latest work</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in full-stack development.
        </p>

        <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] my-10 gap-5'>
            {workData.map((project, index) => (
                <div key={index} 
                className={` aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group`}
                style={{backgroundImage: `url(${project.bgImage})`}}
                >
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                 <div>
                    <h2 className='font-semibold dark:text-black'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_2px_#000] group-hover:bg-blue-500 transition'>
                    <Image src={assets.send_icon} alt='send_icon' className='w-5' />
                </div>
                </div>
                </div>
            ))}
        </div>

        <Link href="" 
        className="flex items-center justify-center w-max gap-2 text-white border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-10 bg-blue-500 hover:bg-blue-700 duration-500">
            Show more <Image src={assets.right_arrow_bold} alt='right arrow' className="w-4 text-white" />
        </Link>
        </section>
        )}

export default Work