import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import '../Contact/contact.css';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify functions
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Use EmailJS to send the email
    emailjs.send('service_i17rrfp', 'template_z5g5xff', formData, 'a5dBr1JQ1-HlkFmgB')
      .then((response) => {
        console.log('Email sent successfully:', response.text);
        toast.success('Email sent successfully!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000, // Auto close after 3 seconds
        });
        // Reset the form after successful submission
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
        console.log('Failed to send email:', error);
      });
  };

  return (
    <div className='contact'  id="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out to me for any questions or opportunities</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;