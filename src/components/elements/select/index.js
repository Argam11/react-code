import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Select({ title, name, group, placeholder, list, value, onChange }) {
    return (
        <div className="select-block">
            <p>{title}</p>
            <select name={name} data-group={group} value={value} onChange={onChange} required>
                <option className="placeholder-text" value="" disabled>
                    {placeholder}
                </option>
                {list.map((item) => {
                    return (
                        <option key={item.id} value={item.text}>
                            {item.text}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

Select.defaultProps = {
    title: "",
    name: "",
    group: "",
    placeholder: "",
    value: "",
    list: [],
    onChange: () => {},
};

Select.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    group: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    list: PropTypes.array,
    onChange: PropTypes.func,
};

export default Select;
