import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends Component {
  render() {
    return (
      <div>
        <div className="resume-body">
          <Grid className="heading-grid">
            <Cell col={4}>
              <img
                src={require("../img/devi.jpg")}
                alt="devi-timilsina"
                style={{ height: "150px" }}
              />
            </Cell>
            <Cell col={4}>
              <h2>Devi Timilsina</h2>
              <h3>Full Stack Developer</h3>
            </Cell>
            <Cell col={4} className="resume-contact">
              <a href="www.devi-timilsina.dev" target="_blank">
                <i className="fa fa-globe" arial-hidden="true" />

                <p> www.devi-timilsina.dev</p>
              </a>
              <br />

              <i className="fa fa-envelope" arial-hidden="true" />

              <p>timilsinadevipd@gmail.com</p>
              <br />
              <i className="fa fa-phone" arial-hidden="true" />

              <p>(431)334-8123</p>
            </Cell>
          </Grid>
          <Grid className="experience-grid">
            <Cell col={4} className="resume-heading">
              <h2>Experience</h2>
            </Cell>
            <Cell col={8} className="experience-content">
              <h3>
                Jr. Software Developer | Eagle Eye Security Concern | 2015-2016
              </h3>
              <p>
                <ul>
                  <li>Worked on an Inventory Mangement System project</li>
                  <li>
                    Developed different forms and modules using Java MVC pattern{" "}
                  </li>
                  <li>Version Control: GitHub</li>
                  <li>Technologies: Java, PostgreSQL, Jasper Reporting</li>
                </ul>
              </p>
              <h3>
                Internship | Oxford College of Engineering and Management | 3
                Months (2014)
              </h3>
              <p>
                <ul>
                  <li>Worked on a seat planning system for board exams</li>
                  <li>
                    Involved in development of whole task plan, weekly meeting,
                    steps deliverables, testing, and QA sessions{" "}
                  </li>
                  <li>
                    Completed assigned programming tasks as well as reported on
                    daily and weekly basis
                  </li>
                </ul>
              </p>
            </Cell>
          </Grid>
          <Grid className="education-grid">
            <Cell col={4} className="resume-heading">
              <h2>Education</h2>
            </Cell>
            <Cell col={8} className="education-content">
              <h3>
                Diploma in Software Development | College of North Atlantic |
                2018-2020 | Corner Brook, NL, CA
              </h3>
              <p>CGPA : 4.0 out of 4.0</p>
              <h3>
                Bachelor's in Computer Application | Oxford College of
                Engineering and Management | 2010-2014 | Nepal
              </h3>
              <p>CGPA : 3.81 out of 4.0</p>
            </Cell>
          </Grid>
          <Grid className="skills-grid">
            <Cell col={4} className="resume-heading">
              <h2>Skills</h2>
            </Cell>
            <Cell col={8} className="skills-content">
              <ul>
                <li>
                  Java MVC, Java Spring, JavaScript, dot Net, React.js, Node.js,
                  Express.Js, HTML5/CSS3
                </li>
                <li>
                  MySQL,T-SQL, MongoDB, PostgreSQL, Microsoft SQL Server, AWS
                </li>
                <li>Mobile App (Android), Firebase</li>
                <li>
                  Basic Knowledge of Big data paradim like Spark, Apache Hive,
                  Pig, Map Reduce
                </li>
                <li>
                  Agile Software Development, Search Engine Optimizatino (SEO),
                  Data Structure and Alogorithms{" "}
                </li>
              </ul>
            </Cell>
          </Grid>
          <Grid className="certifications-grid">
            <Cell col={4} className="resume-heading">
              <h2>Licences and Certifications</h2>
            </Cell>
            <Cell col={8} className="certifications-content">
              <i className="fa fa-linkedin-square" />
              <p>Learning MongoDB</p>
              <br />
              <i className="fa fa-linkedin-square" />
              <p> Building a Website with Node.js and Express.js</p>
              <br />

              <i className="fa fa-linkedin-square" />
              <p>Java Memory Management</p>
              <br />
              <i className="fa fa-linkedin-square" />
              <p>Leanring Node.js</p>
              <br />
              <i className="fa fa-linkedin-square" />
              <p>JavaScript: Closure</p>
              <br />
              <i className="fa fa-linkedin-square" />
              <p> JavaScript Essential Training</p>
              <br />

              <i className="fa fa-linkedin-square" />
              <p>CSS: Animation</p>
              <br />
              <i className="fa fa-linkedin-square" />
              <p>Learning Amazon Web Services (AWS) for Developers (2018)</p>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Resume;
