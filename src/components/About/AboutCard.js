import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jaymeen Devatka</span>{" "}
            from <span className="purple">Vadodara, Gujarat, India.</span>
            <br /> I have completed my degree in Computer Science with a specialization in{" "}
            <span className="purple">Computer Engineering</span> from{" "}
            <span className="purple">Charusat University.</span>
            <br />
            <br />
            I am deeply passionate about solving real-world problems using{" "}
            <span className="purple">Machine Learning</span>,{" "}
            <span className="purple">Deep Learning</span>, and{" "}
            <span className="purple">Natural Language Processing</span>. I also enjoy building scalable backend systems, automating workflows, and exploring modern{" "}
            <span className="purple">DevOps</span> practices for deploying ML applications.
            <br />
            <br />
            I constantly engage in personal projects, open-source contributions, and experiments to expand my knowledge in AI and infrastructure automation.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleeping
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embrace challenges, unleash your potential, and conquer the world."
          </p>
          <footer className="blockquote-footer">Jaymeen Devatka</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
