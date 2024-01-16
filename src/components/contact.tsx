import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button, Box, Alert } from '@mui/material';

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
    <Box component="form" onSubmit={sendEmail}>
      {sent && <Alert severity="success">Message sent successfully!</Alert>}
      {error && <Alert severity="error">Failed to send the message.</Alert>}
      <TextField label="Name" name="user_name" variant="outlined" fullWidth margin="normal" required />
      <TextField label="Email" name="user_email" variant="outlined" fullWidth margin="normal" required />
      <TextField label="Message" name="message" variant="outlined" fullWidth margin="normal" multiline rows={4} required />
      <Button type="submit" variant="contained" color="primary">Send</Button>
    </Box>
  );
};

export default ContactForm;
