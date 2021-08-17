import "./_alert.scss";
import PropTypes from "prop-types";

function Alert(props) {
  const { type, message } = props;
  return <div className={`alert ${type}`}>{message}</div>;
}

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.oneOf(["error", "success", "warning"]),
};

export default Alert;
