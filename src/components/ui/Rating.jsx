import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Rating({rating}) {
  return (
    <div className="book__ratings">
      {
        // For ratings we want to use an array and convert it into stars
        // So, we make an array, fill it with zeros and change it all into stars
        // We need to Math.floor because arrays have to be integer and book ratings can be floats.
        new Array(Math.floor(rating)).fill(0).map((_, index) => (
          <FontAwesomeIcon icon="star" key={index} />
        ))
      }
      {
        // If not integer, then print half star.
        !Number.isInteger(rating) && (
          <FontAwesomeIcon icon="star-half-alt" />
        )
      }
    </div>
  );
}
