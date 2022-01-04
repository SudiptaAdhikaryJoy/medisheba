import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Hero from "../Hero/Hero";
import Medicines from "../Medicines/Medicines";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  React.useEffect(() => {
    document.title = "MediSheba | An online based medicine company";
  }, []);

  return (
    <div>
      <Hero></Hero>
      <Medicines></Medicines>
      <Services></Services>
      <Testimonial></Testimonial>
      {/* <ContactForm/> */}
    </div>
  );
};

export default Home;
