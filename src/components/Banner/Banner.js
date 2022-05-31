import Alert from "react-bootstrap/Alert";
import { useDispatch } from "react-redux";
import { dismiss } from "../../store/reducers/bannerReducer";

export const Banner = ({ variant, message }) => {
  const dispatch = useDispatch();
  const close = () => {
    dispatch(dismiss());
  };

  setTimeout(() => {
    close();
  }, 2500);

  return (
    <>
      <Alert
        variant={variant}
        className="Banner mx-2"
        dismissible
        onClose={close}
      >
        <Alert.Heading>
          {variant === "error" && "Error"} {variant === "success" && "Great!"}
        </Alert.Heading>
        <p>{message && message}</p>
      </Alert>
    </>
  );
};
