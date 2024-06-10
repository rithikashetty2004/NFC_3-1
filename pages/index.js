import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Landing from "../components/Home/Landing";
import Schedule from "../components/Schedule";
import FAQS from "../components/FAQS";
import Domains from "../components/Home/Domains";
import Wihts from "../components/Home/Wihts";
import Journey from "../components/Home/Journey";
import Preloader from "../components/Home/Preloader";
import Venue from "../components/Home/Venue";
import Sponsor from "../components/Sponsor";
import "animate.css";

const index = () => {
  useEffect(() => {
    import("wow.js").then((WOW) => {
      new WOW.default().init();
    });
  }, []);

  return (
    <div >
    <Layout>
      {/* Animation */}
      <Preloader />
      <Landing />
      {/* About */}
      <Domains />
      <Wihts />
      <Journey />
      <Venue />
      <Schedule />
      {/* <Tracks /> */}
      <Sponsor />
      {/* <WhySponsor /> */}
      {/* <Organiser /> */}
      <FAQS />
    </Layout>
      </div>
  );
};

export default index;
