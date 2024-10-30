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
                    <p>Clothes Together aims to provide families in need with high quality clothing, based on their
expressed needs, rather than simply making charitable donations.  At the same time, it
provides brands with a simple way to reduce waste and encourage sustainability. 
The starting point is our belief that many brands (large and small) have some spare or
redundant stock, some of which will never be put to good use. The choice is to sell it all off
at knock down prices or retain some of it to give it to people for whom it makes a real
difference.<br></br>
<br></br>For many years Pigeon has been donating our spare stock to charities on a fairly ad-hoc
basis (women&#39;s refuges, Homestart, various Baby Bank groups and networks, refugee
charities both overseas and UK, and other amazing front line charities). We are a tiny
company but we&#39;ve donated several pallets over time. All the charities/agencies we work
with are efficient and professional in the way they handle the stock. When we started, we
worried about brand integrity. This no longer worries us – we are really delighted if families
in need receive high quality clothing that they might not otherwise have access to and we
are confident that we are not undermining our own brand, or our stockists&#39; businesses. The
need is huge and when we receive feedback, it&#39;s incredible to know the difference it can
make. All the agencies we have spoken to tell us of a growing need.<br></br>
<br></br>Many brands, large and small, are now experimenting with rental and re-sale initiatives as
part of their circular fashion activities. We would like to think that Clothes Together
completes the circle, by supporting families for whom rental and re-sale might be out of
reach. Not only does it help the environment by reducing waste, but also supports families
in real need.</p>
                </section>
            </section>
            <LinkImages />
            <Footer />
        </div>
    )
}

export default WhatWeDo