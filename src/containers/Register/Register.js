import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { user } from "../../store/reducers/userReducer";
import { FormField } from "../../components/FormField/FormField";
import { useForm } from "../../shared/hooks/useForm";
import { apiConsumer } from "../../services/apiConsumer";
import { show } from "../../store/reducers/bannerReducer";

export const Register = () => {
  // Hooks
  const [formData, formHandler] = useForm({});
  const dispatch = useDispatch();

  // Handlers
  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await apiConsumer("POST", "/user/register", formData);
    if (!res) {
      dispatch(show({ variant: "error", message: "There has been an error" }));
    }
    dispatch(user(res.id));
    dispatch(
      show({ variant: "success", message: "User has registered successfully!" })
    );
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
