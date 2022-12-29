import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const formInitai = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [fromDetails, setFormDeatils] = useState(formInitai);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDeatils({
      ...fromDetails,
      [category]: value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending....");
    let respone = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(fromDetails),
    });
    setButtonText("Send");
    let result = respone.json();
    setFormDeatils(fromDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({ success: false, message: "Someting went wrong" });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handelSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={fromDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate(`FirstName`, e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={fromDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate(`FirstName`, e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={fromDetails.email}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate(`FirstName`, e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={fromDetails.phone}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate(`FirstName`, e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows={6}
                    value={fromDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate(`FirstName`, e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
