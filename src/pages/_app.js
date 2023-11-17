import React from "react";
import Head from "next/head";
import Script from "next/script";
import ScrollToTop from "../components/scrollToTop";

import "../styles/main.scss";
import Data from "../data/blogs.json";
import Data2 from "../data/blogs.json";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      {
          Data2.map((blog, index) => {
            return (
              <meta key={index} name="title" content={blog.title} />
            )
          })
        }
        <title>ImmersiveTechlab Marketing Agency </title>
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn if business services is a good career path for you or not. Get to know the pros and cons of this sector in terms of your future." />
        <meta name="description" content="Curious to learn how to stay relevant in the field of software development? Learn everything you need to know, in detail." />
        <meta name="description" content="Anyone may become a digital marketer, but only a few possess the skills to be called a skilled digital marketer. Learn the tips to be better at digital marketing." />
        <meta name="description" content="Logo design is important for your brand. In thisblog, we will explore in detail the elements needed to craft a modern logo design." />
        <meta name="description" content="Logo design is important for your brand.  In this blog, we will explore in detail the elements needed to craft a modern logo design."/>
        {
          Data.map((blog, index) => {
            return (
              <meta key={index} name="description" content={blog.subtitle} />
            )
          })
        }
         </Head>
      {/* <LoadingScreen /> */}
      {/* <Cursor /> */}
      <Component {...pageProps} />
      <ScrollToTop />
      {/* <Script id="wow" src="/js/wow.min.js"></Script> */}
      {/* <Script src="/js/randomquery.js"></Script> */}
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      {/* <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script> */}
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      {/* <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script> */}
    </>
  );
}

export default MyApp;
