import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedHeading from './ui/animated-heading';
import AnimatedText from './ui/animated-words';

const ContactForm: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if the user has sent a message in the last hour
    const lastSentTimestamp = localStorage.getItem('lastSentTimestamp');
    const currentTime = new Date().getTime();
    
    if (lastSentTimestamp && currentTime - parseInt(lastSentTimestamp) < 3600000) { // 3600000 ms = 1 hour
      setError(true);
      setTimeout(() => setError(false), 5000);
      return; // Prevent the form from being submitted
    }

    if (!form.current) return;

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID || '', 
      process.env.NEXT_PUBLIC_TEMPLATE_ID || '', 
      form.current,
    ).then(() => {
      setSent(true);
      form.current?.reset();
      setTimeout(() => setSent(false), 5000);
      // Store the current timestamp in localStorage
      localStorage.setItem('lastSentTimestamp', currentTime.toString());
    }, () => {
      setError(true);
      setTimeout(() => setError(false), 5000);
    });
  };

  return (
    <section id='Contact me' className='p-[4%]'>
      <AnimatedHeading tag='h2'className='text-heading-2 font-anton overflow-hidden py-8'>
        <AnimatedText text='Let&apos;s build together!' />
      </AnimatedHeading>
      <form ref={form} onSubmit={sendEmail} className="space-y-4 bg-zinc-900 p-6 rounded-md shadow-md">
        {sent && <div className="text-green-500 transition duration-500 ease-in-out transform scale-100">Message sent successfully!</div>}
        {error && <div className="text-red-500 transition duration-500 ease-in-out transform scale-100">Failed to send the message.</div>}
        <div className="grid gap-4">
          <input className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="user_name" placeholder="Name" aria-label="Name" required />
          <input className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" name="user_email" placeholder="Email" aria-label="Email" required />
          <textarea className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500" name="message" placeholder="Message" aria-label="Message" rows={4} required></textarea>
        </div>
        <button className="font-semibold mt-4 w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300" type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;