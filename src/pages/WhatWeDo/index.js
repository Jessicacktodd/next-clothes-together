import { NavBar } from "../../components/NavBar/NavBar";
import "./WhatWeDo.css"
// import what_we_do_image from "./../../assets/what_we_do_image.png"
import { LinkImages } from "../../components/LinkImages/LinkImages";
import { Footer } from "../../components/CompanyInfoBanner/Footer";
import Image from 'next/image';
import what_we_do_image from '../../../public/assets/what_we_do_image.png';

export async function getStaticProps() {
    return {
        props: {}, 
    };
}

export const WhatWeDo = () => {
    return(
        <div className="whatWeDo">
            <NavBar />
            <section className="what-we-do-blue-section">
                <section className="what-we-do-heading">
                    <p>What we do</p>
                </section>
                <section className="what-we-do-image">
                <Image src={what_we_do_image} alt="What We Do" priority/>
                </section>
                <section className="what-we-do-text">
                    <p>We believe that many clothing brands, large and small, have some spare or redundant stock,
                    some of which might never be put to good use.</p>

                    <p>Working with frontline charities, Clothes Together aims to channel this stock to children
                    living with clothing insecurity, based on expressed needs. We stress that donations are
                    needs led – rather than simply providing an outlet for donations of random stock. This is
                    central to our approach. Clothes Together therefore provides brands with a simple way to
                    reduce clothing waste and encourage sustainability, whilst meeting a huge social need.</p>

                    <p>Many clothing brands are also experimenting with rental and re-sale initiatives as part of
                    their circular fashion activities. We believe that Clothes Together completes the circle, by
                    supporting families for whom rental and re-sale might be out of reach.</p>

                    <p><strong>Not only does Clothes Together help the environment by reducing clothing waste, but also
                    supports families in real need and in particular, children living with clothing insecurity.</strong></p>

                    <p><em>“It’s a real privilege to see our high-quality spare stock reaching children who desperately
                    need it” (Pigeon Organics).</em></p>

                </section>
            </section>
            <LinkImages />
            <Footer />
        </div>
    )
}

export default WhatWeDo