import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="grid mx-auto mt-[5rem]">
      <Header />
      <div className="h-[88vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
