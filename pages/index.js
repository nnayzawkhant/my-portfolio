import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";

import Contact from "../components/UI/Contact";
import Work from "../components/UI/Work";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <About />
      <Work />
      <Contact />
    </Fragment>
  );
}
