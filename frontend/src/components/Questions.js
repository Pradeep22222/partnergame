import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Questions = () => {
  return (
    <Container className="mt-3 questionaire">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>How did you first meet?</Form.Label>
          <Form.Control type="text" placeholder="Explain it here" />
          <Form.Label className=" d-block">
            What is your first memory with eachother?
          </Form.Label>
          <Form.Control type="text" placeholder="Explain it here" />
          <Form.Label className=" d-block">Any fun/silly memories?</Form.Label>
          <Form.Control type="text" placeholder="Explain it here" />
          <Form.Label className=" d-block">
            Any occasion you fought with eachother?
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Explain what happened and when"
          />
          <Form.Label className=" d-block">
            How often you guys see eachothers nowday?
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="How many times on average in a year"
          />
          <Form.Label className=" d-block">
            What is the birthdate of your friend?
          </Form.Label>
          <Form.Control type="text" placeholder="dd/mm/yy" />
          <Form.Label className=" d-block">
            Does your friend has any ex, if; name S/he
          </Form.Label>
          <Form.Control type="text" placeholder="Name S/he" />
          <Form.Label className=" d-block">
            One aspect you like about your friend?
          </Form.Label>
          <Form.Control type="text" placeholder="Let S/he know here😊" />
          <Form.Label className=" d-block">
            One aspect you hate about your friend?
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="This is the time to let them know😁"
          />
          <Form.Label className=" d-block">
            Leave a dare to your friend
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Do not miss to make S/he do something for you now"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Questions;
