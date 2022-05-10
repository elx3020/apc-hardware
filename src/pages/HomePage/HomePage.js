import React from "react";
import { connect } from "react-redux";

// components
import HeroHomePage from "../../components/PageSection/HeroHomePage/HeroHomePage";
import HomeCalculatorComponent from "../../components/PageSection/CalculatorComponent/HomeCalculatorComponent";
import ProductCategoryComponent from "../../components/PageSection/ProductSection/ProductCategoryComponent";
import { Container } from "react-bootstrap";

export const HomePage = (props) => {
  return (
    <div>
      <Container style={{ maxWidth: "80%" }}>
        <HeroHomePage />
        <HomeCalculatorComponent />
        <ProductCategoryComponent category="Computadoras" />
        <ProductCategoryComponent category="Procesadores" />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
