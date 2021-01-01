import React from 'react';
import styled from 'styled-components';
import Menu from 'Atoms/Menu';

const Foot = styled.footer`
  padding: 0 3% 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media print {
    display: none;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Footer = () => (
  <Foot>
    <div>
      &copy; {new Date().getFullYear()} Asmin Bhujel
      <br />
      Made with 💗 by{' '}
      <a
        href="https://github.com/sundarshahi"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sundar Shahi Thakuri
      </a>
      .
    </div>
    <nav>
      <Menu data-testid="footer-menu">
        <li data-testid="github">
          <a
            href="https://github.com/sundarshahi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li data-testid="linkedin">
          <a
            href="https://www.linkedin.com/in/asminbhujel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li data-testid="twitter">
          <a
            href="https://twitter.com/asminbhujel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
      </Menu>
    </nav>
  </Foot>
);

export default Footer;
