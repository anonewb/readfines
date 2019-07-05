import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBook() {
  return (
    <div>
      <button type="reset" className="search-icon-btn">
        <FontAwesomeIcon icon="search" />
      </button>
      {/* Favorite beverage: <FontAwesomeIcon icon="coffee" /> */}
      <input type="text" placeholder="Search Book" className="search-box" />
    </div>
  );
}
