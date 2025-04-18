import Image from "next/image"
import { assets, serviceData } from "../../../assets/assets"
import Link from "next/link"


const Services = () => {
    return(
        <section id="services" className="w-full px-[12%] pt-20 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
        <h2 className="text-center text-5xl font-Ovo">My Services</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a frontend developer from Bangui, RCA with 1 year of experience in multiple companies like IKOUE, Orange Centrafrique and BGFI.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] my-10 gap-6">
            {serviceData.map(({icon, title, description, link}, index) => (
                <div key={index} 
                className="border boder-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_4px_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
                    <Image src={icon} alt="icon" className="w-10"/>
                    <h3 className="text-lg my-4 text-gray-700">{title}</h3>
                    <p className="text-sm text-gray-600 leading-8">
                        {description}
                    </p>
                    <Link href={link} className='flex items-center gap-2 text-sm mt-5'>
                    Read more <Image src={assets.right_arrow} alt="right_arrow" className="w-4" />
                    </Link> 
                </div>
            ))}
        </div>
    </section>
    )
}

export default Services