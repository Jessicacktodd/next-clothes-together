import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/CompanyInfoBanner/Footer";
import Image from 'next/image';
import { LinkImages } from "../components/LinkImages/LinkImages";
import "./index.css"

export async function getStaticProps() {
    return {
        props: {}, 
    };
}

export const LandingPage = () => {
    return (
        <>
        <div className="landingPage">
            <NavBar />
            <section className="Nile-blue-section">
            <section className="quote">
                    <p>Reducing clothing waste....tackling clothing insecurity</p>
                </section>
                <Image src="/assets/mock_photo.png" alt="mock" className="section-image" width={800} height={600} priority />
                <div className="text-block">
                    <p>According to the Joseph Rowntree foundation, 1 in 3 children in the UK live in poverty. From
                        the moment a baby is born, their life chances are largely determined by their postcode and
                        the income of their parents.</p>
                    <p>Clothing insecurity is a little discussed but huge problem in the UK. While it might not be
                        considered the main priority, having access to suitable clothing makes a huge difference to a
                        child’s life. At a time when clothing brands are under increasing pressure to demonstrate
                        greater sustainability, Clothes Together is linking brands with charities to redirect spare
                        stock to children living with clothing insecurity.</p>
                    <p>Clothing insecurity “<em>doesn’t simply mean they are unable to afford garments they want, but
                        rather that they are unable to access items that make everyday life (e.g school….social
                        integration, leaving the house) possible</em>” (Heather Snowden, writing in British Vogue, June
                        2024).</p>
                </div>
        </section>
        <LinkImages />
        <div>
        <Footer />
        </div>
        </div>
        </>
    )};

export default LandingPage