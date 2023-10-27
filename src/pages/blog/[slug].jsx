import { useRouter } from 'next/router'
import React from "react";
import blog3Data from "../../data/blog3.json";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogDetails1 from "../../components/Blog-details/Blog1.jsx";
import BlogDetails2 from "../../components/Blog-details/Blog2.jsx";
import BlogDetails3 from "../../components/Blog-details/Blog3.jsx";
import Footer from "../../components/Footer/footer";
import Error from "../404";
import BlogList from "../../pages/blog-list/blog-list-dark";
 
const BlogDetailsDark = () => {
    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);
  
    React.useEffect(() => {
      var navbar = navbarRef.current,
        logo = logoRef.current;
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
        <div className="circle-bg">
          <div className="circle-color fixed">
            <div className="gradient-circle"></div>
            <div className="gradient-circle two"></div>
          </div>
        </div>
        <Navbar nr={navbarRef} lr={logoRef} />
           
           {/* condition for routes title set as per the route and data is set as per the route */}
        {useRouter().query.slug === "Is-Business-Services-A-Good-Career-Path" ? (
            <BlogDetails1 data={blog3Data} />
            ) : useRouter().query.slug === "How-to-Be-Better-at-Digital-Marketing" ? (
            <BlogDetails2 data={blog3Data} />
            ) : useRouter().query.slug === "How-to-Stay-Relevant-in-the-Field-of-Software-Development" ? (
            <BlogDetails3 data={blog3Data} />
            ) : (
            <BlogList />
            )}


            <Footer />
      </DarkTheme>
    );
  };
  
  export default BlogDetailsDark;