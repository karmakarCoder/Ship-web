import React from "react";
import Banner from "../Component/Banner/Banner";
import Service from "../Component/Service/Service";
import Destination from "../Component/Destination/Destination";
import Cruise from "../Component/Cruise/Cruise";
import Protocols from "../Component/Protocols/Protocols";
import Gallery from "../Component/Gallery/Gallery";
import Review_Testimonials from "../Component/Review_Testimonials/Review_Testimonials";
import Download from "../Component/Download/Download";
import Email from "../Component/Email/Email";
import Footer from "../Component/Footer/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <Service />
      <Destination />
      <Cruise />
      <Protocols />
      <Gallery />
      <Review_Testimonials />
      <Download />
      <Email />
      <Footer />
    </>
  );
};

export default Home;
