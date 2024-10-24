import { Footer } from "../../components/CompanyInfoBanner/Footer";
import { LinkImages } from "../../components/LinkImages/LinkImages";
import { NavBar } from "../../components/NavBar/NavBar";
import "./FindOutMoreCharities.css"
import Baby_Bank_Alliance from "../../assets/Baby_Bank_Alliance.png"
import Baby_Basics_Milton_Keynes from "../../assets/Baby_Basics_Milton_Keynes.png"
import Baby_Bank_Network_Bristol  from "../../assets/Baby_Bank_Network_Bristol.png"
import Berwickshire_Swap from "../../assets/Berwickshire_Swap.png"
import Gloucestershire_Bundles from "../../assets/Gloucestershire_Bundles.png"
import Little_Village_Logo from "../../assets/Little_Village_Logo.png"
import The_Cowshed_logo from "../../assets/The_Cowshed_logo.png"

export const FindOutMoreCharities = () => {
    return(
        <div className="FindOutMoreCharities">
            <NavBar />
            <section className="Charities-blue-section">
                <section className="charities-heading">
                    <p>Partner charities</p>
                </section>
                <section className="charity-logos">
                        <div className="charities-first-row">
                            <a href="https://babybankalliance.org/">
                                <img src={Baby_Bank_Alliance} alt="baby bank alliance" className="baby-bank-alliance"></img></a>
                            <a href="https://www.babybasicsmk.org.uk/">
                                <img src={Baby_Basics_Milton_Keynes} alt="Baby Basics MK" className="baby-basics-milton-keynes"></img></a>
                            <a href="https://www.babybanknetwork.com/">
                                <img src={Baby_Bank_Network_Bristol} alt="Baby bank network bristol" className="baby-bank-network-bristol"></img></a>
                            <a href="https://www.berwickshireswap.co.uk/">
                                <img src={Berwickshire_Swap} alt="Berwickshire swap" className="berwickshire-swap"></img></a>
                        </div>
                        
                        <div className="charities-second-row">
                            <a href="https://www.gloucestershirebundles.org/">
                                <img src={Gloucestershire_Bundles} alt="Gloucestershire bundles" className="gloucestershire-bundles"></img></a>
                            <a href="https://littlevillagehq.org/">
                                <img src={Little_Village_Logo } alt="Little village " className="Little village "></img></a>
                            <a href="https://www.thecowshed.org/">
                                <img src={The_Cowshed_logo } alt="The cowshed " className="the-cowshed "></img></a>
                        </div>
                    </section>
            </section>
            <LinkImages />
            <Footer />
        </div>
    )
}