import { useState } from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const formHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (errors[e.target.name])
      setErrors({
        ...errors,
        [e.target.name]: null,
      });
  };

  const findFormErrors = () => {
    const { email, password } = form;
    const newErrors = {};
    // Email validations
    if (!email || email.length < 1) newErrors.email = "Email cannot be empty";
    if (email && !email.includes("@"))
      newErrors.email = "This does not look like an email";

    // Password validations
    if (!password || !password.trim())
      newErrors.password = "Password field cannot be empty";
    return newErrors;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) setErrors(newErrors);
  };
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
              isInvalid={errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="my-3">
          <FloatingLabel label="Password">
            <Form.Control
              type="password"
              placeholder="Enter your password here"
              name="password"
              onChange={formHandler}
              isInvalid={errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Button type="submit" variant="dark" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
    </>
  );
};
