import React from "react";
import Messanger from "../../../Shared/Messenger/Messanger";
import ContactForm from "../ContactForm/ContactForm";
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
      <Messanger/>
      {/* <ContactForm/> */}
    </div>
  );
};

export default Home;
