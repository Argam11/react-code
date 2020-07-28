import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Button({ text, style, onClick }) {
    return (
        <button className="button-element" style={style} onClick={onClick}>
            {text}
        </button>
    );
}

Button.defaultProps = {
    text: "",
    style: {},
    onClick: () => {},
};

Button.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
};

export default Button;
