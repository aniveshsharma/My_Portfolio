'use client';
import { assets } from '@/assets/assets'
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    const formData = new FormData(event.target);
    formData.append('access_key', 'cf0b0a94-8473-4d20-a289-795caad3e4dd');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form submitted successfully!');
      event.target.reset();
    } else {
      console.error('Error:', data);
      setResult(data.message || 'Submission failed.');
    }
  };

  return (
    <motion.div
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      {/* Section Headings */}
      <motion.h4
        className="text-center mb-2 text-lg font-ovo"
        custom={1}
        variants={fadeInUp}
      >
        Connect with me
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-ovo"
        custom={2}
        variants={fadeInUp}
      >
        Get in touch
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
        custom={3}
        variants={fadeInUp}
      >
        “Have questions, comments, or feedback? <br />
        I’d love to hear from you! Use the form below to get in touch.”
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        custom={4}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your E-mail"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>
        <textarea
          name="message"
          rows="6"
          placeholder="Enter your message..."
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></textarea>

        {/* Animated Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-8 py-3 w-max flex items-center transition gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Submit
          <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </motion.button>

        <motion.p className="mt-4 text-center" custom={5} variants={fadeInUp}>
          {result}
        </motion.p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
