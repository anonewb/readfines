import React from "react";

export default function Title(props) {
  return (
    <div>
      <h1
        style={{
          fontWeight: "300"
        }}
      >
        {props.firstword}
        <span>
          <strong>{props.secondword}</strong>
        </span>{" "}
      </h1>
    </div>
  );
}
