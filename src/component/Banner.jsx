import { Col, Container, Row } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm a Frontend `}
              <span className="wrap" mg={5}>
                <br />
                Web developer.
              </span>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae vero commodi at unde. Ipsa sint tempore quod eum,
              nesciunt minima ullam eveniet tenetur! Dolorem eveniet, minima
              corrupti quod sapiente omnis?
            </p>
            <button onClick={() => console.log("connected")}>
              Let's Connect
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
