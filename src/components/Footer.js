import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import linkedInIcon from "../assets/img/nav-icon1.svg";
import githubIcon from '../assets/img/github-mark-white.svg'
import resumeIcon from '../assets/img/resume.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <h1 className="footer-heading">Jay</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jayrudani98/" target="_blank"  rel="noopener noreferrer"><img src={linkedInIcon} alt="Icon" /></a>
              <a href="https://github.com/JayRudani" target="_blank"  rel="noopener noreferrer"><img src={githubIcon} alt="Icon" /></a>
              <a href="https://drive.google.com/file/d/1PickVaklEB2xMWSP_Wqx3M4WqpxJqT4x/view?usp=sharing" target="_blank"  rel="noopener noreferrer"><img src={resumeIcon} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}