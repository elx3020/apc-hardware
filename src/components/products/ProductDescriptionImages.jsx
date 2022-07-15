import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

export const ProductDescriptionImages = (props) => {
  const { images } = props.product;

  const [imageIndex, setImageIndex] = useState(0);

  const imagesSmall = images?.map((image, index) => {
    return (
      <div className="img-small-container">
        <img
          id={index}
          key={index}
          onMouseEnter={showLargeImage}
          src={image}
          alt={image.split("images/")[1]}
        />
      </div>
    );
  });

  function showLargeImage(e) {
    // console.log(e.target);
    setImageIndex(e.target.id);
  }

  return (
    <div className="images-shower-container">
      <div className="img-wrapper">
        <img src={images[imageIndex]} alt="product" />
      </div>

      <div className="imgs-row">{imagesSmall}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.data.productDescription,
  loading: state.ui.loading,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDescriptionImages);
