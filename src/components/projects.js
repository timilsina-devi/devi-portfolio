import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-wrapper">
          <div className="projects-grid">
            {/* Project #1 */}
            <Card shadow={5} style={{ minWidth: "450", marginRight: "1em" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png) center / cover",
                }}
              >
                React Project #1
              </CardTitle>
              <CardText>React Project #1 Description Text</CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>

              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/*Project #2 */}

            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png) center / cover",
                }}
              >
                React Project #2
              </CardTitle>
              <CardText>React Project #2 Description Text</CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>

              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is JavaScript</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is Android App</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Android App</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
          <cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
