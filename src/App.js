import "./App.css";

// react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Fragment } from "react";

// components
import NavBar from "./components/layout/NavBar/NavBar";
import Footer from "./components/layout/Footer/Footer";

// pages
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CartPage from "./pages/CartPage/CartPage";
import DeliveryPolicyPage from "./pages/LegalPages/DeliveryPolicyPage";
import PrivacyPage from "./pages/LegalPages/PrivacyPage";
import WarrantyPolicyPage from "./pages/LegalPages/WarrantyPolicyPage";
import OrderPage from "./pages/OrdersPage/OrderPage";
import PcCalculatorPage from "./pages/PcCalculatorPage/PcCalculatorPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage/ProductDescriptionPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TicketPage from "./pages/TicketPage/TicketPage";
import Page404 from "./pages/Page404/Page404";

// redux
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  // authentication and creation of the redux store

  // if (token) {

  // }

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/contacto">
              <ContactPage />
            </Route>
            <Route path="/iniciar-sesion">
              <LoginPage />
            </Route>

            <Route path="/:user/carrito">
              <CartPage />
            </Route>
            <Route path="/:user/orders">
              <OrderPage />
            </Route>

            <Route path="/products/:productId">
              <ProductDescriptionPage />
            </Route>
            <Route path="/profile/:user">
              <ProfilePage />
            </Route>

            <Route path="/:user/tickets">
              <TicketPage />
            </Route>
            {/* Free Routes */}
            <Route path="/sign-up">
              <SignUpPage />
            </Route>
            <Route path="/pc-calculator">
              <PcCalculatorPage />
            </Route>
            <Route path="/privacy-policy">
              <PrivacyPage />
            </Route>
            <Route path="/delivery-policy">
              <DeliveryPolicyPage />
            </Route>
            <Route path="/warranty-policy">
              <WarrantyPolicyPage />
            </Route>
            <Route path="/*">
              <Page404 />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
