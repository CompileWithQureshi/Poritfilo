import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCards } from "./cardComponent";
import coloSharp2 from "../assets/img/color-sharp2.png";
import project1 from "../assets/img/project-img1.png";
import project2 from "../assets/img/project-img2.png";
import project3 from "../assets/img/project-img3.png";

export const Project = () => {
  const Projects = [
    {
      title: "Business Startup",
      desxription: "Design & Development",
      imgUrl: project1,
    },
    {
      title: "Business Startup",
      desxription: "Design & Development",
      imgUrl: project2,
    },
    {
      title: "Business Startup",
      desxription: "Design & Development",
      imgUrl: project3,
    },
    {
      title: "Business Startup",
      desxription: "Design & Development",
      imgUrl: project1,
    },
    {
      title: "Business Startup",
      desxription: "Design & Development",
      imgUrl: project2,
    },
    {
      title: "Business Startup",
      desxription: "Design & Development",
      imgUrl: project3,
    },
  ];

  return (
    <>
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                ad a officiis facere, ipsam quibusdam! Fugiat aliquam ad
                blanditiis tempora doloremque culpa dolorem! Perspiciatis
                aperiam labore maxime quod unde? Inventore!
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {Projects.map((project, index) => {
                        return <ProjectCards key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {Projects.map((project, index) => {
                        return <ProjectCards key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {Projects.map((project, index) => {
                        return <ProjectCards key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img
          className="background-image-right"
          alt="bg-img-right"
          src={coloSharp2}
        />
      </section>
    </>
  );
};
