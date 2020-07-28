import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Checkbox({ text, name, group, checked, onChange }) {
    return (
        <div className="checkbox-block">
            <label>
                <input type="checkbox" name={name} data-group={group} checked={checked} onChange={onChange} />
                <span>{text}</span>
            </label>
        </div>
    );
}

Checkbox.defaultProps = {
    text: "",
    name: "",
    group: "",
    checked: false,
    onChange: () => {},
};

Checkbox.propTypes = {
    text: PropTypes.string,
    name: PropTypes.string,
    group: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Checkbox;
