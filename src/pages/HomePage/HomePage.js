import React from "react";
import { useEffect } from "react";
// redux
import { connect } from "react-redux";
import { setLoading, getProducts } from "../../Redux/actions/dataActions";

// components
import HeroHomePage from "../../components/PageSection/HeroHomePage/HeroHomePage";
import HomeCalculatorComponent from "../../components/PageSection/CalculatorComponent/HomeCalculatorComponent";
import ProductCategoryComponent from "../../components/PageSection/ProductSection/ProductCategoryComponent";
import { Container } from "react-bootstrap";

export const HomePage = (props) => {
  const { loading } = props.ui;

  const products = props.products;

  useEffect(() => {
    props.setLoading();
    props.getProducts();
    console.log(products);
  }, []);

  return (
    <div>
      <Container style={{ maxWidth: "80%" }}>
        <HeroHomePage />
        <HomeCalculatorComponent />
        <ProductCategoryComponent category="Computadoras" data={products} />
        <ProductCategoryComponent category="Procesadores" data={products} />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  products: state.data.products,
});

const mapDispatchToProps = {
  setLoading,
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
