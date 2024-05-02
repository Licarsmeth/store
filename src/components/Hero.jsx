import hero from "../assets/hero.avif"
import heroine from "../assets/heroine.avif"
const Hero = function () {
    return (
        <>
        <div className="herotext">
            <div className="heading">
                Welcome to Store!
            </div>
            <div className="subheading">
                (A very unique name)
            </div>
            <div className="description">
                Home of Exceptional quality fake products.<br /> I assure you, none of these are real.
            </div>
        </div>
        <div className="heroimg">
            <img src={hero} alt="hero" />
            <img src={heroine} alt="heroine" />
        </div>
        <button className="shop-button">Shop Now!</button>
        </>
    )
}

export default Hero;