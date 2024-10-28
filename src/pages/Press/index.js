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
                <div className="pdf-images">
                    <img src="assets/press1.png" alt="Press Release 1" />
                    <img src="assets/press2.png" alt="Press Release 2" />
                </div>
            </section>
            <LinkImages />
            <Footer />
        </div>
    )
}

export default Press