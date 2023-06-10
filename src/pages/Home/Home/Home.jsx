import { Helmet } from "react-helmet-async";
import Loader from "../../../Loader/Loader";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import BenefitsCarousel from "../BenefitsCarousel/BenefitsCarousel";
import ScrollToTop from "../../../components/ScroollToTop";

const  Home = () => {

    return (
        <div>
            <ScrollToTop />
            <Helmet>
                <title>LinguaVerse | Home</title>
            </Helmet>
            <HeroCarousel />
            <BenefitsCarousel />

        </div>
    );
};


export default Home;