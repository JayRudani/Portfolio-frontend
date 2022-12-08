import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, techStack, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project" height="100px" width="100px"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <h5>{techStack}</h5>
        </div>
      </div>
    </Col>
  )
}