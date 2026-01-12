import React from "react";
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Machhindra-9/cdac-project.git" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Machhindra-9/cdac-project.git" target="_blank" rel="noreferrer"><h2> DevSecOps Automation for Secure Kubernetes Deployment</h2></a>
                <p>Automated CI/CD using Docker, Kubernetes, and Jenkins with security scanning (Trivy, SonarQube, OWASP) and monitoring via Prometheus and Grafana.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Vehicle Insurance Fraud Claim Detection using Machine Learning</h2></a>
                <p>A high-performance fraud detection system using Machine Learning to analyze insurance claims, improve prediction accuracy, and reduce false positives through intelligent feature evaluation.</p>
            </div>
            </div>
    </div>
    );
}

export default Project;