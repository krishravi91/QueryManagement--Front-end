import React, {useState} from 'react'
import {Container, Row, Col, Form,Button} from "react-bootstrap";
import PropTypes from 'prop-types';

export const ResetPassword = ({formSwitcher}) => {

  const [email, setEmail] = useState("");

  const handleOnResetsubmit = (event) => {
      event.preventDefault();

      if(!email){
          return alert("Please enter the email");
      }

      console.log(email);
  }
  const resetMovieForm =() => {
    setEmail("");
  }

  return (
    <Container>
        <Row>
            <Col>
                <h1 className="text-info text-center">Reset Password</h1>
                <hr />
                <Form autoComplete="off">
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter Password"
                        required
                        />
                    </Form.Group>
                    <Button onClick={handleOnResetsubmit}>Reset Password</Button>
                </Form>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <a href="#!" onClick={() => formSwitcher('login')}>Login Now</a>
            </Col>
        </Row>

    </Container>
  )
}


