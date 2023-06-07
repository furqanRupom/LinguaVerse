import { Helmet } from "react-helmet-async";
import Loader from "../../../Loader/Loader";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import BenefitsCarousel from "../BenefitsCarousel/BenefitsCarousel";

const  Home = () => {

    return (
        <div>
            <Helmet>
                <title>LinguaVerse | Home</title>
            </Helmet>
            <HeroCarousel />
            <BenefitsCarousel />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente beatae voluptatibus. Blanditiis similique, consequatur quam labore quo doloribus voluptates quaerat illo soluta, iste dolorem, architecto vero veniam vitae est?
        </div>
    );
};


export default Home;