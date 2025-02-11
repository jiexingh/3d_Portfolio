import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name:'',
    email:'',
    message:''
  });
  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const resetForm =()=>{
    setForm({
      name:'',
      email:'',
      message:''
    })
  }

  const handleSubmit = (e)=> {
    e.preventDefault();

    setLoading(true);

    // Jqq9AvwIuSjoMiA5c
    // template_1t76uxq
    // service_rojcplm

    emailjs.send(
      'test',
      'test',
      {
        form_name: form.name,
        to_name: 'HunterHan',
        form_email: form.email,
        to_email:'',
        message: form.message
      },
      'test'
    )
    .then(()=>{
        setLoading(false);
        alert("Thank you. I will get back to you as soom as possible.")
        
        resetForm();
      },
      ()=>{
        setLoading(false);
        alert("Sorry. please try to cancat with Wechat.")
        
        resetForm();
      })
  }

  return (
    <div className={`xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <p className={styles.sectionHeadText}>Contact.</p>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?" className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows="7"
              name="message" 
              value={form.message} 
              onChange={handleChange}
              placeholder="What do you want to say?"
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
          </label>

          <button
           type='submit'
            className="
            bg-tertiary
              py-3 px-8 outline-none w-fit
              shadow-md shadow-primary 
              rounded-xl">
            {loading ? 'Sending...':'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");