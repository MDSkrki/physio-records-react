import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export const FormField = ({ formHandler, errors, name }) => {
  let type = "text";
  if (name === "email") type = name;
  if (name === "password") type = name;
  if (name === "date") type = name;

  return (
    <>
      <Form.Group className="my-3">
        <FloatingLabel label={name}>
          <Form.Control
            type={type}
            placeholder="Enter your email here"
            name={name}
            onChange={formHandler}
            isInvalid={errors[name]}
          />
          <Form.Control.Feedback type="invalid">
            {errors[name]}
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
    </>
  );
};
