import { NavBar } from "../../components/NavBar/NavBar";
import "./FindOutMoreBrands.css";
import { LinkImages } from "../../components/LinkImages/LinkImages";
import { Footer } from "../../components/CompanyInfoBanner/Footer";
import Link from "next/link";

export const FindOutMoreBrands = () => {
    return (
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
                            <Link href="https://www.tobytiger.co.uk/">
                                <img src="/assets/toby_tiger_logo.png" alt="Toby Tiger logo" className="toby-tiger-logo" />
                            </Link>
                            <Link href="https://www.pigeonorganics.com/">
                                <img src="/assets/pigeon_logo.png" alt="Pigeon logo" className="pigeon-logo" />
                            </Link>
                            <Link href="https://www.kite-clothing.co.uk/">
                                <img src="/assets/kite_logo.png" alt="Kite logo" className="kite-logo" />
                            </Link>
                            <Link href="https://littlegreenradicals.com/">
                                <img src="/assets/little_green_radicals_logo.png" alt="Little Green Radicals logo" className="little-green-radicals-logo" />
                            </Link>
                        </div>
                        
                        <div className="brands-second-row">
                            <Link href="https://www.gooseberryfool.co.uk/">
                                <img src="/assets/gooseberry_fool_logo.png" alt="Gooseberry Fool logo" className="gooseberry-fool-logo" />
                            </Link>
                            <Link href="https://www.piccalilly.co.uk/">
                                <img src="/assets/piccalilly_logo.png" alt="Piccalilly logo" className="piccalilly-logo" />
                            </Link>
                            <Link href="https://www.iloclothing.co.uk/">
                                <img src="/assets/ILO_logo.png" alt="ILO logo" className="ILO-logo" />
                            </Link>
                        </div>
                    </section>
                </section>
            </section>
            <LinkImages />
            <Footer />
        </div>
    );
};

export default FindOutMoreBrands;
