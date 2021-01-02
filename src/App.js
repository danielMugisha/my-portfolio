import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Banner />
      <Nav />
      <Services />
      <About />
      <Skills />
      <Portfolio />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
