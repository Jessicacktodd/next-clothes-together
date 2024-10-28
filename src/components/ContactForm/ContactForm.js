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
            organisation_name: formData.organisation_name,
            user_type: formData.brandOrCharity,
            from_email: formData.email,
            message: formData.message,
        };

        emailjs.send('service_q66c34c', 'template_hr9phqj', templateParams, '5NDosZfOmlbKIl_Y0')
            .then((result) => {
                console.log('Email sent:', result.text);
                setFormData({ name: '', email: '', organisation_name: '', brandOrCharity: '', message: '' });
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
                name="organisation_name" 
                placeholder="Organisation Name" 
                value={formData.organisation_name} 
                onChange={handleChange} 
            />

            <select
                className={formData.brandOrCharity ? "dropdown" : "dropdown placeholder"} 
                name="brandOrCharity"
                value={formData.brandOrCharity}
                onChange={handleChange}
                required
            >
                <option value="" disabled>Select</option>
                <option value="Brand">Brand</option>
                <option value="Charity">Charity</option>
                <option value="Press">Press</option>
                <option value="Other">Other</option>
            </select>
            <input
                type="text"
                name='email'
                placeholder='Your Email'
                value={formData.email}
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
