import "./NavBar.css"
import Link from 'next/link';

export const NavBar = () => {
    return (
        <div id="navbar-div-container">
            <header className="header">
                <div className="social-links">
                    <a href="https://www.instagram.com/pigeonorganics/" target="_blank" rel="noreferrer">
                        <img src="/assets/instagram_logo.png" alt="Instagram" className="social-icon" />
                    </a>
                    <a href="https://www.facebook.com/pigeonorganics/" target="_blank" rel="noreferrer">
                        <img src="/assets/facebook_logo.png" alt="Facebook" className="social-icon" />
                    </a>
                    <a href="mailto:info@pigeonorganics.com">
                        <img src="/assets/mail_icon.png" alt="Mail" className="social-icon" />
                    </a>
                </div>
                
                <div className="right-side-links">
                    <nav>
                        <Link href="/FindOutMoreBrands">FIND OUT MORE (BRANDS)</Link>
                        <Link href="/FindOutMoreCharities">FIND OUT MORE (CHARITIES)</Link>
                    </nav>
                </div>
            </header>
           
            <div className="header-section">
                <Link href="/">
                    <img src="/assets/clothes_together_logo.png" alt="clothes together logo" className="clothes-together-logo" />
                </Link>
                <nav className="spread-out-links">
                    <Link href="/WhoWeAre">Who we are</Link>
                    <Link href="/WhatWeDo">What we do</Link>
                    <Link href="/FindOutMoreBrands">Partner brands</Link>
                    <Link href="/FindOutMoreCharities">Partner charities</Link>
                    <Link href="/Press">Press</Link>
                </nav>
            </div>
        </div>
    );
};
