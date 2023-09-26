import React from "react";
import Navbar from "../../components/Navbar/navbar";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Video2 from "../../components/Video2/video2";
import Footer from "../../components/Footer/footer";
import Team from "../../components/Team/team";
import DarkTheme from "../../layouts/Dark";
import Works3 from "../../components/Works3/works3";
import Blogs4 from "../../components/blogs/Blogs1/blogs1";
import Intro4 from "../../components/Intro4/intro4";
import AboutUs3 from "../../components/About-us4/about-us4";
import AboutExtra from "../../components/About-us3/about-us3";
import Numbers from "../../components/Numbers/numbers";
// import Services3 from "../../components/Services5/services5";
import Test from "../../components/Split/index";
import Services3 from "../../components/Services3/services3";
import Cursor from "../../components/cursor/index";



const Homepage5 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <Cursor /> 
      <AboutExtra/>
      <AboutUs3 />
      <Services3 />
      <Numbers />
      <Works3 />
      {/* <Blogs4 /> */}
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage5;
