import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export const FormField = ({ formHandler, name, label }) => {
  let type = "text";

  if (name === "email") type = name;
  if (name === "password") type = name;
  if (name === "date") type = name;

  return (
    <>
      <Form.Group className="my-3">
        <FloatingLabel label={label}>
          <Form.Control
            type={type}
            name={name}
            onChange={formHandler}
            required
          />
        </FloatingLabel>
      </Form.Group>
    </>
  );
};
