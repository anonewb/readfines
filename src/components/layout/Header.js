import React, { component } from "react";
import styled from "styled-components";

const Header = props => {
  return (
    <div>
      <Nav>
        <div>
          <nav>
            <ul className="social-media-icons">
              {/* <Li>
                <li>
                  socialIcons style={{ display: "inline", float: "left" }}>
                  <img src="#" alt="linkedin" srcset="#" />
                </li>
              </Li> */}
              <li style={{ display: "inline", float: "left" }}>
                <img src="#" alt="linkedin" srcset="#" />
              </li>
              <li style={{ display: "inline", float: "left" }}>
                <img src="#" alt="linkedin" srcset="#" />
              </li>
              <li style={{ display: "inline", float: "left" }}>
                <img src="#" alt="linkedin" srcset="#" />
              </li>
              <li style={{ display: "inline", float: "left" }}>
                <img src="#" alt="linkedin" srcset="#" />
              </li>
            </ul>
            <input type="text" />
            <h1>Readfines</h1>
            <a href="#">
              <img src="#" alt="cart" srcset="#" />
            </a>
            <a href="#">
              <img src="#" alt="profile" srcset="#" />
            </a>
            <input type="button" value="Menu" />
          </nav>
        </div>
      </Nav>
    </div>
  );
};

const Nav = styled.div`
  width: 100%;
  height: 53.9px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
  background-image: linear-gradient(to bottom, #ffffff, #ffffff);
`;

// style={{ display: "inline", float: "left" }}

export default Header;
