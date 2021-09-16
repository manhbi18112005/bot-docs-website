import React from 'react';
import Link from '@docusaurus/Link';

export const Nav = ({link}) => {
  return (
    <div id="main-nav">
      <a href="/" className="logo">
        <img src="/img/title.png" alt="No Name Studio VN Logo" width="220px" />
      </a>
      <div className="links">
        <a
        href="#highlights"
        title="IntelAGENT - Features"
        className="scroll-to"
        >
        About
        </a>
        <div className="sep" />
        <a
        href="#features"
        title="IntelAGENT - Features"
        className="scroll-to"
        >
        Features
        </a>
        <div className="sep" />
        <Link to="/docs" title="IntelAGENT - Documentation">
          Documentation
        </Link>
        <div className="sep" />
        <a
          href="#contact-us"
          title="GraphQL Inspector - Contact us"
          className="scroll-to"
        >
          Contact
        </a>
        
      </div>
    </div>
  );
};