import { Footer } from "../../components/CompanyInfoBanner/Footer";
import { LinkImages } from "../../components/LinkImages/LinkImages";
import { NavBar } from "../../components/NavBar/NavBar";
import "./FindOutMoreCharities.css";

export const FindOutMoreCharities = () => {
    return (
        <div className="FindOutMoreCharities">
            <NavBar />
            <section className="Charities-blue-section">
                <section className="charities-heading">
                    <p>Partner charities</p>
                </section>
                <section className="charity-logos">
                    <div className="charities-first-row">
                        <a href="https://babybankalliance.org/">
                            <img src="/assets/Baby_Bank_Alliance.png" alt="Baby Bank Alliance" className="baby-bank-alliance" />
                        </a>
                        <a href="https://www.babybasicsmk.org.uk/">
                            <img src="/assets/Baby_Basics_Milton_Keynes.png" alt="Baby Basics MK" className="baby-basics-milton-keynes" />
                        </a>
                        <a href="https://www.babybanknetwork.com/">
                            <img src="/assets/Baby_Bank_Network_Bristol.png" alt="Baby Bank Network Bristol" className="baby-bank-network-bristol" />
                        </a>
                        <a href="https://www.berwickshireswap.co.uk/">
                            <img src="/assets/Berwickshire_Swap.png" alt="Berwickshire Swap" className="berwickshire-swap" />
                        </a>
                    </div>

                    <div className="charities-second-row">
                        <a href="https://www.gloucestershirebundles.org/">
                            <img src="/assets/Gloucestershire_Bundles.png" alt="Gloucestershire Bundles" className="gloucestershire-bundles" />
                        </a>
                        <a href="https://littlevillagehq.org/">
                            <img src="/assets/Little_Village_Logo.png" alt="Little Village" className="little-village" />
                        </a>
                        <a href="https://www.thecowshed.org/">
                            <img src="/assets/The_Cowshed_logo.png" alt="The Cowshed" className="the-cowshed" />
                        </a>
                    </div>
                </section>
            </section>
            <LinkImages />
            <Footer />
        </div>
    );
};

export default FindOutMoreCharities;
