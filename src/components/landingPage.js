import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={require("../img/devi.jpg")}
              alt="profile-image"
              className="profile-image"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML5/CSS3 | JavaScript | React | NodeJs | MongoDB | Java Spring
                | dot Net
              </p>
              <div className="social-links">
                {/* LinkedIn*/}
                <a
                  href="https://www.linkedin.com/in/devi-timilsina-994295119/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github*/}
                <a
                  href="https://github.com/timilsina-devi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
