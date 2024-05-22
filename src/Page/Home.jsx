import React from "react";
import Banner from "../Component/Banner/Banner";
import Service from "../Component/Service/Service";
import Destination from "../Component/Destination/Destination";
import Cruise from "../Component/Cruise/Cruise";
import Protocols from "../Component/Protocols/Protocols";
import Gallery from "../Component/Gallery/Gallery";
import Review_Testimonials from "../Component/Review_Testimonials/Review_Testimonials";

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
    </>
  );
};

export default Home;
