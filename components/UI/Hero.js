import React from 'react';
import SectionSubtitle from './SectionSubtitle';
import {Container, Row, Col} from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';
import classes from '../../styles/hero.module.css';

const Hero = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('cv.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'cv.pdf';
            alink.click();
            console.log(fileURL)
        })
    })
}
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Nay Zaw Khant</h2>
              <h5 className="mb-4">Junior Web Developer</h5>
              <p>
                I want to build websites and web applications that I have to be proud of. In the future, I want to take challenges internationally.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href='#contact'>Hire me</Link>
                </button>

                  <button className="secondary__btn" onClick={onButtonClick} style={{color: '#01d293'}}>
                    Download CV
                  </button>

              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="" src="images/IMG_20220814_141207.jpg" width="400" height="400" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
