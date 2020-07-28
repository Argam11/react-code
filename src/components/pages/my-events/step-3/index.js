import React from "react";
import PropTypes from "prop-types";

import Select from "../../../elements/select";
import Button from "../../../elements/button";
import Input from "../../../elements/input";

import "./style.css";

function Step3({ data: { addToGuest, guestList }, onChange, addToList, onStepDone }) {
    const handleNextClick = () => {
        onStepDone(4);
    };
    const handleBackClick = () => {
        onStepDone(2);
    };

    return (
        <div className="step-3">
            <div className="section">
                <h3>Add guest</h3>
                <div>
                    <Input title="First name" name="firstName" group="addToGuest" value={addToGuest.firstName} onChange={onChange} />
                    <Input title="Middle name" name="middleName" group="addToGuest" value={addToGuest.middleName} onChange={onChange} />
                    <Input title="Last name" name="lastName" group="addToGuest" value={addToGuest.lastName} onChange={onChange} />
                    <Input type="number" title="Phone" name="phone" group="addToGuest" value={addToGuest.phone} onChange={onChange} />
                    <Input title="Email" name="email" group="addToGuest" value={addToGuest.email} onChange={onChange} />
                    <Select
                        title="Side"
                        name="side"
                        group="addToGuest"
                        placeholder="Choose side"
                        list={[
                            { id: 0, text: "Groom" },
                            { id: 1, text: "Bride" },
                        ]}
                        value={addToGuest.side}
                        onChange={onChange}
                    />
                </div>
            </div>
            <div className="button">
                <Button text="Add to list" style={{ backgroundColor: "#009E89", padding: "10px 60px" }} onClick={addToList} />
            </div>
            {!!guestList.length && (
                <div className="guest-list">
                    <div className="table-head">
                        <div>&#8470;</div>
                        <div>Guest</div>
                        <div>Phone number</div>
                        <div>Email</div>
                        <div>Side</div>
                    </div>
                    {guestList.map((guest) => {
                        return (
                            <div className="table-row" key={guest.id}>
                                <div>{guest.id}</div>
                                <div>{guest.name}</div>
                                <div>{guest.phone}</div>
                                <div>{guest.email}</div>
                                <div>{guest.side}</div>
                            </div>
                        );
                    })}
                </div>
            )}
            <div className="button">
                <Button
                    text="Back"
                    style={{ border: "2px solid #EE386F", color: "#EE386F", padding: "8px 40px" }}
                    onClick={handleBackClick}
                />
                <Button
                    text="Next"
                    style={{ backgroundColor: "#EE386F", padding: "10px 60px", marginLeft: "20px" }}
                    onClick={handleNextClick}
                />
            </div>
        </div>
    );
}

Step3.defaultProps = {
    data: {},
    onChange: () => {},
    addToList: () => {},
    onStepDone: () => {},
};

Step3.propTypes = {
    data: PropTypes.object,
    onChange: PropTypes.func,
    addToList: PropTypes.func,
    onStepDone: PropTypes.func,
};

export default Step3;
