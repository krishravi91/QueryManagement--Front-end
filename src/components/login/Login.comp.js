import React, {useState} from 'react'
import {Container, Row, Col, Form,Button} from "react-bootstrap";
import PropTypes from 'prop-types';

export const LoginForm = ({formSwitcher}) => {

  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleOnsubmit = (event) => {
      event.preventDefault();

      if(!email || !password){
          return alert("fill up all the form!");
      }

      console.log(email, password);
  }
 
  return (
    <Container>
        <Row>
            <Col>
                <h1 className="text-info text-center">client login</h1>
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
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password"
                        value={password}  
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Enter Password"
                        required
                        />
                    </Form.Group>
                    <Button onClick={handleOnsubmit}>Login</Button>
                </Form>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <a href="#!" onClick={() =>formSwitcher('reset')}>Forget Password?</a>
            </Col>
        </Row>

    </Container>
  )
}


