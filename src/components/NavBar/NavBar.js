import { useRouter } from "next/router";
import "./NavBar.css"
import Link from 'next/link';

export const NavBar = () => {
    const router = useRouter();
    return (
        <div id="navbar-div-container">
            <header className="header">
                <div className="social-links">
                    <a href="https://www.instagram.com/pigeonorganics/" target="_blank" rel="noreferrer">
                        <img src="/assets/instagram_logo.png" alt="Instagram" className="social-icon" />
                    </a>
                    <a href="mailto:info@pigeonorganics.com">
                        <img src="/assets/mail_icon.png" alt="Mail" className="social-icon" />
                    </a>
                </div>
                
                <div className="right-side-links">
                    <nav>
                        <Link href="/ContactUs">Contact Us</Link>
                    </nav>
                </div>
            </header>
           
            <div className="header-section">
                <Link href="/">
                    <img src="/assets/clothes_together_logo.png" alt="clothes together logo" className="clothes-together-logo" />
                </Link>
                <nav className="spread-out-links">
                    <Link href="/WhoWeAre" className={router.pathname === '/WhoWeAre' ? 'active-link' : ''}>WHO WE ARE</Link>
                    <Link href="/WhatWeDo" className={router.pathname === '/WhatWeDo' ? 'active-link' : ''}>WHAT WE DO</Link>
                    <Link href="/FindOutMoreBrands"className={router.pathname === '/FindOutMoreBrands' ? 'active-link' : ''}>PARTNER BRANDS</Link>
                    <Link href="/FindOutMoreCharities" className={router.pathname === '/FindOutMoreCharities' ? 'active-link' : ''}>PARTNER CHARITIES</Link>
                    <Link href="/Press" className={router.pathname === '/Press' ? 'active-link' : ''}>PRESS</Link>
                </nav>
            </div>
        </div>
    );
};
