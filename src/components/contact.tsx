import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.currentTarget, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setSent(true);
        setTimeout(() => setSent(false), 5000);
      }, (error) => {
        console.log(error.text);
        setError(true);
        setTimeout(() => setError(false), 5000);
      });
  };

  return (
    <form onSubmit={sendEmail} className="space-y-4">
      {sent && <div className="text-green-500">Message sent successfully!</div>}
      {error && <div className="text-red-500">Failed to send the message.</div>}
      <input className="w-full p-2 border border-gray-300 rounded-md" type="text" name="user_name" placeholder="Name" required />
      <input className="w-full p-2 border border-gray-300 rounded-md" type="email" name="user_email" placeholder="Email" required />
      <textarea className="w-full p-2 border border-gray-300 rounded-md" name="message" placeholder="Message" rows={4} required></textarea>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md" type="submit">Send</button>
    </form>
  );
};

export default ContactForm;