import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pizzaria from "../../Assets/Projects/pizzaria.png";
import imageEditor from "../../Assets/Projects/imageEditor.png";
import paintApp from "../../Assets/Projects/paintApp.png";
import chatify from "../../Assets/Projects/chatify.png";
import flappyBird from "../../Assets/Projects/flappyBird.png";
import realEstate from "../../Assets/Projects/realEstate.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with PHP, JQuery, and MySQL. Have features which allows user for realtime messaging."
              ghLink="https://github.com/AyushTaparia/Public_chat_room"
              demoLink="http://public-chat.free.nf/?i=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realEstate}
              isBlog={false}
              title="Real-Estate"
              description="Developed and implemented a filtered search system on a real estate website, enabling users to
              refine their search results based on various criteria, including price range, location, and property
              type. This website is made using ReactJS."
              ghLink="https://github.com/AyushTaparia/real_estate"
              demoLink="https://real-estate-gray-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flappyBird}
              isBlog={false}
              title="Online Resume Builder"
              description="A web application designed to help users quickly create professional resumes in just 10-15 seconds. Built with a focus on simplicity and efficiency, it features customizable templates and real-time previews."
              ghLink="https://github.com/AyushTaparia/Resume_Builder"
              demoLink="https://resume-builder-inky-nu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paintApp}
              isBlog={false}
              title="Paint App"
              description="Developed a robust drawing app with a variety of features, including shape drawing and color
              customization; users could erase and download their creations in seconds. This Online Web Application is made using HTML5, CSS, Canvas, and JavaScript"
              ghLink="https://github.com/AyushTaparia/White_Board"
              demoLink="https://white-board-ecru.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageEditor}
              isBlog={false}
              title="Image Editor"
              description="Designed and executed a project that allows users to apply various image filters, such asgrayscale, inversion, and saturation while providing options to adjust brightness, rotate, andflip images. Implemented a feature for users to save their edited images. This Web Application is made using HTML5, CSS and Vanilla JavaScript"
              ghLink="https://github.com/AyushTaparia/Image_editor"
              demoLink="https://image-editor-gules.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizzaria}
              isBlog={false}
              title="Pizzaria"
              description="Developed and implemented an impressive pizza site using ReactJS, featuring a sophisticated filter system for easy differentiation between veg and non-veg options. Additionally, a user-friendly cart page is integrated, allowing users to conveniently review their selected items before placing their orders."
              ghLink="https://github.com/AyushTaparia/reactpizza"
              demoLink="https://reactpizza-delta.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
