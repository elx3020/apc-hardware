import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// aws-amplify
import { API, graphqlOperation, Storage } from "aws-amplify";
import { Authenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import ProductImageForm from "./ProductImageForm";
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

function ProductTemplate(props) {
  const initialProductState = {
    name: "",
    price: "",
    quantity: "",
    model: "",
    rating: 0,
    numberRatings: 0,
    categories: [],
    thumbnailImage: "",
    images: [],
    manufacturer: "",
    description: "",
    discountStatus: false,
  };

  // components states
  const [imagesFile, setImagesFile] = useState([]);
  const [productDetails, setProductDetails] = useState(initialProductState);

  //add redirect after

  function handleSubmit(e) {
    e.preventDefault();
    // submit data... send productDetails
    props.addProduct(productDetails);
    // upload images to the bucket
    handleImageUpload(e);
    // clear form and notify success or failure
    handleClear();
  }

  function handleClear() {
    document.getElementById("create-product-form").reset();
    setImagesFile([]);
    setProductDetails(initialProductState);
  }

  function handleCategory() {
    const categoryText = document.getElementById("category-id");
    if (categoryText.value === "") return;
    setProductDetails({
      ...productDetails,
      categories: [...productDetails.categories, categoryText.value],
    });
    categoryText.value = "";
  }

  // get upload images into the state of the component

  const getUploadedImages = (e) => {
    e.preventDefault();
    const { url, key } = generateImageUrl(e);

    setImagesFile([
      ...imagesFile,
      { file: e.target.files[0], thumbnailImage: false, url: url, key: key },
    ]);
  };

  const updateImageArray = () => {
    const arrImages = [...imagesFile].map((image) => image.url);
    setProductDetails({ ...productDetails, images: arrImages });
  };

  const generateImageUrl = (e) => {
    const file = e.target.files[0];
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const key = `images/${uuidv4()}${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    return { url: url, key: key };
  };

  // images get added and get a previzualization;

  const addCategory = () => {
    if (productDetails.categories.length > 0) {
      const categoriesTag = productDetails.categories.map((category, index) => {
        return (
          <div key={index} className="category-item" onClick={removeCategory}>
            <p>{category}</p>
          </div>
        );
      });
      return categoriesTag;
    }
  };

  const removeCategory = (e) => {
    setProductDetails({
      ...productDetails,
      categories: productDetails.categories.filter(
        (category) => category !== e.target.outerText
      ),
    });
  };

  function handleThumbnailSelection(e) {
    let imageFiles = [...imagesFile];
    console.log(imageFiles);
    for (let i = 0; i < imageFiles.length; i++) {
      imageFiles[i].thumbnailImage = false;
    }

    // imageFiles = imageFiles.map((item) => item["thumbnailImage"] = false);
    imageFiles[e.target.id].thumbnailImage = true;
    setImagesFile(imageFiles);
    const tumbnailImage = imageFiles[e.target.id].url;
    setProductDetails({ ...productDetails, thumbnailImage: tumbnailImage });
  }

  function handleDeleteImage(e) {
    setImagesFile(
      imagesFile.filter((item, index) => {
        return index.toString() !== e.target.id;
      })
    );
  }
  const categoriesTag = addCategory();

  const generatePreviewImages = () => {
    // console.log(imagesFile.map((img) => img.file));
    // imagesFile.length > 0
    if (imagesFile.length > 0) {
      const imageObject = imagesFile.map((imageFile, index) => {
        const src = URL.createObjectURL(imageFile.file);
        return (
          <ProductImageForm
            key={index}
            isThumbnail={imageFile.thumbnailImage}
            index={index}
            src={src}
            alt={imageFile.file.name.split(".")[0]}
            handleThumbnailSelection={handleThumbnailSelection}
            handleDeleteImage={handleDeleteImage}
          />
        );
      });
      return imageObject;
    } else {
      return <Form.Text className="text-muted">Subir Imagenes Aqui</Form.Text>;
    }
  };

  const previewImages = generatePreviewImages();

  // handle image upload
  const handleImageUpload = async () => {
    for (let i = 0; i < imagesFile.length; i++) {
      const file = imagesFile[i].file;
      const { key, url } = imagesFile[i];

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
    updateImageArray();
  }, [imagesFile]);

  return (
    <div>
      <Container style={{ padding: "3% 0" }}>
        <h2>Crear Producto</h2>
        <Form id="create-product-form" onSubmit={handleSubmit}>
          {/*----------------------------------------------------------------- Nombre------------------------------------------------------------------- */}
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
          {/*----------------------------------------------------------------- Precio-------------------------------------------------------------------- */}
          <Form.Group className="mb-3" controlId="productPrice">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              placeholder="Precio"
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  price: e.target.value,
                })
              }
              required
            />
            {/* Cantidad */}
          </Form.Group>
          {/* ----------------------------------------------------------------Cantidad------------------------------------------------------------------- */}
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
              required
            />
          </Form.Group>
          {/* ----------------------------------------------------------------modelo------------------------------------------------------------------------ */}
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
              required
            />

            {/* ----------------------------------------------------------------categorias------------------------------------------------------------------- */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="category-id">
            <Form.Label>Categoria</Form.Label>
            <Form.Control type="text" placeholder="Escribe una categoria" />
            <div className="category-wrapper">{categoriesTag}</div>
          </Form.Group>
          <Button onClick={handleCategory}>Añadir Categoria</Button>
          {/* ----------------------------------------------------------------images------------------------------------------------------------------- */}
          <Form.Group className="mb-3" controlId="productImages">
            <Form.Label>Imagenes</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={getUploadedImages}
              multiple
            />
            <div className="form-image">{previewImages}</div>
          </Form.Group>
          {/* ----------------------------------------------------------------fabricante------------------------------------------------------------------- */}
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
              required
            />
          </Form.Group>
          {/* ----------------------------------------------------------------descripcion------------------------------------------------------------------- */}
          <Form.Group className="mb-3" controlId="productDescription">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              as="textarea"
              rows={20}
              placeholder="Descripcion del producto.."
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  description: e.target.value,
                })
              }
              required
            />
          </Form.Group>
          {/* ----------------------------------------------------------------descuento------------------------------------------------------------------- */}
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
          </Button>{" "}
          <Button onClick={handleClear}>Limpiar Formulario</Button>
        </Form>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTemplate);
