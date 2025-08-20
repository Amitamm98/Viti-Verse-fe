import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PrimaryFooter from "./components/PrimaryFooter";
import About from "./components/about/About";
import HomePage from "./components/home/HomePage";
import ManPage from "./components/man/ManPage";
import Oversized from "./components/manoversized/Oversized";
import ManRegular from "./components/manregular/ManRegular";
import WomenPage from "./components/women/WomenPage";
import Customize from "./components/customize/Customize";
import ScrollToTop from "./components/ScrollToTop";
import AuthForm from "./components/account/AuthForm";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/man" element={<ManPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/manoversized" element={<Oversized />} />
          <Route path="/manregular" element={<ManRegular />} />
          <Route path="/about" element={<About />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/account" element={<AuthForm />} />
        </Routes>
        <PrimaryFooter />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
