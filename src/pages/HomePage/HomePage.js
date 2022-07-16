import React from "react";
import { useEffect } from "react";
// redux
import { connect } from "react-redux";
import { getShortProducts } from "../../Redux/actions/dataActions";

// components
import HeroHomePage from "../../components/PageSection/HeroHomePage/HeroHomePage";
import HomeCalculatorComponent from "../../components/PageSection/CalculatorComponent/HomeCalculatorComponent";
import ProductCardContainer from "../../components/PageSection/Products/ProductCardContainer";

import { Container } from "react-bootstrap";

export const HomePage = (props) => {
  const { products } = props;

  const { loading } = props;

  useEffect(() => {
    props.getShortProducts();
  }, []);

  const pageContent = loading ? (
    <div style={{ height: "100vh" }}>
      <h1>Loading Page..</h1>
    </div>
  ) : (
    <Container>
      <HeroHomePage data={products} />
      <HomeCalculatorComponent />
      <ProductCardContainer
        category="componentes"
        titleCategory="Componentes para PC"
        data={products}
        nItems={3}
        loading={loading}
      />
      <ProductCardContainer
        category="ssd"
        titleCategory="SSD"
        data={products}
        nItems={3}
        loading={loading}
      />
      <ProductCardContainer
        category="ventiladores"
        titleCategory="Ventiladores y Disipadores"
        data={products}
        nItems={4}
        loading={loading}
      />
    </Container>
  );

  return <div>{pageContent}</div>;
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  products: state.data.products,
  loading: state.data.loading,
});

const mapDispatchToProps = {
  getShortProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
