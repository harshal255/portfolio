import Link from 'next/link'
import React from 'react'
import emailjs from '@emailjs/browser'
import { useState } from 'react';
const Contact = () => {

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');


  const sendEmail = (e) => {
    e.preventDefault();// 👈️ prevent page refresh
    emailjs.sendForm('service_6heycno', 'template_ija6l49', e.target, 'SE__4LDRJlaH00BXl').then((result) => {
      // console.log(result.text);
    }, (error) => {
      // console.log(error.text);
    });

    // 👇️ clear all input values in the form

    setName(' ');
    setMail(' ');
    setMessage(' ');
    setText("Thankyou for connecting with me in the social world ✌ I will give your replay as soon as possible")


  }

  const buttonStyle = 'lg:text-xl text-[1rem] px-[15px] py-[5px] lg:px-[25px] lg:py-[3.5px] mx-1 my-[7px] hover:text-purple-500 border rounded-[10px] hover:border-white border-purple-700 hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-400 before:transition-all before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300 after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100 h-10 w-60 lg:mx-[40.5%]'

  return (
    <div id='Contact' className='mp-[6rem] sm:pt-[6rem] rounded-b-[5rem] sm:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black bg-black'>
      <div className='flex justify-evenly items-center text-center '>
        <h1 className='sm:text-[4rem] text-[2rem] font-semibold title-font  text-center xl:text-start' data-aos="fade-right">Lets connect...</h1>
        <hr className='w-3/5 border-2 hidden xl:inline' data-aos="fade-left" />
      </div>
      <img src="images/Contact/map.png" alt="Contact" className='absolute rounded-t-[5rem] hidden md:inline opacity-20 z-10 ' />
      <section className="text-white body-font md:mx-5 sm:p-16 xs:p-8 md:px-6 py-12 relative z-10 ">

        <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">

          <div className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className=" md:text-4xl text-2xl mb-1  title-font  font-semibold text-center">Take a Coffee & Let{`'`}s  Start Conversation ☕</h2>
            <p className="leading-relaxed mb-5 text-gray-500 sm:text-[1.25rem] text-center">My social medias are always open.if you{`'`}ve a question or just want to say hello, I will try my best to get back to you! Feel free to contact me about any relevant opportunity or just a simple talk.</p>
            <form onSubmit={sendEmail} >
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm ">Name</label>
                <input type="text" id="name" required name="name" className="w-full bg-transparent  rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={name} onChange={event => setName(event.target.value)} />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm ">Email</label>
                <input type="email" id="email" required name="email" className="w-full bg-transparent rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={mail} onChange={event => setMail(event.target.value)} />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm ">Message</label>
                <textarea id="message" name="message" required className="w-full bg-transparent rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={message} onChange={event => setMessage(event.target.value)}></textarea>
              </div>
              <button className={buttonStyle + ` items-center ml-[2rem] xl:ml-0`}>Button</button>
              <p className="text-xl md:text-2xl text-gray-500 mt-3 text-center">{text}</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact