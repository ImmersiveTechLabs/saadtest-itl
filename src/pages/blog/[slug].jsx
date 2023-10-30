import { useRouter } from 'next/router'
import React from "react";
import blog3Data from "../../data/blog3.json";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogDetails1 from "../../components/Blog-details/Blog1.jsx";
import BlogDetails2 from "../../components/Blog-details/Blog2.jsx";
import BlogDetails3 from "../../components/Blog-details/Blog3.jsx";
import BlogDetails4 from "../../components/Blog-details/Blog4.jsx";
import Footer from "../../components/Footer/footer";
import BlogList from "../../pages/blog-list/blog-list-dark";
 
const BlogDetailsDark = () => {
    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);
    const router = useRouter(); // call useRouter hook at the top of your component
    const slug = router.query.slug; // you can store the slug in a variable for easier access
  
    React.useEffect(() => {
        var navbar = navbarRef.current;
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
            } else {
                navbar.classList.remove("nav-scroll");
            }
        };
        
        handleScroll(); // set the initial state
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [navbarRef]);
    
    return (
        <DarkTheme>
            {/* ...other components... */}
            <Navbar nr={navbarRef} lr={logoRef} />
            
            {slug === "Is-Business-Services-A-Good-Career-Path" ? (
                <BlogDetails1 data={blog3Data} />
            ) : slug === "How-to-Be-Better-at-Digital-Marketing" ? (
                <BlogDetails2 data={blog3Data} />
            ) : slug === "How-to-Stay-Relevant-in-the-Field-of-Software-Development" ? (
                <BlogDetails3 data={blog3Data} />
            ) : slug === "How-to-Craft-a-Modern-Logo-Design" ? (
                <BlogDetails4 data={blog3Data} />
            ) :           (
                <BlogList />
            )}

            <Footer />
        </DarkTheme>
    );
};
  
export default BlogDetailsDark;
