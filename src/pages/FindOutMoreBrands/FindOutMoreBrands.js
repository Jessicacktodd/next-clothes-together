import { NavBar } from "../../components/NavBar/NavBar";
import "./FindOutMoreBrands.css" 
import gooseberry_fool_logo from "../../assets/gooseberry_fool_logo.png";
import kite_logo from "../../assets/kite_logo.png";
import ILO_logo from "../../assets/ILO_logo.png";
import little_green_radicals_logo from "../../assets/little_green_radicals_logo.png";
import piccalilly_logo from "../../assets/piccalilly_logo.png";
import pigeon_logo from "../../assets/pigeon_logo.png";
import toby_tiger_logo from "../../assets/toby_tiger_logo.png";
import { LinkImages } from "../../components/LinkImages/LinkImages";
import { Footer } from "../../components/CompanyInfoBanner/Footer";

export const FindOutMoreBrands = () => {
    return(
        <div className="FindOutMoreBrands">
            <NavBar />
            <section className="form"></section>
            <section className="Brands-blue-section">
                    <section className="brand-heading">
                        <p>Partner brands</p>
                    </section>
                    <section className="partners">
                    <p>These brands are committed to ensuring that every piece of spare stock reaches people who need it</p>
                    <h4>Founding Partners</h4>
                    <section className="brand-logos">
                        <div className="brands-first-row">
                            <a href="https://www.tobytiger.co.uk/">
                                <img src={toby_tiger_logo} alt="Toby Tiger logo" className="toby-tiger-logo"></img></a>
                            <a href="https://www.pigeonorganics.com/">
                                <img src={pigeon_logo} alt="Pigeon logo" className="pigeon-logo"></img></a>
                            <a href="https://www.kite-clothing.co.uk/">
                                <img src={kite_logo} alt="Kite logo" className="kite-logo"></img></a>
                            <a href="https://littlegreenradicals.com/">
                                <img src={little_green_radicals_logo} alt="Little green radicals logo" className="little-green-radicals-logo"></img></a>
                        </div>
                        
                        <div className="brands-second-row">
                            <a href="https://www.gooseberryfool.co.uk/">
                                <img src={gooseberry_fool_logo} alt="gooseberry fool logo" className="gooseberry-fool-logo"></img></a>
                            <a href="https://www.piccalilly.co.uk/">
                                <img src={piccalilly_logo} alt="Piccalilly logo" className="piccalilly-logo"></img></a>
                            <a href="https://www.iloclothing.co.uk/">
                                <img src={ILO_logo} alt="ILO logo" className="ILO-logo"></img></a>
                           
                        </div>
                    </section>
                    </section>
            </section>
            <LinkImages />
            <Footer />
        </div>
    )
}