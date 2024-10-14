import React from 'react';
import '../Footer/footer.css'; // You can create this CSS file to style the footer
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="footer"  id="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Nikita Bhade. All Rights Reserved.</p>
          <ul className="social-links">
            <li>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <GitHubIcon/>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon/>
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;