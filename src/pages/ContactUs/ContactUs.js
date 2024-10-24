import React from "react";
import ContactForm from '../../components/ContactForm/ContactForm'
import { NavBar } from "../../components/NavBar/NavBar";
import './ContactUs.css'
import { Footer } from "../../components/CompanyInfoBanner/Footer";
import { LinkImages } from "../../components/LinkImages/LinkImages";

export const ContactUs = () => {
  return (
    <div className="contact-us-page">
        <NavBar />
        <section className="contact-us-blue-section">
            <section className="contact-us-heading">
                <p>Contact Us</p>
            </section>
        <ContactForm />
        </section>
    <LinkImages />
    <Footer />
    </div>
  );
};


