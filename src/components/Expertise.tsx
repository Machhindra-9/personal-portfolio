import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinux, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
     "Linux Admin",
    "User & Access",
    "Networking",
    "Shell Scripting",
    "Storage",  
    "System Monitoring",
    "Security & Hardening",
    "Linux Distros"

];

const labelsSecond = [
    "Linux",
    "Docker",
    "AWS",
    "GitHub",
    "CI/CD",
    "Git",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "Terraform",
    "Ansible",
    "Monitoring"
];

const labelsThird = [
    "Prometheus",
    "Grafana",
    "ELK Stack",
    "CloudWatch",
    "Nagios",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faLinux} size="3x"/>
                    <h3>Linux Administration</h3>
                    <p>I have hands-on experience in Linux system administration, managing users, permissions, services, and networking. I am skilled in maintaining stable, secure, and optimized Linux environments for real-world workloads.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Linux Stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Monitoring & Observability</h3>
                    <p>Monitoring & Observability ensures system health and reliability by tracking metrics, logs, and alerts to detect issues early and maintain stable, high-performing infrastructure.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;