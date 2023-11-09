import PropTypes from "prop-types";
import Next from "../next.svg?react";

const NextButton = ({ onClick, className }) => (
  <button
    className={`widget-button rounded-full p-3 ${className}`}
    onClick={onClick}
  >
    <Next className="w-full h-full" />
  </button>
);

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

NextButton.defaultProps = {
  onClick: () => {},
  className: "w-12 h-12",
};

export default NextButton;
