import React from "react";
import { useEffect } from "react";
// redux
import { connect } from "react-redux";
// import { setLoading, getProducts } from "../../Redux/actions/dataActions";

// components
import HeroHomePage from "../../components/PageSection/HeroHomePage/HeroHomePage";
import HomeCalculatorComponent from "../../components/PageSection/CalculatorComponent/HomeCalculatorComponent";
import ProductCardContainer from "../../components/PageSection/Products/ProductCardContainer";
import { Container } from "react-bootstrap";

export const HomePage = (props) => {
  const products = props.products;

  const { loading } = props;

  useEffect(() => {
    // props.getProducts();
  }, []);

  const pageContent = loading ? (
    <h1>Loading Page..</h1>
  ) : (
    <div>
      <Container style={{ maxWidth: "80%" }}>
        <HeroHomePage data={products} />
        <HomeCalculatorComponent />
        <ProductCardContainer
          category="ratones"
          titleCategory="Mouse"
          data={products}
          nItems={3}
        />
        <ProductCardContainer
          category="computer"
          titleCategory="Computadoras"
          data={products}
          nItems={3}
        />
      </Container>
    </div>
  );

  return <div>{pageContent}</div>;
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  products: state.data.products,
  loading: state.data.loading,
});

const mapDispatchToProps = {
  // setLoading,
  // getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
