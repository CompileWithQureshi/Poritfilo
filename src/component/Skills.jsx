import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../assets/img/meter1.svg";
import image2 from "../assets/img/meter2.svg";
import image3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skill = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit consequatur adipisci asperiores, corporis impedit,
                odit voluptatum, inventore distinctio eius ex autem quas
                quisquam eum? Et quod voluptas laudantium minus deleniti!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={image1} alt="Img" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={image2} alt="Img" />
                  <h5>Web Design</h5>
                </div>
                <div className="item">
                  <img src={image3} alt="Img" />
                  <h5>UI/UX Designer</h5>
                </div>
                <div className="item">
                  <img src={image2} alt="Img" />
                  <h5>Backend Developer</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" alt="bg-img" src={colorSharp} />
    </section>
  );
};
