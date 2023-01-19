import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
const Questions = () => {
  return (
    <Container className="mt-3 questionaire">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>How did you first meet?</Form.Label>
          <Form.Control type="text" placeholder="Explain the occasion here" />
          <Form.Label className=" d-block">
            How was the first impression?/ Any aspect you liked about him/her
            that time?
          </Form.Label>
          <Form.Control type="text" placeholder="Explain it here" />
          <Form.Label className=" d-block">
            Who started the first chat?
          </Form.Label>
          <Form.Control type="text" placeholder="Explain it here" />
          <Form.Label className=" d-block">
            What sort of clothes was your partner wearing that time? Anything
            specific?
          </Form.Label>
          <Form.Control type="text" placeholder="Explain it here" />
          <Form.Label className=" d-block">
            Was it a first sight love from you? How did you feel that time? What
            do you think, how your partner felt that time?
          </Form.Label>
          <Form.Control type="text" placeholder="Explain it here" />
          <Form.Label className=" d-block">
            Did you say goodbye when you departed that day?
          </Form.Label>
          <Form.Control type="text" placeholder="yes/no" />
          <Form.Label className=" d-block">
            When was the next chat? How did it happen?
          </Form.Label>
          <Form.Control type="text" placeholder="explain it here" />
          <Form.Label className=" d-block">
            Who started expressing love first?
          </Form.Label>
          <Form.Control type="text" placeholder="explain it here" />
          <Form.Label className=" d-block">
            How did you meet the second time? Anything you remember talking
            about?
          </Form.Label>
          <Form.Control type="text" placeholder="explain it here" />
          <Form.Label className=" d-block">Who proposed first?</Form.Label>
          <Form.Control type="text" placeholder="you/partner" />
          <Form.Label className=" d-block">
            Birthdate of your partner
          </Form.Label>
          <Form.Control type="text" placeholder="dd/mm/yy" />
          <Form.Label className=" d-block">
            Zodiac sign of your partner
          </Form.Label>
          <Form.Control type="text" placeholder="name it here" />
          <Form.Label className=" d-block">
            Most favourite gift you have received from your partner?
          </Form.Label>
          <Form.Control type="text" placeholder="name/expain it here" />

          <Form.Label className=" d-block">Who loves much?</Form.Label>
          <Form.Control type="text" placeholder="you/partner" />
          <Form.Label className=" d-block">
            Who says sorry first when has a fight?
          </Form.Label>
          <Form.Control type="text" placeholder="you/partner" />
          <Form.Label className=" d-block">
            Whom do you think your partner loves the most? / The favourite
            person!
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="name them and how are they related or any explanation"
          />
          <Form.Label className=" d-block">
            Best friend of your partner?
          </Form.Label>
          <Form.Control type="text" placeholder="name them" />
          <Form.Label className=" d-block">
            Favourite hobby of your partner?
          </Form.Label>
          <Form.Control type="text" placeholder="name it" />
          <Form.Label className=" d-block">
            Favourite color of your partner?
          </Form.Label>
          <Form.Control type="text" placeholder="name the color" />
          <Form.Label className=" d-block">
            Favourite movie and/ tv show of your partner?
          </Form.Label>
          <Form.Control type="text" placeholder="name them here" />
          <Form.Label className=" d-block">
            A good memory with your parnter!
          </Form.Label>
          <Form.Control type="text" placeholder="explain it here" />
          <Form.Label className=" d-block">
            A bad memory with your parnter/ if has any!
          </Form.Label>
          <Form.Control type="text" placeholder="explain it here" />
          <Form.Label className=" d-block">
            One aspect you like about your partner?
          </Form.Label>
          <Form.Control type="text" placeholder="explain it here" />
          <Form.Label className=" d-block">
            One aspect you hate about your partner?
          </Form.Label>
          <Form.Control type="text" placeholder="explain it here" />
          <Form.Label className=" d-block">
            Anything / any aspect you wish your partner didn't had or want them to change?
          </Form.Label>
          <Form.Control type="text" placeholder="explain it here" />
        </Form.Group>
        <Form.Label className=" d-block">
          Leave a dare to your partner!!
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="make s/he do something for you😁😊"
        />
        <Col md={2}>
          <Button
            variant="primary"
            size="lg"
            className="login_button mt-3 mb-3"
            type="submit"
            id="fblogin_button"
          >
            Submit
          </Button>
        </Col>
      </Form>
    </Container>
  );
};

export default Questions;
