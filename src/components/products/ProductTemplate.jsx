import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// aws-amplify
import { API, graphqlOperation, Storage } from "aws-amplify";

// components
import ProductImageForm from "./ProductImageForm";
import InputTagComponent from "../layout/Forms/InputTagComponent";
// components bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// redux
import { connect } from "react-redux";
import {
  addProduct,
  getProduct,
  updatedProductData,
} from "../../Redux/actions/dataActions";

// helper functions

import { ImageThumbnail } from "../../utils/utilsFunctions";
import "./style.scss";
// get region and bucket address
import config from "../../aws-exports";

// config bucket aws
const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

// Product Template Component
function ProductTemplate(props) {
  // props
  const { mode, product, loading, productId, redirect } = props;

  // initial state
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
    shortDescription: "",
    description: "",
    discountStatus: false,
    discountAmount: 0,
  };

  // components states
  const [componentMode, setComponentMode] = useState("");
  const [imagesFilesToUpload, setImagesFileToUpload] = useState([]);
  const [imageToRemove, setImageToRemove] = useState([]);
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
      // upload images to the bucket
      handleImageUpload(e);
      // submit data... send productDetails
      props.addProduct(dataToUpload);
      // clear form and notify success or failure
      handleClear();
      redirect();
    } else if (componentMode === "update") {
      const updateData = { id: product.id, ...dataToUpload };
      handleImageUpload(e);
      removeImages();
      props.updatedProductData(updateData);
      redirect();
    }
  }

  function handleClear() {
    document.getElementById("create-product-form").reset();
    setImagesFileToUpload([]);
    setProductDetails(initialProductState);
  }

  // function responsable of updating categories

  function handleCategory(e) {
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
    const arrImages = [...imagesFilesToUpload].map((image) => image.url);
    return arrImages;
  };

  const getUploadedImages = (e) => {
    e.preventDefault();
    const { url, key } = generateImageUrl(e);

    setImagesFileToUpload([
      ...imagesFilesToUpload,
      { file: e.target.files[0], thumbnailImage: false, url: url, key: key },
    ]);
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
      let imageFiles = [...imagesFilesToUpload];
      for (let i = 0; i < imageFiles.length; i++) {
        imageFiles[i].thumbnailImage = false;
      }

      // imageFiles = imageFiles.map((item) => item["thumbnailImage"] = false);
      imageFiles[e.target.id].thumbnailImage = true;
      setImagesFileToUpload(imageFiles);
      const tumbnailImage = imageFiles[e.target.id].url;
      setProductDetails({ ...productDetails, thumbnailImage: tumbnailImage });
    } else if (componentMode === "update") {
      setProductDetails({
        ...productDetails,
        thumbnailImage: productDetails.images[e.target.id],
      });
    }
  }

  function FilterImageFile(e) {
    setImagesFileToUpload(
      imagesFilesToUpload.filter((item, index) => {
        return item.url !== e.target.attributes.url.nodeValue;
      })
    );
  }

  function removeImages() {
    if (imageToRemove.length > 0) {
      imageToRemove.forEach(async (imageKey) => {
        const key = imageKey.split("public/")[1];
        try {
          // remove image from bucket
          await Storage.remove(key, { level: "public" });
        } catch (err) {
          console.error(err);
        }
      });
    }
  }

  function handleRemoveImages(e) {
    if (componentMode === "create") {
      FilterImageFile(e);
    } else if (componentMode === "update") {
      if (imagesFilesToUpload.length > 0) {
        FilterImageFile(e);
      }

      if (productDetails.images[e.target.id] === undefined) return;
      const url = productDetails.images[e.target.id];
      setImageToRemove([...imageToRemove, url]);
      if (productDetails.thumbnailImage === url) {
        setProductDetails({ ...productDetails, thumbnailImage: "" });
      }
      // console.log(url);

      setProductDetails({
        ...productDetails,
        images: productDetails.images.filter(
          (image, index) => index.toString() !== e.target.id
        ),
      });
    }
  }

  const generatePreviewImages = () => {
    if (componentMode === "create") {
      if (imagesFilesToUpload.length > 0) {
        const imageObject = imagesFilesToUpload.map((imageFile, index) => {
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
              handleDeleteImage={handleRemoveImages}
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
        if (imagesFilesToUpload.length > 0) {
          const previewFiles = imagesFilesToUpload.map((item) => {
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
              handleDeleteImage={handleRemoveImages}
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
    if (imagesFilesToUpload.length < 1) return;

    for (let i = 0; i < imagesFilesToUpload.length; i++) {
      const file = imagesFilesToUpload[i].file;
      const { key, url } = imagesFilesToUpload[i];

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

  useEffect(() => {
    setProductDetails(initialProductState);
  }, []);

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
        shortDescription: product.shortDescription,
        description: product.description,
        discountStatus: product.discountStatus,
        discountAmount: product.discountAmount,
      };

      setProductDetails({ ...productDetails, ...fetchedProduct });
      // not been use but the idea is to compare the data and update only the one that is neccesary
      // setunModifiedProduct(fetchedProduct);
    }
  }, [product]);

  const componentTitle =
    componentMode === "create" ? "Crear Producto" : "Modificar Producto";

  const formButtons =
    componentMode === "create" ? (
      <div>
        <Button variant="primary" type="submit">
          Crear Producto
        </Button>{" "}
        <Button variant="danger" onClick={handleClear}>
          Limpiar Formulario
        </Button>
      </div>
    ) : (
      <div>
        <Button variant="primary" type="submit">
          Aplicar Cambios
        </Button>{" "}
      </div>
    );

  return (
    <div>
      <Container style={{ padding: "3% 0" }}>
        <h1>{componentTitle}</h1>
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
          {/*----------------------------------------------------------------- Precio y cantidad-------------------------------------------------------------------- */}

          <Row className="mb-3">
            <Form.Group as={Col} controlId="productPrice">
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
            </Form.Group>

            <Form.Group as={Col} controlId="productQuantity">
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
          </Row>

          {/* ----------------------------------------------------------------descuento------------------------------------------------------------------- */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="discountStatus">
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

            <Form.Group as={Col} controlId="productPrice">
              <Form.Label>Valor del Descuento</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                placeholder="Precio"
                value={productDetails.discountAmount}
                onChange={(e) =>
                  setProductDetails({
                    ...productDetails,
                    discountAmount: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Row>

          {/* ----------------------------------------------------------------modelo y fabricante------------------------------------------------------------------------ */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="productModel">
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

            <Form.Group as={Col} controlId="manufacturer">
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
          </Row>

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
          {/* ----------------------------------------------------------------Descripcion Corta------------------------------------------------------------------- */}

          <Form.Group className="mb-3" controlId="productshortDescription">
            <Form.Label>Descripcion Corta</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Descripcion corta.."
              value={productDetails.shortDescription}
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  shortDescription: e.target.value,
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

          {formButtons}
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
  updatedProductData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTemplate);
