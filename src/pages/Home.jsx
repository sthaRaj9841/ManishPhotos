import React from "react";
import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
// import lifestyle from "../assets/lifestyle.jpg";
import landscape from "../assets/landscape2.jpg";
import animal from "../assets/animal2.jpg";
import people from "../assets/people.jpg";
import Card from "../components/Card/Card";

const Home = () => {
  return (
    <div className="font-Pacifico">
      <Landing />
      <About />
      {/* <Card image={lifestyle} title="lifestyle" /> */}
      <Card image={landscape} title="landscape" />
      <Card image={animal} title="animal" />
      <Card image={people} title="people" />
    </div>
  );
};

export default Home;
