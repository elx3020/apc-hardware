import React, { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";
// aws-amplify
import { API, graphqlOperation, Storage } from "aws-amplify";
import { Authenticator, AmplifySignOut } from "@aws-amplify/ui-react";

// components
import ProductImageForm from "./ProductImageForm";
import InputTagComponent from "../layout/Forms/InputTagComponent";
// components bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

// redux
import { connect } from "react-redux";
import {
  addProduct,
  getProduct,
  updatedProductImages,
  updatedProductData,
} from "../../Redux/actions/dataActions";

// helper functions

import { ImageThumbnail } from "../../utils/utilsFunctions";

import "./style.scss";

// get region and bucket address
import config from "../../aws-exports";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

function ProductTemplate(props) {
  const { mode, product, loading, productId } = props;

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
  const [componentMode, setComponentMode] = useState("");
  const [imagesFile, setImagesFile] = useState([]);
  const [productDetails, setProductDetails] = useState(initialProductState);
  const [unModifiedProduct, setunModifiedProduct] = useState({});

  //add function responsable to submit data

  function handleSubmit(e) {
    e.preventDefault();

    let newImagesArray = updateImageArray();

    const dataToUpload = {
      ...productDetails,
      images: [...productDetails.images, ...newImagesArray],
    };
    if (componentMode === "create") {
      // update images url to the product details object

      // submit data... send productDetails
      props.addProduct(dataToUpload);
      // upload images to the bucket
      handleImageUpload(e);
      // clear form and notify success or failure
      handleClear();
    } else if (componentMode === "update") {
      const updateData = { id: product.id, ...dataToUpload };
      handleImageUpload(e);
      props.updatedProductData(updateData);
    }
  }

  function handleClear() {
    document.getElementById("create-product-form").reset();
    setImagesFile([]);
    setProductDetails(initialProductState);
  }

  // function responsable of updating categories

  function handleCategory(e) {
    console.log(e.target);
    const categoryText = document.getElementById("category-id");
    if (categoryText.value === "") return;
    setProductDetails({
      ...productDetails,
      categories: [...productDetails.categories, categoryText.value],
    });
    categoryText.value = "";
  }

  const removeCategory = (e) => {
    setProductDetails({
      ...productDetails,
      categories: productDetails.categories.filter(
        (category) => category !== e.target.outerText
      ),
    });
  };

  const updateImageArray = () => {
    const arrImages = [...imagesFile].map((image) => image.url);
    // setProductDetails({ ...productDetails, images: arrImages });
    return arrImages;
  };

  const getUploadedImages = (e) => {
    e.preventDefault();
    const { url, key } = generateImageUrl(e);

    setImagesFile([
      ...imagesFile,
      { file: e.target.files[0], thumbnailImage: false, url: url, key: key },
    ]);

    updateImageArray();
  };

  const generateImageUrl = (e) => {
    const file = e.target.files[0];
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const key = `images/${uuidv4()}${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    return { url: url, key: key };
  };

  function handleThumbnailSelection(e) {
    if (componentMode === "create") {
      let imageFiles = [...imagesFile];
      for (let i = 0; i < imageFiles.length; i++) {
        imageFiles[i].thumbnailImage = false;
      }

      // imageFiles = imageFiles.map((item) => item["thumbnailImage"] = false);
      imageFiles[e.target.id].thumbnailImage = true;
      setImagesFile(imageFiles);
      const tumbnailImage = imageFiles[e.target.id].url;
      setProductDetails({ ...productDetails, thumbnailImage: tumbnailImage });
    } else if (componentMode === "update") {
      console.log("hey");
      setProductDetails({
        ...productDetails,
        thumbnailImage: productDetails.images[e.target.id],
      });
    }
  }

  function FilterImageFile(e) {
    setImagesFile(
      imagesFile.filter((item, index) => {
        return item.url !== e.target.attributes.url.nodeValue;
      })
    );
  }

  function handleDeleteImage(e) {
    if (componentMode === "create") {
      FilterImageFile(e);
    } else if (componentMode === "update") {
      if (imagesFile.length > 0) {
        FilterImageFile(e);
      }
      removeImages(e);
    }
  }

  async function removeImages(e) {
    if (productDetails.images[e.target.id] === undefined) return;
    let filename = productDetails.images[e.target.id];
    filename = filename.split("public/")[1];
    const key = filename;
    console.log(key);

    try {
      // remove image from bucket
      await Storage.remove(key, { level: "public" });

      // remove images from client data
      // remove image from array
      const removeImageArray = productDetails.images.filter((item, index) => {
        return index.toString() !== e.target.id;
      });
      // remove thumbnail reference is the image was the thumbnail image
      if (
        productDetails.thumbnailImage === productDetails.images[e.target.id]
      ) {
        setProductDetails({ ...productDetails, thumbnailImage: "" });
      }
      setProductDetails({ ...productDetails, images: removeImageArray });

      // remove image from database
      props.updatedProductImages(product.id, removeImageArray);
    } catch (err) {
      console.error(err);
    }
  }

  const generatePreviewImages = () => {
    // console.log(imagesFile.map((img) => img.file));
    // imagesFile.length > 0
    if (componentMode === "create") {
      if (imagesFile.length > 0) {
        const imageObject = imagesFile.map((imageFile, index) => {
          const src = URL.createObjectURL(imageFile.file);
          return (
            <ProductImageForm
              key={index}
              isThumbnail={imageFile.thumbnailImage}
              id={index}
              src={src}
              url={imageFile.url}
              alt={imageFile.file.name.split(".")[0]}
              handleThumbnailSelection={handleThumbnailSelection}
              handleDeleteImage={handleDeleteImage}
            />
          );
        });
        return imageObject;
      } else {
        return (
          <Form.Text className="text-muted">Subir Imagenes Aqui</Form.Text>
        );
      }
    } else if (componentMode === "update") {
      if (productDetails.images.length > 0) {
        let arrayImageObject = ImageThumbnail(
          productDetails.thumbnailImage,
          productDetails.images
        );
        if (imagesFile.length > 0) {
          const previewFiles = imagesFile.map((item) => {
            const src = URL.createObjectURL(item.file);
            return {
              src: src,
              thumbnailImage: item.thumbnailImage,
              url: item.url,
            };
          });
          arrayImageObject = [...arrayImageObject, ...previewFiles];
        }

        const previewImage = arrayImageObject.map((item, index) => {
          return (
            <ProductImageForm
              key={index}
              isThumbnail={item.thumbnailImage}
              id={index}
              src={item.src}
              url={item.url}
              alt={"preview"}
              handleThumbnailSelection={handleThumbnailSelection}
              handleDeleteImage={handleDeleteImage}
            />
          );
        });
        return previewImage;
      }
    }
  };

  const previewImages = generatePreviewImages();

  // handle image upload
  const handleImageUpload = async () => {
    if (imagesFile.length < 1) return;

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

  // get data only uf the mode is for update the info
  // TODO create a query that fetch only the data required
  useEffect(() => {
    setComponentMode(mode);
    if (componentMode === "update") {
      props.getProduct(productId);
    }
  }, [componentMode]);

  // not been use but the idea is to compare the data and update only the one that is neccesary
  useEffect(() => {
    if (product === undefined) return;

    if (componentMode === "update") {
      const fetchedProduct = {
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        model: product.model,
        rating: product.rating,
        numberRatings: product.numberRatings,
        categories: product.categories,
        thumbnailImage: product.thumbnailImage,
        images: product.images,
        manufacturer: product.manufacturer,
        description: product.description,
        discountStatus: product.discountStatus,
      };

      setProductDetails({ ...productDetails, ...fetchedProduct });
      setunModifiedProduct(fetchedProduct);
    }
  }, [product]);

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
              value={productDetails.name}
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
              value={productDetails.price}
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
              value={productDetails.quantity}
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
              value={productDetails.model}
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  model: e.target.value,
                })
              }
              required
            />
          </Form.Group>
          {/* ----------------------------------------------------------------categorias------------------------------------------------------------------- */}
          <InputTagComponent
            categoryArray={productDetails.categories}
            handleAdd={handleCategory}
            handleRemove={removeCategory}
          />
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
              value={productDetails.manufacturer}
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
              value={productDetails.description}
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

const mapStateToProps = (state) => ({
  product: state.data.productDescription,
  loading: state.data.loading,
});

const mapDispatchToProps = {
  addProduct,
  getProduct,
  updatedProductImages,
  updatedProductData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTemplate);
