import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

// components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

// data actions

import { addNews } from "../../../Redux/actions/dataActions";

// aws config
import { Storage } from "aws-amplify";
import config from "../../../aws-exports";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

function AddImageWithCaption(props) {
  // const imageData = {file: {}, alt: '', caption: ''}

  const [imageData, setImageData] = useState({
    file: null,
    alt: "",
    caption: "",
    url: "",
    key: "",
  });

  useEffect(() => {
    generateImageUrl();
  }, [imageData.file]);

  const isPreview = imageData.file !== null;

  function handleSubmit(e) {
    e.preventDefault();

    const imageDataToSend = {
      src: imageData.url,
      alt: imageData.alt,
      caption: imageData.caption,
    };
    props.addNews(imageDataToSend);
    handleImageUpload();
    clearForm();
  }

  function clearForm() {
    document.getElementById("add-news-form").reset();

    alert("La noticia fue añadida exitosamente");
  }

  const generateImageUrl = () => {
    if (imageData.file === null) return;
    const file = imageData.file;
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const key = `images/${uuidv4()}${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    setImageData({ ...imageData, url: url, key: key });
  };

  const handleImageUpload = async () => {
    const { key, url } = imageData;

    try {
      await Storage.put(key, imageData.file, {
        level: "public",
        contentType: imageData.file.type,
      });
    } catch (err) {
      console.error(err);
    }
  };

  function generatepreviewImage() {
    if (isPreview) {
      const imageUrl = URL.createObjectURL(imageData.file);
      return (
        <div style={{ padding: "5vh 0", height: "400px" }}>
          <img src={imageUrl} alt={imageData.alt} />
        </div>
      );
    } else {
      return <Form.Text className="text-muted">Subir Imagenes Aqui</Form.Text>;
    }
  }

  const previewImage = generatepreviewImage();

  return (
    <Form id="add-news-form" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          onChange={(e) => {
            setImageData({ ...imageData, file: e.target.files[0] });
          }}
          required
        ></Form.Control>
        {previewImage}
      </Form.Group>
      <Form.Group>
        <Form.Label>Image alt</Form.Label>
        <Form.Control
          type="text"
          placeholder="Image Alt:"
          onChange={(e) => {
            setImageData({ ...imageData, alt: e.target.value });
          }}
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Caption</Form.Label>
        <Form.Control
          type="text"
          placeholder="News Caption"
          onChange={(e) => {
            setImageData({ ...imageData, caption: e.target.value });
          }}
          required
        ></Form.Control>
      </Form.Group>{" "}
      <Button variant="primary" type="submit">
        Crear Producto
      </Button>{" "}
    </Form>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addNews,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddImageWithCaption);
