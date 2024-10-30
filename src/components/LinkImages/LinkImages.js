import "./LinkImages.css";
import Image from 'next/image';
import Link from 'next/link';
// import { Link } from "react-router-dom";

export const LinkImages = () => {
    return (
            <section className="link-images">
                <div className="link-item">
                    <Link href="/WhoWeAre">
                        <Image
                            src="/assets/who_we_are_icon.png"
                            alt="who we are icon"
                            width={500}
                            height={300}
                            className="who-we-are-icon"
                            priority
                        />
                    </Link>
                </div>
                <div className="link-item">
                    <Link href="/WhatWeDo">
                        <Image
                            src="/assets/what_we_do_icon.png"
                            alt="what we do icon"
                            width={500}
                            height={300}
                            className="what-we-do-icon"
                            priority
                        />
                    </Link>
                </div>
                <div className="link-item">
                    <Link href="/FindOutMoreBrands">
                        <Image
                            src="/assets/partner_brands_icon.png"
                            alt="Find Out More Brands icon"
                            width={500}
                            height={300}
                            className="partner-brands-icon"
                            priority
                        />
                    </Link>
                </div>
                <div className="link-item">
                    <Link href="/FindOutMoreCharities">
                        <Image
                            src="/assets/partner_charities_icon.png"
                            alt="Find Out More Charities icon"
                            width={500}
                            height={300}
                            className="partner-charities-icon"
                            priority
                        />
                    </Link>
                </div>
                <div className="link-item">
                    <Link href="/Press">
                        <Image
                            src="/assets/press_icon.png"
                            alt="Press icon"
                            width={500}
                            height={300}
                            className="press-icon"
                            priority
                        />
                    </Link>
                </div>
            </section>
    )};