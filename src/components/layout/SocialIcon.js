import React, { Component } from "react";
import styled from "styled-components";

export default function SocialIcon(props) {
  return (
    <div style={{ padding: "5px" }}>
      <a href="#">{props.media}</a>
    </div>
  );
}
