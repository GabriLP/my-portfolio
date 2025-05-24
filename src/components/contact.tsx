"use client";

import React, { useState, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import AnimatedHeading from './ui/animated-heading';
import AnimatedText from './ui/animated-words';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const onSubmit: SubmitHandler<FormData> = async () => {
    setIsLoading(true);
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_TEMPLATE_ID || '',
        form.current!,
      );
      setSent(true);
      form.current?.reset();
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id='contact' className='p-8 lg:p-16 h-screen' aria-label="Contact Section">
      <AnimatedHeading tag='h2' className='unselectable text-heading-2 font-display overflow-hidden py-8'>
        <AnimatedText text="Let's build together!" />
      </AnimatedHeading>
      <form ref={form} onSubmit={handleSubmit(onSubmit)} className="md:w-2/3 space-y-4  border border-border p-6 rounded-md shadow-md">
        {sent && <div className="text-green-500">Message sent successfully!</div>}
        {error && <div className="text-red-500">Failed to send the message.</div>}
        <div className="grid gap-4">
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 border border-border rounded-md  focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Name"
            aria-label="Name"
            aria-invalid={!!errors.name}
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          <input
            {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
            className="w-full p-3 border border-border rounded-md  focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Email"
            aria-label="Email"
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          <textarea
            {...register("message", { required: "Message is required" })}
            className="w-full p-3 border border-border rounded-md  focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Message"
            aria-label="Message"
            rows={4}
            aria-invalid={!!errors.message}
          />
          {errors.message && <span className="text-red-500">{errors.message.message}</span>}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="font-semibold mt-4 w-15 py-2 bg-primary hover:bg-secondary rounded-md transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;