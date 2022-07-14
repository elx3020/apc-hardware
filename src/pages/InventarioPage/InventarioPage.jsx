import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// components
import ProductListCard from "../../components/PageSection/Products/ProductListCard";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import GoToTop from "../../components/utils/GoToTop";

// react hooks
import { useState, useEffect } from "react";
// redux actions
import {
  getListProductsInventory,
  deleteProduct,
} from "../../Redux/actions/dataActions";
// aws stuff

import { Storage } from "aws-amplify";

import "./inventoryStyle.scss";

export const InventarioPage = (props) => {
  // TODO functionalty to be able to filter by category
  // TODO search by search bar string
  // TODO add a button to create new product
  // TODO

  const { loading, products } = props;
  const history = useHistory();

  // use effect to fetch products, create a hook that fetch the data and has a options input
  // depending on the options value, fetched data will be filter,
  // it can be use to filter by category, add pagination.
  useEffect(() => {
    loadDefaultState();
    props.getListProductsInventory({ limit: 10 });
  }, []);

  // array that keeps track of selected items
  // is use for delete items,
  const [selectItems, setSelectedItems] = useState([]);
  // keeps track if selectAll button has to toggle it's functionality
  const [isAllCheck, setIsAllCheck] = useState(false);
  // toggle the visibility of the checkbox
  const [toggleSelect, setToggleSelect] = useState(false);

  function loadDefaultState() {
    setSelectedItems([]);
    setToggleSelect(false);
    setIsAllCheck(false);
  }

  // handle single item selection
  // recieve event which contains id, then check if is in products, creates a copy and add the copy to selectedItemsArray;

  function handleSelectedItem(e) {
    const elementId = e.target.id;
    if (e.target.checked) {
      const itemToAdd = products.find((item) => item.id === elementId);

      setSelectedItems([
        ...selectItems,
        { id: itemToAdd.id, images: itemToAdd.images },
      ]);
    } else {
      setSelectedItems(selectItems.filter((item) => item.id !== elementId));
    }
  }

  // select all item, adds all items to the selectItemsArray and keeps track of itself
  function addAllItems() {
    setIsAllCheck((prev) => !prev);
    if (!toggleSelect) {
      setToggleSelect((prev) => !prev);
    }
    setSelectedItems(
      products.map((product) => {
        return { id: product.id, images: product.images };
      })
    );
    if (isAllCheck) {
      setSelectedItems([]);
    }
  }

  // handler for delete button. It deletes a single item

  function removeItem(e) {
    const userOption = window.confirm("Deseas eliminar el producto?");
    if (userOption) {
      const itemId = e.target.id;
      const itemToRemove = products.find((element) => element.id === itemId);
      // remove from bucket
      deleteProductImages(itemToRemove);
      // remove from data base
      props.deleteProduct({ id: itemToRemove.id });
    }
  }

  // handle function to toggle the checkboxes and make a selection.

  function handleSelect() {
    setToggleSelect((prev) => !prev);
    setIsAllCheck(false);
    setSelectedItems([]);
  }

  // handler to remove all elements that are selected

  function removeSelectedItems() {
    if (selectItems.length > 0) {
      const userOption = window.confirm(
        "Deseas eliminar los elementos seleccionados?"
      );
      if (userOption) {
        console.log("item Removed");
        selectItems.forEach((selectedItem) => {
          deleteProductImages(selectedItem);
          props.deleteProduct({ id: selectedItem.id });
        });
      }
    }
  }

  // helper function to remove images from the bucket

  function deleteProductImages(product) {
    if (product.images.length > 0) {
      product.images.forEach(async (imageUrl) => {
        const key = imageUrl.split("public/")[1];
        try {
          // remove image from bucket
          await Storage.remove(key, { level: "public" });
        } catch (err) {
          console.error(err);
        }
      });
    }
  }

  // TODO implement a search option

  function searchItems(e) {
    e.preventDefault();
    alert("la busqueda todavia no esta implementada");
  }

  // redirect to create productPage
  function createProduct() {
    history.push("/admin-apcec/crear-producto");
  }

  // render the items as the list if they are, when loading show a loading message, if no item is found show message that nothing can be shown
  const inventoryItems = loading ? (
    <div style={{ height: "100vh" }}>
      <h1>Loading...</h1>
    </div>
  ) : products.length > 0 ? (
    products.map((product, index) => {
      return (
        <ProductListCard
          key={index}
          name={product.name}
          quantity={product.quantity}
          price={product.price}
          id={product.id}
          categories={product.categories}
          image={product.images[0]}
          isSelected={selectItems.some((item) => item.id === product.id)}
          handleSelection={handleSelectedItem}
          toggleSelect={toggleSelect}
          deleteProduct={removeItem}
        />
      );
    })
  ) : (
    <div style={{ height: "100vh" }}>
      <h1>Vaya no hay nada que mostrar..</h1>
    </div>
  );

  const pageTools = (
    <div className="tool-bar">
      <Form className="d-flex" onSubmit={searchItems}>
        <FormControl
          type="search"
          placeholder="Buscar"
          className="me-2"
          aria-label="Buscar"
        ></FormControl>
        <Button variant="outline-success" type="submit">
          Buscar
        </Button>
      </Form>

      <div className="button-wrapper">
        <Button onClick={handleSelect}>Seleccionar</Button>{" "}
        <Button onClick={addAllItems}>Seleccionar todo</Button>{" "}
        <Button onClick={removeSelectedItems}>Borrar</Button>{" "}
        <Button variant="success" onClick={createProduct}>
          {" "}
          Añadir Nuevo +
        </Button>
      </div>
    </div>
  );

  const pageContent = (
    <Container>
      {pageTools}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "2vw",
          padding: "2vw 0",
        }}
      >
        {inventoryItems}
      </div>
      <GoToTop />
    </Container>
  );

  return pageContent;
};

const mapStateToProps = (state) => ({
  products: state.data.listProductsInventory,
  loading: state.data.loading,
});

const mapDispatchToProps = {
  getListProductsInventory,
  deleteProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(InventarioPage);
