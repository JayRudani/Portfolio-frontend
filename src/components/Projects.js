import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import commonImage from "../assets/img/Common Project Image.jpg";
import payrollMSImage from "../assets/img/Payroll MS Image.png";
import satEncImage from "../assets/img/Sat-Enc Image.png";
import bookAHolicImage from "../assets/img/Book-A-Holic Image.png";
import jobPortalImage from "../assets/img/Job Portal Image.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Payroll Management System",
      description: "A Web application which uses Angular for the Front-end and the Spring for the Back-end."+ 
                    " This application helps a company to keep a track of all the employee’s records and also helps in keeping track of paystub of the employees." +
                    " It also has employee login and admin functionalities like admin login, CRUD operation for employee and generate paystub.",
      techStack: "Spring Boot, AngularJS, MySQL, Swagger 2.0, REST API, Swagger",
      imgUrl: payrollMSImage,
    },
    {
      title: "Insurance Claim",
      description: "A web application using J2EE/JSP/MySQL for the Customer Service department of an insurance company that provides"+
                    "the “protection plan” for digital devices including TV, Camera, Cellphone, etc. It allows the users to create account, login," +
                    "add devices, and add claims. The admin can then review all the data and reject or approve the claims.",
      techStack: "J2EE, Servlets, JSP, JSTL, JDBC, MySQL, MVC",
      imgUrl: commonImage,
    },
    {
      title: "Restaurant App",
      description: "A Node.js and Mongo Atlas app which has various APIs to perform CRUD operations. It also utilizes jwt token for"+
                    "authentication, handlebars for rendering HTML page and promises.",
      techStack:"Mongo Atlas, Express, Node.js, Handlebars, JWT",
      imgUrl: commonImage,
    },
    {
      title: "Job Portal",
      description: "A job application android app that mainly focuses on a niche area of helping new comers/immigrants get there first jobs in a new country." + 
                  " The app is build using android studio and firebase is used as a tool for data storage and authentication.",
      techStack: "Android, Java, Firebase, XML",
      imgUrl: jobPortalImage,
    },
    {
      title: "Book-A-Holic",
      description: "An J2EE based web application which can be used for selling and managing books. Used Html, CSS, JavaScript for Front-End Development. For Back-End Development: Java [JDK 8+], JDBC, Servlet, MySQL, Apache Maven. Database: MySQL.",
      techStack:"Java, Javascript, HTML, CSS, SQL",
      imgUrl: bookAHolicImage,
    },
    {
      title: "Sat-Enc",
      description: "A project made with HTML-CSS-jQuery. The Project gives information about the different satellites launched by countries like India, USA, Russia.",
      techStack:"HTML, CSS, JQuery, Javascript",
      imgUrl: satEncImage,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Stay Tuned!!</p>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}