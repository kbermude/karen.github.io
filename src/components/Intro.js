import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import KarenModel from "./KarenModel";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"Hello humans, I am "}
            <span className="intro-name">{"Karen"}</span>{"!"}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I living with awareness and fun.</div>
          <div className="intro-desc">
            I am motivated ang highly organized individual with 3+ 
            years of experience in Data Science based in Ecuador. I know
            about management of agiles methodologies for
            projects development such as Design Thinking and
            SCRUM. 
          </div>
          <a
            href="mailto:kmbmha@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
