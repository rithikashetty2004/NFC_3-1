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
<<<<<<< Updated upstream
{/* import Countdown from "../components/Countdown"; */}
=======
import CountdownTimer from "../components/CountdownTimer";
import ImageSlider from "../components/ImageSlider";
>>>>>>> Stashed changes
import "animate.css";

const index = () => {
  useEffect(() => {
    import("wow.js").then((WOW) => {
      new WOW.default().init();
    });
  }, []);

  return (
<<<<<<< Updated upstream
    <div >
    <Layout>
      {/* Animation */}
      <Preloader />
      <Landing />
      {/* <Countdown /> */}
      {/* About */}
      <Wihts />
      <Journey />
      <Domains />
      <Schedule />
      <Venue />
      
      {/* <Tracks /> */}
      <Sponsor />
      {/* <WhySponsor /> */}
      {/* <Organiser /> */}
      <FAQS />
    </Layout>
      </div>
=======
    <div>
      <Layout>
        {/* Animation */}
        <Preloader />
        <Landing />
        {isMounted && <CountdownTimer targetDate={targetDate} />}
        {/* About */}
        <Wihts />
        <Journey />
        <Domains />
        <Schedule />
        <Venue />
        <Sponsor />
        <ImageSlider /> {/* Added ImageSlider component here */}
        <FAQS />
      </Layout>
    </div>
>>>>>>> Stashed changes
  );
};

export default index;
