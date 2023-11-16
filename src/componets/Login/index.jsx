import React from "react";
import csstyle from "./login.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function Login() {
  return (
    <>
      <div className={csstyle.login_bg}>
        <Container fluid >
          <Row>
            <Col xs={12}>
              <div className={csstyle.left_side}>
                <div className={csstyle.logo}>
                  <img src="./images/MTS-LogoFinal.jpg" alt="" height="70" />
                </div>
                <div className={csstyle.login_form}>
                  <h3>Sign In</h3>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>User Name</Form.Label>
                      <Form.Control type="email" placeholder="User Name" />

                    </Form.Group>
                    <Form.Group
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />


                    </Form.Group>
                    <Button variant="success" className="w-100 mt-4">Login</Button>
                    <span className={csstyle.error_text}>Please enter vaild User Name or Password</span>
                  </Form>
                  <a href="#" className={csstyle.forgot_pass}>Forgot password?</a>
                </div>

              </div>
            </Col>

          </Row>

        </Container>
        <div className={csstyle.bottom_text}>
          Application design by MTS
        </div>
      </div>
    </>
  );
}

export default Login;
