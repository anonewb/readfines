import React, { Component } from "react";
import styled from "styled-components";

export default function SocialIcon(props) {
  return (
    <div>
      <a
        style={{ display: "inline", float: "left", padding: "5px auto" }}
        href="#"
      >
        {props.media}
      </a>
    </div>
  );
}
