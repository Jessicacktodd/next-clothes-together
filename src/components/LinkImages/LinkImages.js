import mustard_link_image from "../../assets/mustard_link_image.png";
import green_link_image from "../../assets/green_link_image.png";
import orange_link_image from "../../assets/orange_link_image.png";
import "./LinkImages.css";
import { Link } from "react-router-dom";

export const LinkImages = () => {
    return (
            <section className="link-images">
                <div className="link-item">
                    <Link to="/WhoWeAre">
                        <img src={mustard_link_image} alt="mustard link" className="mustard-link-image"></img>
                    </Link>
                    <p className="link-description">Who We Are</p>
                </div>
                <div className="link-item">
                    <Link to="/FindOutMoreBrands">
                        <img src={green_link_image} alt="green link" className="green-link-image"></img>
                    </Link>
                    <p className="link-description">Partner brands</p>
                </div>
                <div className="link-item">
                    <Link to="/FindOutMoreCharities">
                        <img src={orange_link_image} alt="orange link" className="orange-link-image"></img>
                    </Link>
                    <p className="link-description">Partner charities</p>
                </div>
            </section>
    )};