import React from "react";
import { useEffect } from "react";
// redux
import { connect } from "react-redux";
import { getProducts } from "../../Redux/actions/dataActions";

// components
import HeroHomePage from "../../components/PageSection/HeroHomePage/HeroHomePage";
import HomeCalculatorComponent from "../../components/PageSection/CalculatorComponent/HomeCalculatorComponent";
import ProductCardContainer from "../../components/PageSection/Products/ProductCardContainer";
import { Container } from "react-bootstrap";

export const HomePage = (props) => {
  const { products } = props;

  const { loading } = props;

  useEffect(() => {
    props.getProducts();
  }, []);

  const pageContent = loading ? (
    <h1>Loading Page..</h1>
  ) : (
    <Container style={{ maxWidth: "80%" }}>
      <HeroHomePage data={products} />
      <HomeCalculatorComponent />
      <ProductCardContainer
        category="mouses"
        titleCategory="Mouse"
        data={products}
        nItems={3}
      />
      <ProductCardContainer
        category="cases"
        titleCategory="PC Cases"
        data={products}
        nItems={3}
      />
      <ProductCardContainer
        category="procesadores"
        titleCategory="Procesadores"
        data={products}
        nItems={4}
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
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
