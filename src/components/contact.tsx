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

    const lastSentTimestamp = localStorage.getItem('lastSentTimestamp');
    const currentTime = new Date().getTime();
    
    if (lastSentTimestamp && currentTime - parseInt(lastSentTimestamp) < 3600000) {
      setError(true);
      setTimeout(() => setError(false), 5000);
      return;
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
      localStorage.setItem('lastSentTimestamp', currentTime.toString());
    }, () => {
      setError(true);
      setTimeout(() => setError(false), 5000);
    });
  };

  return (
    <section id='contact' className='p-8 lg:p-16 bg-background'>
      <AnimatedHeading tag='h2' className='unselectable text-heading-2 font-display overflow-hidden py-8'>
        <AnimatedText text="Let's build together!" />
      </AnimatedHeading>
      <form ref={form} onSubmit={sendEmail} className="md:w-2/3 space-y-4 bg-background border border-border p-6 rounded-md shadow-md">
        {sent && <div className="text-green-500 transition duration-500 ease-in-out transform scale-100">Message sent successfully!</div>}
        {error && <div className="text-red-500 transition duration-500 ease-in-out transform scale-100">Failed to send the message.</div>}
        <div className="grid gap-4">
          <input className="w-full p-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" type="text" name="user_name" placeholder="Name" aria-label="Name" required />
          <input className="w-full p-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" type="email" name="user_email" placeholder="Email" aria-label="Email" required />
          <textarea className="w-full p-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" name="message" placeholder="Message" aria-label="Message" rows={4} required></textarea>
        </div>
        <div className="flex justify-end">
          <button className="font-semibold mt-4 w-15 py-2 bg-primary hover:bg-secondary text-foreground rounded-md transition duration-300" type="submit">Send</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;