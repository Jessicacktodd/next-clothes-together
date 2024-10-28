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
                            src="/assets/red_icon.png"
                            alt="who we are icon"
                            width={500}
                            height={300}
                            className="red-icon"
                            priority
                        />
                    </Link>
                </div>
                <div className="link-item">
                    <Link href="/WhatWeDo">
                        <Image
                            src="/assets/mustard_icon.png"
                            alt="what we do icon"
                            width={500}
                            height={300}
                            className="mustard-icon"
                            priority
                        />
                    </Link>
                </div>
                <div className="link-item">
                    <Link href="/FindOutMoreBrands">
                        <Image
                            src="/assets/green_icon.png"
                            alt="Find Out More Brands icon"
                            width={500}
                            height={300}
                            className="green-icon"
                            priority
                        />
                    </Link>
                </div>
                <div className="link-item">
                    <Link href="/FindOutMoreCharities">
                        <Image
                            src="/assets/mint_icon.png"
                            alt="Find Out More Charities icon"
                            width={500}
                            height={300}
                            className="mint-icon"
                            priority
                        />
                    </Link>
                </div>
                <div className="link-item">
                    <Link href="/Press">
                        <Image
                            src="/assets/blue_icon.png"
                            alt="Press icon"
                            width={500}
                            height={300}
                            className="blue-icon"
                            priority
                        />
                    </Link>
                </div>
            </section>
    )};