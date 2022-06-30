import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "Wind Turbine Main Bearing Failure Prediction using a Hybrid Neural Network": {
        title: "Wind Turbine Main Bearing Failure Prediction using a Hybrid Neural Network",
        desc:
          "Energy is necessary for economic growth and improved well-being, but it poses a great challenge to be generated without increasing costs and avoiding pollution. ",
        techStack: "PREDICTION, FAULT, WIND TURBINE",
        open: "https://iopscience.iop.org/article/10.1088/1742-6596/2265/3/032090/meta",
        image: "/assets/torque.jpg"
      },
      "Laying the Foundations for a Digital Literacy Program in the Galapagos Islands": {
        title: "Laying the Foundations for a Digital Literacy Program in the Galapagos Islands",
        desc:
          "Digital Literacy is an enabler that allows individuals and communities the ability to create, access, and share knowledge through digital means. ",
        techStack: "INTRANET, GALAPAGOS ISLANDS, DIGITAL LITERACY",
        open: "https://ieeexplore.ieee.org/document/9342878",
        image: "/assets/intranet.jpg"
      },
      "Quantifying the impact of natural disaster on retail stores’ customer behavior: the case of Ecuador": {
        title: "Quantifying the impact of natural disaster on retail stores’ customer behavior: the case of Ecuador",
        desc:
          "Data analytics are essential to retailers when making decisions during disruptive events such as natural disasters. ",
        techStack: "RETAIL, NATURAL DISASTER, CUSTOMER BEHAVIOR",
        open: "https://ieeexplore.ieee.org/document/9096748",
        image: "/assets/results.jpg"
      }
    };
    const projects = {
      
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">Publications!</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
