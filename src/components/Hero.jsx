import hero from "../assets/hero.avif"
import heroine from "../assets/heroine.avif"
const Hero = function () {
    return (
        <>
        <div className="description"></div>
        <div className="heroimg">
            <img src={hero} alt="hero" />
            <img src={heroine} alt="heroine" />
        </div>
        </>
    )
}

export default Hero;