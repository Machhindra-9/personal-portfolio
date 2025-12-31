import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileImg from "../assets/images/professinal_image.jpg";

function Main() {

  return (
//     <div className="container">
//       <div className="about-section">
//         <div className="image-wrapper">
//           <img src={profileImg} alt="Machhindranath Kangane" />
//         </div>
//         <div className="content">
//           <div className="social_icons">
//             <a href="https://github.com/Machhindra-9" target="_blank" rel="noreferrer"><GitHubIcon/></a>
//             <a href="https://www.linkedin.com/in/machhindranath-kangane-8ab629256" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
//           </div>
//           <h1 className="hero-text">
//             <span className="greeting">Hi, I’m</span><br />
//             <span className="name"> Machhindranath</span><br />
//             <span className="greeting">Devops Engineer</span><br />
//           </h1>
//           {/* <h1>Hi, I'am <span className="highlight">Machhindranath</span></h1>
//           <p>Deveops Engineer</p> */}

//           <div className="mobile_social_icons">
//             <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
//             <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Main;
<div className="container">
  <div className="about-section">

    <div className="image-wrapper">
      <img src={profileImg} alt="Machhindranath Kangane" />
    </div>

    <div className="content">
      <div className="social_icons">
        <a href="https://github.com/Machhindra-9" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/machhindranath-kangane-8ab629256" target="_blank" rel="noreferrer"><LinkedInIcon />
        </a>
      </div>

      <h1 className="hero-text">
        <span className="greeting">Hi, I’m</span><br />
        <span className="name">Machhindranath</span><br />
        <span className="role">DevOps Engineer</span>
      </h1>

      <div className="mobile_social_icons">
        <a href="https://github.com/Machhindra-9" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/machhindranath-kangane-8ab629256" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
      </div>
    </div>

  </div>
</div>
  );
}

export default Main;
