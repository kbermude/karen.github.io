import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am <b>Computer Science Engineer</b> major at
        <a href="https://www.espol.edu.ec">
          {" "}
          ESPOL Polytechnic University
        </a> Specialized in Big Data Processing and Analytics. 
        <b> Thesis: </b> Prediction of failures in the main bearing of Wind Turbines.
         I started working with real companies's data while been in the university.
        Work includes <b>retails</b>, <b>agriculture</b>, <b>aquaculture</b> and <b>wind power</b> areas.
        My domain of interest includes <b>Data Analysis and Machine Learning</b>.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in personal growing with mindfulness.
        I also like to travel a lot. 
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:kmbmha@mgmail.com">
          kmbmha@mgmail.com
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Python",
      "SQL",
      "R",
      "Google Cloud",
      "Azure Databricks",
      "Tableau"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">Know me!</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/karen.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
