import { useRouter } from 'next/router';
import React, { useEffect, useRef } from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import BlogDetails from '../../components/Blog-Details/BlogDetails';
import blogPosts from '../../data/blogs.json';
import PageHeader from "../../components/Page-header/page-header";


const BlogPost = () => {
  const navbarRef = useRef(null);
  const router = useRouter();
  const { slug } = router.query;
  
  const post = blogPosts.find(p => p.link === slug);
  
  useEffect(() => {
    const navbar = navbarRef.current;
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return <p>Loading...</p>; // or a custom loading component
  }

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <PageHeader title={post.title} paragraph={post.subtitle} /> {/* Use PageHeader here */}

      <BlogDetails content={post.content} image={post.image} />
      <Footer />
    </DarkTheme>
  );
};

export default BlogPost;
