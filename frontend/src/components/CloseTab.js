import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";

export const CloseTab = () => {
  return (
    <Container className="centering">
      <div className="close_div_heading text-center">
        Problem connecting the accounts!!
      </div>
      <div className="close_div_subheading text-center">Try again later</div>
      <div className=" centering_horizontal mt-2">
        <Button variant="danger">
          <a
            href="https://www.google.com/"
            className="dead_link text-center  fw-bold"
          >
            Close
          </a>
        </Button>
      </div>
    </Container>
  );
};
