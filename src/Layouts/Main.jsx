import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import ScrollToTop from "../components/ScroollToTop";

const  Main = () => {

    return (
        <div>
            <ScrollToTop />
            <Header />
            <div >
            <Outlet />
            </div>

            <div>
            <Footer />
            </div>

        </div>
    );
};


export default Main;