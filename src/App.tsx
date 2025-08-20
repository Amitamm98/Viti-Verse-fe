import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PrimaryFooter from "./components/PrimaryFooter";
import About from "./components/about/About";
import HomePage from "./components/home/HomePage";
import ManPage from "./components/man/ManPage";
import Oversized from "./components/manoversized/Oversized";
import ManRegular from "./components/manregular/ManRegular";
import Customize from "./components/customize/Customize";
import ScrollToTop from "./components/ScrollToTop";
import AuthForm from "./components/account/AuthForm";
import WomenPage from "./components/women/womenHomepage/Women/WomenPage";
import Regular from "./components/women/womenregular/Regular";
import WomenPolo from "./components/women/womenpolo/WomenPolo";
import WomenGym from "./components/women/womenHomepage/womengym/WomenGym";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
           <Route path="/women" element={<WomenPage />} />
   <Route path='/womenoversized' element={<Oversized/>}/>
        <Route path="/womenregular" element={<Regular/>}/>
        <Route path="/womenpolo" element={<WomenPolo/>}/>
        <Route path="/womengym" element={<WomenGym/>}/>
          <Route path="/man" element={<ManPage />} />
         
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
