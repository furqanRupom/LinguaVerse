import { Helmet } from "react-helmet-async";
import Loader from "../../../Loader/Loader";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import BenefitsCarousel from "../BenefitsCarousel/BenefitsCarousel";
import ScrollToTop from "../../../components/ScroollToTop";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import PopularClasses from "../PopularClasses/PopularClasses";

const  Home = () => {

    return (
        <div>
            <ScrollToTop />
            <Helmet>
                <title>LinguaVerse | Home</title>
            </Helmet>
            <HeroCarousel />
            <BenefitsCarousel />
            <PopularClasses />
            <PopularInstructor />

        </div>
    );
};


export default Home;