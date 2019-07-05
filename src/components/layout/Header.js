import React, { Component } from "react";
import styled from "styled-components";
import SocialIcon from "./SocialIcon";
import Title from "./Title";
import SearchBook from "../books/SearchBook";
import CartPage from "../pages/CartPage";

export default class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      linkedin: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20.271"
          height="20.271"
          viewBox="0 0 20.271 20.271"
        >
          <defs>
            <style />
          </defs>
          <g
            id="_004-linkedin"
            data-name="004-linkedin"
            transform="translate(-85 -15)"
          >
            <path
              id="_004-linkedin-2"
              d="M10.136 0a10.136 10.136 0 1 0 10.135 10.136A10.137 10.137 0 0 0 10.136 0zM7.19 15.322H4.722V7.9H7.19zm-1.234-8.44H5.94a1.287 1.287 0 1 1 .032-2.566 1.287 1.287 0 1 1-.016 2.566zm10.135 8.441h-2.468v-3.974c0-1-.357-1.679-1.251-1.679a1.351 1.351 0 0 0-1.267.9 1.69 1.69 0 0 0-.081.6v4.147H8.557s.032-6.73 0-7.427h2.468v1.057a2.451 2.451 0 0 1 2.225-1.226c1.624 0 2.842 1.061 2.842 3.342zm0 0"
              className="cls-1"
              data-name="004-linkedin"
              transform="translate(85 15)"
              style={{ fill: "#646363" }}
            />
          </g>
        </svg>
      ),
      twitter: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20.194"
          height="20.194"
          viewBox="0 0 20.194 20.194"
        >
          <defs>
            <style />
          </defs>
          <g
            id="_002-twitter-logo-button"
            data-name="002-twitter-logo-button"
            transform="translate(-151 -15)"
          >
            <g
              id="Group_425"
              data-name="Group 425"
              transform="translate(151 15)"
            >
              <path
                id="Path_48"
                d="M10.1 0a10.1 10.1 0 1 0 10.1 10.1A10.108 10.108 0 0 0 10.1 0zm4.5 7.786c0 .1.007.2.007.3a6.611 6.611 0 0 1-10.174 5.57 4.693 4.693 0 0 0 3.441-.962A2.326 2.326 0 0 1 5.7 11.079a2.333 2.333 0 0 0 1.049-.039 2.324 2.324 0 0 1-1.861-2.279v-.029a2.315 2.315 0 0 0 1.052.29 2.328 2.328 0 0 1-.719-3.1 6.6 6.6 0 0 0 4.79 2.429 2.326 2.326 0 0 1 3.96-2.12 4.639 4.639 0 0 0 1.476-.564 2.334 2.334 0 0 1-1.022 1.283 4.62 4.62 0 0 0 1.335-.366 4.675 4.675 0 0 1-1.16 1.202z"
                className="cls-1"
                data-name="Path 48"
                style={{ fill: "#646363" }}
              />
            </g>
          </g>
        </svg>
      ),
      instagram: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <defs>
            <style />
          </defs>
          <g
            id="_005-instagram"
            data-name="005-instagram"
            transform="translate(-118 -15)"
          >
            <path
              id="Path_45"
              d="M210.755 208.878a1.878 1.878 0 1 1-1.877-1.878 1.878 1.878 0 0 1 1.877 1.878zm0 0"
              class="cls-1"
              data-name="Path 45"
              transform="translate(-80.878 -183.878)"
            />
            <path
              id="Path_46"
              d="M144.494 136.784a1.865 1.865 0 0 0-1.069-1.069 3.116 3.116 0 0 0-1.046-.194c-.594-.027-.772-.033-2.276-.033s-1.682.006-2.276.033a3.118 3.118 0 0 0-1.046.194 1.866 1.866 0 0 0-1.069 1.069 3.118 3.118 0 0 0-.194 1.046c-.027.594-.033.772-.033 2.276s.006 1.682.033 2.276a3.117 3.117 0 0 0 .194 1.046 1.865 1.865 0 0 0 1.069 1.069 3.112 3.112 0 0 0 1.046.194c.594.027.772.033 2.276.033s1.682-.006 2.276-.033a3.112 3.112 0 0 0 1.046-.194 1.865 1.865 0 0 0 1.069-1.069 3.119 3.119 0 0 0 .194-1.046c.027-.594.033-.772.033-2.276s-.006-1.682-.033-2.276a3.113 3.113 0 0 0-.194-1.046zM140.1 143a2.892 2.892 0 1 1 2.892-2.892A2.892 2.892 0 0 1 140.1 143zm3.007-5.223a.676.676 0 1 1 .676-.676.676.676 0 0 1-.674.675zm0 0"
              class="cls-1"
              data-name="Path 46"
              transform="translate(-12.103 -115.106)"
            />
            <path
              id="Path_47"
              d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm5.708 12.367a4.213 4.213 0 0 1-.267 1.394 2.936 2.936 0 0 1-1.679 1.679 4.216 4.216 0 0 1-1.394.267c-.612.028-.808.035-2.367.035s-1.755-.007-2.368-.035a4.216 4.216 0 0 1-1.394-.267 2.936 2.936 0 0 1-1.679-1.679 4.212 4.212 0 0 1-.267-1.394c-.028-.612-.035-.808-.035-2.368s.007-1.755.035-2.367a4.213 4.213 0 0 1 .267-1.394 2.938 2.938 0 0 1 1.68-1.679 4.217 4.217 0 0 1 1.394-.267c.612-.028.808-.035 2.367-.035s1.755.007 2.367.035a4.218 4.218 0 0 1 1.394.267 2.937 2.937 0 0 1 1.679 1.68 4.212 4.212 0 0 1 .267 1.394c.028.612.034.808.034 2.367s-.006 1.755-.034 2.367zm0 0"
              className="cls-1"
              data-name="Path 47"
              transform="translate(118 15)"
              style={{ fill: "#646363" }}
            />
          </g>
        </svg>
      ),
      facebook: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <defs>
            <style />
          </defs>
          <g
            id="_003-facebook-logo-button"
            data-name="003-facebook-logo-button"
            transform="translate(-184 -15)"
          >
            <g
              id="Group_426"
              data-name="Group 426"
              transform="translate(184 15)"
            >
              <path
                id="Path_49"
                d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0zm2.487 10.352H10.86v5.8H8.449v-5.8H7.3V8.3h1.149V6.977a2.261 2.261 0 0 1 2.433-2.433l1.786.007V6.54h-1.3a.491.491 0 0 0-.511.558V8.3H12.7z"
                className="cls-1"
                data-name="Path 49"
                style={{ fill: "#646363" }}
              />
            </g>
          </g>
        </svg>
      )
    };
  }

  render() {
    return (
      <Nav className="nav-container">
        <div className="flex-item socialicons-container">
          <SocialIcon media={this.state.linkedin} />
          <SocialIcon media={this.state.twitter} />
          <SocialIcon media={this.state.instagram} />
          <SocialIcon media={this.state.facebook} />
        </div>
        <div class="vertical-bar" />
        <SearchBook className="flex-item" />

        <Title className="flex-item" firstword="read" secondword="Fines" />

        <input className="flex-item" type="button" value="Menu" />
        <a className="flex-item" href="#">
          <img src="#" alt="profile" srcset="#" />
        </a>

        <CartPage className="flex-item" />
      </Nav>
    );
  }
}

const Nav = styled.div`
  width: 100%;
  height: 53.9px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
  background-image: linear-gradient(to bottom, #ffffff, #ffffff);
`;

// const SocialIcon = styled.div`
//   width: 20.3px;
//   height: 20.3px;
//   background-color: #646363;
// `;

// style={{ display: "inline", float: "left" }}
