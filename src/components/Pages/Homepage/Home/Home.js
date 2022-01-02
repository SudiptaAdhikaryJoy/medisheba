import React from "react";
import Hero from "../Hero/Hero";
import Medicines from "../Medicines/Medicines";
import Services from "../Services/Services";

const Home = () => {
  React.useEffect(() => {
    document.title = "MediSheba | An online based medicine company";
  }, []);

  return (
    <div>
      <Hero></Hero>
      <Medicines></Medicines>
      <Services></Services>
    </div>
  );
};

export default Home;
