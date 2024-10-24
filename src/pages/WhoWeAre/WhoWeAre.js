import { NavBar } from "../../components/NavBar/NavBar";
import "./WhoWeAre.css"
import Who_we_are_image from "../../assets/Who_we_are_photo.png"
import { LinkImages } from "../../components/LinkImages/LinkImages";
import { Footer } from "../../components/CompanyInfoBanner/Footer";

export const WhoWeAre = () => {
    return(
        <div className="WhoWeAre">
            <NavBar />
            <section className="Who-we-are-blue-section">
            <section className="Who-we-are-heading">
                        <p>Who we are</p>
                    </section>
            <section className="Who-we-are-image">
                    <img src={ Who_we_are_image } alt="Kate garden" />
                </section>
            <section className="mock-text">
                <p>Ethical childrenswear brand, Pigeon Organics, has been donating spare stock to charities and community groups for several years: 
                    "It’s a real privilege to see our high quality spare stock reaching children who desperately need it.  
                    Donating spare stock enhances, rather than threatens our brand and it is something we are always happy to talk about openly.  
                    Our donations are carefully managed by partner charities to ensure they reach those most in need".</p>
    
                <p>Before setting up Pigeon, Jane spent 14 years at the Sainsbury Family Charitable Trusts, 
                    responsible for identifying and helping to develop a range of social and environmental initiatives.  
                    This work provided broad insight into some of the most challenging issues, ranging from drug rehabilitation, 
                    homelessness and social exclusion, through to support for micro-credit and small-scale renewable energy projects 
                    in remote communities in the global south.  The common theme throughout was the need for a grassroots approach, 
                    rather than imposing top-down solutions.  When setting up Pigeon, the decision to use organic cotton right from the start, 
                    and to try and have a positive social impact wherever possible, was heavily influenced by her years at the Trusts.</p>
                
                <p>Image and paragraph: Kate…blah blah blah</p>
            </section>
            </section>
            <LinkImages />
            <Footer />
        </div>
    )
}