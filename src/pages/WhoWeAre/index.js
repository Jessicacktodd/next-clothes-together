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
                    <p>Ethical childrenswear brand, Pigeon Organics, has been donating spare stock to charities and community groups for several years: 
                        "It’s a real privilege to see our high-quality spare stock reaching children who desperately need it.  
                        Donating spare stock enhances, rather than threatens, our brand, and it is something we are always happy to talk about openly.
                        Our donations are carefully managed by partner charities to ensure they reach those most in need".
                    </p>
                    <p>Before setting up Pigeon, Jane spent 14 years at the Sainsbury Family Charitable Trusts...</p>
                    <p>Image and paragraph: Kate…blah blah blah</p>
                </section>
            </section>
            <LinkImages />
            <Footer />
        </div>
    );
};

export default WhoWeAre;
