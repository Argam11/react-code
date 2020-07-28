import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Input({ type, name, group, title, value, onChange }) {
    const handleOnChange = (e) => {
        const { value } = e.target;
        if (type === "number" && /^\+?\d*$/.test(value)) {
            onChange(e);
        } else if (type !== "number") {
            onChange(e);
        }
    };
    return (
        <div className="input-block">
            <p>{title}</p>
            <input type="text" name={name} data-group={group} value={value} onChange={handleOnChange} />
        </div>
    );
}

Input.defaultProps = {
    type: "text",
    name: "",
    group: "",
    title: "",
    value: "",
    onChange: () => {},
};

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    group: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;
