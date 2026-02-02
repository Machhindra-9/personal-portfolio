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
                <p>Automated CI/CD pipelines built with Docker, Kubernetes, and Jenkins, integrated with security scanning (Trivy, SonarQube, OWASP) and monitoring using Prometheus and Grafana.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Machhindra-9/personal-portfolio" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Machhindra-9/personal-portfolio" target="_blank" rel="noreferrer"><h2>LevelUP – Cloud-Native Learning Platform (Microservices & CI/CD)</h2></a>
                <p>LevelUP is a cloud-native LMS built on a microservices architecture, offering role-based access, course management, and secure JWT authentication, designed for scalable and production-ready deployments.</p>
            </div>
            </div>
    </div>
    );
}

export default Project;