import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about-me">
        <h1 className="about-me-title">About Me</h1>
        <hr />
        <figure>
          <blockquote>
            Devi was a high-achieving student in my Web Development, Linux,
            Systems Analysis, and Mobile Applications courses. He is a dedicated
            learner who works well independently and in teams. He would be an
            asset to any organization.
          </blockquote>
          <figcaption>
            John Milley, Instructor at College of North Atlantic
          </figcaption>
        </figure>

        <p className="description-text">
          A Recent Software Development graduate from College of North Atlantic.
          Full Stack Web Developer using MongoDB, Express, React, Node.js with
          an emphasis on Frontend web developemnt. Expereienced in building CRUD
          applications, RESTful APIs using Node.js and express.
        </p>
        <p className="description-text">
          Common libraries of use: Redux, Mongoose, Express, react-router.
          Common use of UI libraries: Bootstrap 4, React-Bootstrap,
          MaterializeCSS, Material-UI.
        </p>
      </div>
    );
  }
}

export default About;
