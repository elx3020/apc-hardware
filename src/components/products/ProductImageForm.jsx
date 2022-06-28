import React from "react";

import "./style.scss";
function ProductImageForm(props) {
  const { index, src, alt, isThumbnail } = props;

  const thumbnailImageClass = isThumbnail
    ? "thumb-button active"
    : "thumb-button";
  return (
    <div className="image-container">
      <img className="image-preview" src={src} alt={alt} />
      <div className="buttons-ui">
        <div
          id={index}
          onClick={props.handleThumbnailSelection}
          className={thumbnailImageClass}
        >
          thumbnail
        </div>
        <div
          id={index}
          onClick={props.handleDeleteImage}
          className="close-button"
        >
          X
        </div>
      </div>
    </div>
  );
}

export default ProductImageForm;
