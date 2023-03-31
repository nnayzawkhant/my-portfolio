import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import WorkItem from "./WorkItem";

import portfolioData from "../data/work";

const Work = () => {

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle=" My Projects" />
            <h4 className="mt-4">Some of my distinguished works</h4>
          </Col>

          <Col lg="6" md="6">
          </Col>

          {portfolioData?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <WorkItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Work;
