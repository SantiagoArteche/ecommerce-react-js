import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
