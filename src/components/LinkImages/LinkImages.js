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
                            src="/assets/mustard_link_image.png"
                            alt="Mustard Link"
                            width={500}
                            height={300}
                            className="mustard-link-image"
                            priority
                        />
                    </Link>
                    <p className="link-description">Who We Are</p>
                </div>
                <div className="link-item">
                    <Link href="/FindOutMoreBrands">
                        <Image
                            src="/assets/green_link_image.png"
                            alt="Green Link"
                            width={500}
                            height={300}
                            className="green-link-image"
                            priority
                        />
                    </Link>
                    <p className="link-description">Partner brands</p>
                </div>
                <div className="link-item">
                    <Link href="/FindOutMoreCharities">
                        <Image
                            src="/assets/orange_link_image.png"
                            alt="Orange Link"
                            width={500}
                            height={300}
                            className="orange-link-image"
                            priority
                        />
                    </Link>
                    <p className="link-description">Partner charities</p>
                </div>
            </section>
    )};