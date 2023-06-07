import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";

const  Main = () => {

    return (
        <div>
            <Header />
            <Outlet />
            <div className="mt-72">
            <Footer />
            </div>

        </div>
    );
};


export default Main;