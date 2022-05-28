import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { register } from "../../store/reducers/authReducer";
import { FormField } from "../../components/FormField/FormField";

export const Register = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const formHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(form));
  };
  return (
    <>
      <Form className="mx-4" onSubmit={submitHandler}>
        <h2>First-time Contact information</h2>
        <FormField
          formHandler={formHandler}
          name="email"
          label="Enter your email"
        />
        <FormField
          formHandler={formHandler}
          name="password"
          label="Enter your password"
        />
        <FormField
          formHandler={formHandler}
          name="name"
          label="Enter your name"
        />
        <FormField
          formHandler={formHandler}
          name="surname"
          label="Enter your Surname"
        />
        <FormField
          formHandler={formHandler}
          name="phone_number"
          label="Please enter your phone number"
        />
        <Form.Group className="my-3">
          <Form.Label>Background information</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="background_information"
            onChange={formHandler}
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
