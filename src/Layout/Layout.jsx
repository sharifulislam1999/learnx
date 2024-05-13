import { Outlet, ScrollRestoration } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
    return (
        <div className="overflow-x-hidden">
            <Nav></Nav>
            <ScrollRestoration />
            <Outlet></Outlet>
            <Footer></Footer>            
        </div>
    );
};

export default Layout;