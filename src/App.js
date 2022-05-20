// react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Fragment } from "react";

// components
import NavBar from "./components/layout/NavBar/NavBar";
import Footer from "./components/layout/Footer/Footer";
import AuthRoute from "./components/UserControl/AuthRoute";
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

// stlyes bootstrap
import "./App.scss";

// aws authentication
import { useAuthenticator } from "@aws-amplify/ui-react";

function App() {
  // authentication
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  console.log(authStatus);
  // if (token) {

  // }

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route path="/contacto">
              <ContactPage />
            </Route>
            <Route path="/iniciar-sesion">
              <LoginPage />
            </Route>

            <AuthRoute
              path="/:user/carrito"
              authenticated={authStatus}
              component={CartPage}
            />
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
