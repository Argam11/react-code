import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function SelectDate({ title, name, group, placeholder, value, onChange }) {
    return (
        <div className="select-date-block">
            <p>{title}</p>
            <input
                type="date"
                name={name}
                data-group={group}
                value={value}
                onChange={onChange}
                data-placeholder={placeholder}
                required
                aria-required="true"
            />
        </div>
    );
}

SelectDate.defaultProps = {
    title: "",
    name: "",
    group: "",
    placeholder: "",
    value: "",
    onChange: () => {},
};

SelectDate.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    group: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default SelectDate;
