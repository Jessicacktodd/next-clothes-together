import { NavBar } from "../../components/NavBar/NavBar";
import "./WhoWeAre.css";
import Image from 'next/image';
import { LinkImages } from "../../components/LinkImages/LinkImages";
import { Footer } from "../../components/CompanyInfoBanner/Footer";

export async function getStaticProps() {
    return {
        props: {}, 
    };
}

export const WhoWeAre = () => {
    return (
        <div className="WhoWeAre">
            <NavBar />
            <section className="Who-we-are-blue-section">
                <section className="Who-we-are-heading">
                    <p>Who we are</p>
                </section>
                <section className="Who-we-are-image">
                    <Image src="/assets/Who_we_are_photo.png" alt="Kate garden" width={800} height={600} priority/>
                </section>
                <section className="mock-text">
                <p>Clothes Together was the idea of Pigeon Organics, a small ethical children’s clothing brand, 
                and we are delighted to have been joined by six founding partner brands (see link below).</p>

                <p>Both Jane and Kate (of Pigeon Organics) have experience in the volunteering and charitable sectors. 
                    Jane spent 14 years at the Sainsbury Family Charitable Trusts working on a wide range of social and environmental initiatives; 
                    Kate worked as a Project Manager for the Body Shop Romania Relief project and also spent a few years volunteering 
                    as a befriender to women seeking asylum being held at Yarlswood Immigration Removal Centre.</p>
                    
                <p>When setting up Pigeon Organics, the decision to try and have a positive social impact wherever possible 
                    was heavily influenced by our experience in these sectors. 
                    We are now delighted to be working with so many inspirational charities and likeminded brands, 
                    all of whom are trying to make a difference.</p>
                </section>
            </section>
            <LinkImages />
            <Footer />
        </div>
    );
};

export default WhoWeAre;
