import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/CompanyInfoBanner/Footer";

import { LinkImages } from "../components/LinkImages/LinkImages";
import "./index.css"



export const LandingPage = () => {
    return (
        <>
        <div className="landingPage">
            <NavBar />
            <section className="Nile-blue-section">
            <section className="quote">
                    <p>Reducing clothing waste....tackling clothing insecurity</p>
                </section>
                <img src="/assets/mock_photo.png" alt="mock" className="section-image"></img>
                <div className="text-block">
                    <p>From the moment a baby is born, their life chances are largely determined by the postcode and the income of their parents. According to the Joseph Rowntree foundation, 30% of children in the UK live in poverty.<br></br>
                    <br></br>We believe that new clothes can make a real difference to children’s lives.  Clothing insecurity is little discussed but a huge problem in the UK.  ‘That doesn’t simply mean they are unable to afford garments they want, 
                    but rather that they are unable to access items that make everyday life (e.g school….social integration, leaving the house) possible’ (Heather Snowden, writing in British Vogue)<br></br>
                    <br></br>At a time when fashion brands are under increasing pressure to demonstrate greater sustainabilily, Clothes Together is linking clothing brands with charities to redirect spare stock to children living with clothing insecurity.</p>
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