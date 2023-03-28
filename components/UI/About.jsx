import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import SectionSubtitle from './SectionSubtitle';

import classes from '../../styles/about.module.css';

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />

            <p>
              I am a hard-working, motivated and passionate web developer. I love to build awesome things for the web. I love to learn new things and share knowledge with people around me. I started studying programming in June 2022.I work everyday with Git, and Visual Studio Code.I have experience building ecommerce and blog websites, as well as custom web applications. I&apos;m a quick learner who keeps up-to-date with the latest technologies and trends in web development
            </p>

          </Col>

          <Col>
            <p>My expertises are : </p>
            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line" />
                  </span>
                  HTML
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line" />
                  </span>
                  CSS
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line" />
                  </span>
                  JavaScript ES6
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line" />
                  </span>
                  Bootstrap
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line" />
                  </span>
                  Tailwind CSS
                </h6>

              </div>
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line" />
                  </span>
                  JQuery
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line" />
                  </span>
                  React.js
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line" />
                  </span>
                  Redux
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line" />
                  </span>
                  Next.js
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line" />
                  </span>
                  Express.js
                </h6>
              </div>
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line" />
                  </span>
                  Node.js
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line" />
                  </span>
                  ChatGpt
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line" />
                  </span>
                  MongoDb
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line" />
                  </span>
                  MySQL
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line" />
                  </span>
                  Git
                </h6>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
