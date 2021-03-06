import React, { useEffect } from "react";
import { connect } from "react-redux";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import "@aws-amplify/ui-react/styles.css";
import "./style.scss";

import logo from "../../images/apc_logo.png";

import {
  Authenticator,
  Heading,
  useTheme,
  View,
  Image,
  Text,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { useHistory, useLocation } from "react-router-dom";

// old form maybe I wont needed
const oldForm = (
  <div className="center-flex">
    <div className="login-card">
      <div className="header-c">Iniciar Sesion</div>
      <div className="body-login">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Iniciar Sesion
          </Button>{" "}
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </Form>
      </div>
    </div>
  </div>
);

// components for the authenticator component, styling, elements
const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View
        textAlign="center"
        padding={tokens.space.large}
        maxWidth="250px"
        margin="auto"
      >
        <Image alt="Amplify logo" src={logo} />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={`${tokens.colors.neutral["80"]}`}>
          &copy; APC-EC Todos los derechos reservados
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Inicia sesi??n con tu cuenta
        </Heading>
      );
    },
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <View textAlign="center" padding="20px 0">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
          >
            olvido la constrase??a?
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Crear una cuenta
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTOTP: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

// custom form fields for sign up and loggin
const formFields = {
  signIn: {
    username: {
      labelHidden: false,
      label: "Correo",
      placeholder: "Correo",
    },
    password: {
      labelHidden: false,
      label: "Contrase??a",
      placeholder: "Contrase??a",
    },
  },
  signUp: {
    email: {},

    password: {
      placeholder: "Contrase??a",
      isRequired: false,
    },
    confirm_password: {
      placeholder: "Confirmar Contrase??a",
    },
  },
  forceNewPassword: {
    password: {
      labelHidden: false,
      placeholder: "Contrase??a",
    },
  },
  resetPassword: {
    username: {
      labelHidden: false,
      placeholder: "Email",
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      labelHidden: false,
      placeholder: "Entrar el codigo de confirmaci??n:",
      label: "New Label",
      isRequired: false,
    },
    confirm_password: {
      labelHidden: false,
      placeholder: "Enter your Password Please:",
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: "test issuer",
      totpUsername: "amplify_qr_test_user",
    },
    confirmation_code: {
      labelHidden: false,
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      labelHidden: false,
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
};

export const LoginPage = (props) => {
  const { route } = useAuthenticator((context) => [context.route]);
  const location = useLocation();
  const history = useHistory();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (route === "authenticated") {
      history.replace(from);
    }
  }, [route, from, history]);

  return (
    <Authenticator
      formFields={formFields}
      components={components}
    ></Authenticator>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
