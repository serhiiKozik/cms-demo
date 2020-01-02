import React from "react";
import { FullWidthContainer, ContentContainer } from "../components/Containers";

const Header = () => (
  <FullWidthContainer className="nav-bar-container">
    <ContentContainer className="row align-items-center">
      <span className="logo">Netlify Demo</span>
      <nav className="nav-bar">
        <a className="nav-item" href="/">
          Home
        </a>
        <a className="nav-item" href="/about">
          About
        </a>
        <a className="nav-item" href="/admin/">
          Admin
        </a>
      </nav>
    </ContentContainer>
  </FullWidthContainer>
);

export default Header;
