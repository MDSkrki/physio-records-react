import { useState } from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export const Register = () => {
  const [form, setForm] = useState({});
  const formHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  console.log(form);
  return (
    <>
      <Form className="mx-4">
        <h2>Please register using an email and password</h2>
        <Form.Group className="my-3">
          <FloatingLabel label="Email">
            <Form.Control
              type="email"
              placeholder="Enter your email here"
              name="email"
              onChange={formHandler}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="my-3">
          <FloatingLabel label="Password">
            <Form.Control
              type="password"
              placeholder="Enter your password here"
              name="password"
              onChange={formHandler}
            />
          </FloatingLabel>
        </Form.Group>
        <Button type="submit" variant="dark">
          Submit
        </Button>
      </Form>
    </>
  );
};
