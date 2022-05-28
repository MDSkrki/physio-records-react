import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { register } from "../../store/reducers/authReducer";
import { FormField } from "../../components/FormField/FormField";

export const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
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
    if (!email || isEmpty(email)) newErrors.email = "Email cannot be empty";
    if (email && !isEmail(email))
      newErrors.email = "This does not look like an email";

    // Password validations
    if (!password || isEmpty(password))
      newErrors.password = "Password cannot be empty";

    return newErrors;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    dispatch(register(form));
  };
  return (
    <>
      <Form className="mx-4">
        <h2>First-time Contact information</h2>
        <FormField
          errors={errors}
          formHandler={formHandler}
          name="email"
          label="Enter your email"
        />
        <FormField
          errors={errors}
          formHandler={formHandler}
          name="password"
          label="Enter your password"
        />
        <FormField
          errors={errors}
          formHandler={formHandler}
          name="name"
          label="Enter your name"
        />
        <FormField
          errors={errors}
          formHandler={formHandler}
          name="surname"
          label="Enter your Surname"
        />
        <FormField
          errors={errors}
          formHandler={formHandler}
          name="phone_number"
          label="Please enter your phone number (including prefix)"
        />
        <Form.Group className="my-3">
          <Form.Label>Background information</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="background_information"
            onChange={formHandler}
          />
          <Form.Control.Feedback type="invalid">
            {errors["background_information"]}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="dark" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
    </>
  );
};
