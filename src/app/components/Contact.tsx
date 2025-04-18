import React, { useState } from 'react'
import { assets } from '../../../assets/assets'
import Image from 'next/image'

const Contact = () => {


  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append("access_key", "17459f68-f474-4307-a1e0-ecc7a90eb9a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => setResult(""), 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);

    }
  };
  

  return (
    <section id="contact" className='w-full px-[12%] pt-10 scroll-mt-20 bg-[url("/footer_bg_color.png")] bg-no-repeat bg-center bg-[lenght:90%_[repeat(auto-fit,_minmax(200px,_1fr))]] gap-6 mt-10 mb-8'>
        <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
        <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I&apos;d love to hear from you! If you are any questions, comments, or feedback, please use the form below.
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
          <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 mt-10 mb-8'>
            <input type="text" placeholder='Enter your name' required 
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:not-dark:text-gray-700'
            name='name'
            />
            <input type="email" placeholder='Enter your email' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
            name='email'
            />
          </div>
          <textarea rows={6} placeholder='Enter your message' required 
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'
          name='message'
          >

          </textarea>

          <button type='submit'
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-blue-500 text-white hover:text-white rounded-full mx-auto hover:bg-blue-600 duration-500 cursor-pointer"
          >
          Submit now
          <Image src={assets.right_arrow_white} alt='arrow_white' className='w-4' />
          </button>
        </form>

        <p className='mt-4 text-center'>{result}</p>
    </section>
  )
}

export default Contact