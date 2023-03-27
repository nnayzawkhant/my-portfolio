import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/services.module.css';
import ServicesItem from './ServicesItem';

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <h1 style={{fontSize: '20px'}}>Junior Web Developer</h1>
            <h3 style={{fontSize: '25px'}}>Coding Elephant Technology</h3>
            <span style={{fontSize: '18px', color: 'gray'}}>June 2022 - Present</span>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <p>
              -At first, I was working as an Intern but now I am working as a Full Time employee.
              {' '}
            </p>
            <p>
              -At this job, I helped my Senior Developers with building HTML, CSS design codes.
              {' '}
            </p>
            <p>
              -For small internal projects, I had to build full-stack with React.js, Node.js and MongoDB
              {' '}
            </p>
            <p>
              -I helped in building an ecommerce website for Hearty Heart Cosmetics Myanmar.
              {' '}
            </p>
            <p>
              -I mainly work with HTML, CSS, Bootstrap, JavaScript, jQuery, React.js, Redux, Next.js, Express.js and MongoDB in this job.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
