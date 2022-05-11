import React from "react";
import { connect } from "react-redux";
import PageMarker from "../../components/layout/PageFiller/PageMarker";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import "./style.scss";
export const LoginPage = (props) => {
  return (
    <div>
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
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
