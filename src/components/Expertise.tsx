import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinux, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
     "Core Administration", "User & Access Control", "Networking & Troubleshooting", "Shell Scripting & Automation", "System Monitoring", "Security & Hardening", "Storage & File Systems", "Process & Services"

    

];

const labelsSecond = [
    "Secure CI/CD & Pipelines",
"Containerization (Docker)",
"Orchestration (Kubernetes, Helm)",
"Iac (Terraform, Ansible)",
"Cloud Platforms (AWS)",
"Version Control (Git, GitHub)",
"CI (GitHub Actions, Jenkins)"
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
                    <p>Hands-on experience managing Linux servers, including user access control, service management, networking, and storage. Experienced in troubleshooting system issues, automating tasks with Bash scripting, and implementing security best practices to maintain stable and production-ready.</p>
                    <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    <div className="chips-wrapper">
                     {labelsFirst.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                    ))}
                    </div>
</div>
                    
                    
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Cloud</h3>
                    <p>Experienced in building and managing CI/CD pipelines, containerized deployments, and infrastructure automation. Skilled in integrating development and operations workflows using tools like Docker, Kubernetes, and Terraform to enable reliable, scalable, and production-ready deployments.</p>
                    <div className="flex-chips">
                     <span className="chip-title">Tech stack:</span>
                        <div className="chips-wrapper">
                        {labelsSecond.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Monitoring & Observability</h3>
                    <p>Experienced in building monitoring and observability solutions that improve system reliability and performance. Skilled in gathering and analyzing metrics, logs, and alerts using tools like Prometheus, Grafana, and ELK Stack to identify issues and optimize system.</p>
                    {/* <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div> */}

                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        <div className="chips-wrapper">
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
</div>                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;