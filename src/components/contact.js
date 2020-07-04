import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { TextField, Button } from "@material-ui/core";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Devi Timilsina</h2>
            <img
              src={require("../img/devi.jpg")}
              alt="devi-timilsina"
              style={{ height: "250px" }}
            />
            <figure>
              <blockquote>
                Devi was a high-achieving student in my Web Development, Linux,
                Systems Analysis, and Mobile Applications courses. He is a
                dedicated learner who works well independently and in teams. He
                would be an asset to any organization.
              </blockquote>
              <figcaption>
                John Milley, Instructor at College of North Atlantic
              </figcaption>
            </figure>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              {/* <List>
                <ListItem>
                  <ListItemContent className="list-item-content">
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (431)334-8123
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="list-item-content">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    devi.timilsina72@ed.cna.nl.ca
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="list-item-content">
                    <i className="fa fa-skype">myskypeId@skype.com</i>
                  </ListItemContent>
                </ListItem>
              </List> */}
              <form>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <br />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                />
                <br />
                <button>Reach Me</button>
              </form>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
