import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayush Taparia </span>
            from <span className="purple"> Kolkata, India.</span>
            <br /> I am a currently pursuing B.Tech in Computer Science and Engineering from Techno Main Salt Lake, India.
            <br />
            I have a deep passion for solving data structures and algorithms problems. I am constantly seeking new ways to enhance my skills and broaden my knowledge in this domain.
            <br />
            <i>I'm the DSA whiz, slicing through problems with coding wizardry! 💻🔥</i>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embrace the journey, for greatness lies beyond the horizon."{" "}
          </p>
          <footer className="blockquote-footer">Ayush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
