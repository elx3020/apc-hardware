import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

export const ProductDescriptionImages = (props) => {
  const { images } = props.product;

  const [imageIndex, setImageIndex] = useState(0);

  const imagesSmall = images?.map((image, index) => {
    return (
      <div key={index} className="img-small-container">
        <img
          id={index}
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

  const largeImage =
    images === undefined ? (
      <div>Loading</div>
    ) : (
      <img src={images[imageIndex]} alt="product" />
    );

  return (
    <div className="images-shower-container">
      <div className="img-wrapper">{largeImage}</div>

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
