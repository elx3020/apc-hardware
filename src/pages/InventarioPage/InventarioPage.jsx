import React from "react";
import { connect } from "react-redux";

// components
import ProductListCard from "../../components/PageSection/Products/ProductListCard";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

// react hooks
import { useState, useEffect } from "react";
// redux actions
import { getListProductsInventory } from "../../Redux/actions/dataActions";

import "./inventoryStyle.scss";

export const InventarioPage = (props) => {
  useEffect(() => {
    props.getListProductsInventory();
    loadDefaultState();
  }, []);

  const { loading, products } = props;

  const [selectItems, setSelectedItems] = useState([]);
  const [toggleSelect, setToggleSelect] = useState(false);

  function loadDefaultState() {
    setSelectedItems([]);
    setToggleSelect(false);
  }

  function addItem(e) {
    const elementId = e.target.id;
    if (e.target.checked) {
      setSelectedItems([...selectItems, elementId]);
    } else {
      setSelectedItems(selectItems.filter((ids) => ids !== elementId));
    }
  }

  function addAllItems() {
    console.log("addAllitems");
  }

  function removeItems(e) {
    const element = e.target;
    console.log(element);
  }

  function handleSelect() {
    setToggleSelect((prev) => !prev);
    setSelectedItems([]);
  }

  function removeSelectedItems() {
    const userOption = window.confirm(
      "Deseas eliminar los elementos seleccionados?"
    );
    if (userOption) {
      console.log("item Removed");
    }
  }

  const inventoryItems = products.map((product, index) => {
    return (
      <ProductListCard
        key={index}
        name={product.name}
        quantity={product.quantity}
        price={product.price}
        id={product.id}
        image={product.images[0]}
        loading={loading}
        addItem={addItem}
        toggleSelect={toggleSelect}
      />
    );
  });

  function searchItems() {}

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
        <Button onClick={removeSelectedItems}>Borrar</Button>
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
    </Container>
  );

  return pageContent;
};

const mapStateToProps = (state) => ({
  products: state.data.products,
  loading: state.data.loading,
});

const mapDispatchToProps = {
  getListProductsInventory,
};

export default connect(mapStateToProps, mapDispatchToProps)(InventarioPage);
