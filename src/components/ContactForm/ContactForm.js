import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./ContactForm.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        brandOrCharity: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: formData.name,
            user_type: formData.brandOrCharity,
            message: formData.message,
        };

        emailjs.send('service_q66c34c', 'template_hr9phqj', templateParams, '5NDosZfOmlbKIl_Y0')
            .then((result) => {
                console.log('Email sent:', result.text);
                setFormData({ name: '', brandOrCharity: '', message: '' });
            }, (error) => {
                console.log('Error:', error.text);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
            />
            <input 
                type="text" 
                name="brandOrCharity" 
                placeholder="Brand or Charity" 
                value={formData.brandOrCharity} 
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
            <button className="contact-form-button" type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
