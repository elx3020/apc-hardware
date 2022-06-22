// react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Fragment } from "react";

// components
import NavBar from "./components/layout/NavBar/NavBar";
import Footer from "./components/layout/Footer/Footer";
import AuthRoute from "./components/UserControl/AuthRoute";
import RequiredAuth from "./components/UserControl/RequiredAuth";
// pages
import HomePage from "./pages/HomePage/HomePage";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
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
import AdminPage from "./pages/AdminPage/AdminPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import InventarioPage from "./pages/InventarioPage/InventarioPage";
import EditProductPage from "./pages/EditProductPage/EditProductPage";
import Page404 from "./pages/Page404/Page404";
// pages string routes
import { pagesRoutes } from "./pages/pagesRoutes";

// redux
import { Provider } from "react-redux";
import store from "./Redux/store";

// stlyes bootstrap
import "./App.scss";

// aws authentication
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";

function App() {
  // authentication
  const { user, authStatus } = useAuthenticator((context) => [
    context.authStatus,
    context.user,
  ]);

  // get user into the store

  // pages routes

  const {
    home,
    login,
    signup,
    contact,
    cart,
    profile,
    orders,
    tickets,
    products,
    calculator,
    deliveryPolicy,
    privatePolicy,
    warrantyPolicy,
  } = pagesRoutes;

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar authenticated={authStatus} routesLinks={pagesRoutes} />
          <Switch>
            <Route exact path={home} component={HomePage} />

            <Route path="/:searchParams/results">
              <SearchResultPage />
            </Route>

            <Route path={contact}>
              <ContactPage />
            </Route>
            <Route path={login}>
              <LoginPage />
            </Route>
            <Route exact path={cart}>
              <CartPage />
            </Route>

            <Route path={orders}>
              <OrderPage />
            </Route>

            <Route exact path={products}>
              <ProductDescriptionPage />
            </Route>

            <Route path={profile}>
              <ProfilePage />
            </Route>

            <Route path={tickets}>
              <TicketPage />
            </Route>
            {/* Free Routes */}
            <Route path={signup}>
              <SignUpPage />
            </Route>
            <Route path={calculator}>
              <PcCalculatorPage />
            </Route>
            <Route path={privatePolicy}>
              <PrivacyPage />
            </Route>
            <Route path={deliveryPolicy}>
              <DeliveryPolicyPage />
            </Route>
            <Route path={warrantyPolicy}>
              <WarrantyPolicyPage />
            </Route>
            <Route exact path="/admin-apcec">
              <RequiredAuth>
                <AdminPage />
              </RequiredAuth>
            </Route>

            <Route exact path="/admin-apcec/crear-producto">
              <AddProductPage />
            </Route>

            <Route exact path="/admin-apcec/editproduct/:productId">
              <EditProductPage />
            </Route>
            <Route exact path="/admin-apcec/inventario">
              <InventarioPage />
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
