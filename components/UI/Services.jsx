import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/services.module.css';

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col style={{}}>
            <SectionSubtitle subtitle="What I do" />
            <h1 style={{fontSize: '20px'}}>Junior Web Developer</h1>
            <h3 style={{fontSize: '25px'}}>Coding Elephant Technology</h3>
            <span style={{fontSize: '18px', color: 'gray'}}>
              June 2022 - Present
            </span>

            <ul className={`${classes.ul_style}`}>
              <li>
                <p>
                  At first, I was working as an Intern but now I am working as a Full Time employee.
                  {' '}
                </p>
              </li>
              <li>
                <p>
                  At this job, I helped my Senior Developers with building HTML, CSS design codes.
                  {' '}
                </p>
              </li>
              <li>
                <p>
                  For small internal projects, I had to build full-stack with React.js, Node.js and MongoDB
                  {' '}
                </p>
              </li>
              <li>
                <p>
                  I helped in building an ecommerce website for Hearty Heart Cosmetics Myanmar.
                  {' '}
                </p>
              </li>
              <li>
                <p>
                  I mainly work with HTML, CSS, Bootstrap, JavaScript, jQuery, React.js, Redux, Next.js, Express.js and MongoDB in this job.
                </p>
              </li>
            </ul>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
