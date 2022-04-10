import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

const Home = () => ( //Repreesnts the Layout of Landing Page
  <Fragment>
    <Hero />
    <hr />
    <Content />
  </Fragment>
);

export default Home;
