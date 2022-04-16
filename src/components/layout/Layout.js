import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;