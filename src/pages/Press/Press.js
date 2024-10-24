import { Footer } from "../../components/CompanyInfoBanner/Footer";
import { LinkImages } from "../../components/LinkImages/LinkImages";
import { NavBar } from "../../components/NavBar/NavBar";
import "./Press.css"

export const Press = () => {
    return(
        <div className="Press">
            <NavBar />
            <section className="press-blue-section">
                <section className="press-heading">
                    <p>Press</p>
                </section>
            </section>
            <LinkImages />
            <Footer />
        </div>
    )
}