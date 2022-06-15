import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// aws-amplify
import { API, graphqlOperation, Storage } from "aws-amplify";
import { Authenticator, AmplifySignOut } from "@aws-amplify/ui-react";

// components bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

// redux
import { connect } from "react-redux";
import { addProduct } from "../../Redux/actions/dataActions";

import "./style.scss";

// get region and bucket address
import config from "../../aws-exports";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

function CreateProductComponent(props) {
  // components states
  const [imagesFile, setImagesFile] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    quantity: "",
    model: "",
    images: [],
    manufacturer: "",
    description: "",
    discountStatus: false,
  });

  //add redirect after

  function handleSubmit(e) {
    e.preventDefault();
    props.addProduct(productDetails);
    handleImageUpload(e);
  }

  // get upload images into the state of the component

  const getUploadedImages = (e) => {
    e.preventDefault();
    setImagesFile([...imagesFile, ...e.target.files]);
  };

  // images get added and get a previzualization;

  const generatePreviewImages = () => {
    if (imagesFile.length > 0) {
      const imageObject = imagesFile.map((file) => {
        const src = URL.createObjectURL(file);
        return (
          <div className="image-container">
            <img className="image-preview" src={src} alt="" />
          </div>
        );
      });
      return imageObject;
    } else {
      return <Form.Text className="text-muted">Subir Imagenes Aqui</Form.Text>;
    }
  };

  const previewImages = generatePreviewImages();

  const generateImageUrl = () => {
    for (let i = 0; i < imagesFile.length; i++) {
      const file = imagesFile[i];
      const extension = file.name.split(".")[1];
      const name = file.name.split(".")[0];
      const key = `images/${uuidv4()}${name}.${extension}`;
      const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
      setImageData([...imageData, { key: key, url: url }]);
      const images = productDetails.images;
      setProductDetails({ ...productDetails, images: [...images, url] });
    }
  };

  // handle image upload
  const handleImageUpload = async () => {
    for (let i = 0; i < imageData.length; i++) {
      const file = imagesFile[i];
      const { key, url } = imageData[i];

      try {
        await Storage.put(key, file, {
          level: "public",
          contentType: file.type,
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  // effect generate url after image is added to the ui

  useEffect(() => {
    generateImageUrl();
  }, [imagesFile]);

  return (
    <div>
      <Container style={{ padding: "3% 0" }}>
        <h2>Crear Producto</h2>
        <Form onSubmit={handleSubmit}>
          {/* Nombre */}
          <Form.Group className="mb-3" controlId="productName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              onChange={(e) => {
                setProductDetails({ ...productDetails, name: e.target.value });
              }}
              required
            />
          </Form.Group>
          {/* Precio */}
          <Form.Group className="mb-3" controlId="productPrice">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Precio"
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  price: e.target.value,
                })
              }
            />
            {/* Cantidad */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="productQuantity">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              placeholder="Cantidad"
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  quantity: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="productModel">
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Modelo"
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  model: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="productImages">
            <Form.Label>Imagenes</Form.Label>
            <Form.Control
              type="file"
              accept="image/jpg"
              onChange={getUploadedImages}
              multiple
            />
            <div className="form-image">{previewImages}</div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="manufacturer">
            <Form.Label>Fabricante</Form.Label>
            <Form.Control
              type="text"
              placeholder="Fabricante"
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  manufacturer: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="productDescription">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Descripcion del producto.."
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  description: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="discountStatus">
            <Form.Check
              type="checkbox"
              id="discountStatus"
              label="Descuento"
              checked={productDetails.discountStatus}
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  discountStatus: e.target.checked,
                })
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Crear Producto
          </Button>
        </Form>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProductComponent);
