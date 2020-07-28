import React from "react";
import PropTypes from "prop-types";

import SelectDate from "../../../elements/select-date";
import Checkbox from "../../../elements/checkbox";
import Select from "../../../elements/select";
import Button from "../../../elements/button";
import Input from "../../../elements/input";

import "./style.css";

function Step2({ data: { weddingInformation }, onChange, onChangeCheckbox, onStepDone }) {
    const handleNextClick = () => {
        const { honeymoon, bookedRoom, ...checkData } = weddingInformation;
        if (Object.values(checkData).every(Boolean)) {
            onStepDone(3);
        }
    };
    const handleBackClick = () => {
        onStepDone(1);
    };

    return (
        <div className="step-2">
            <div className="section">
                <h3>Wedding information</h3>
                <div>
                    <Select
                        title="Ceremony type"
                        name="ceremonyType"
                        group="weddingInformation"
                        placeholder="Choose type"
                        list={[
                            { id: 0, text: "Type 1" },
                            { id: 1, text: "Type 2" },
                            { id: 2, text: "Type 3" },
                        ]}
                        value={weddingInformation.ceremonyType}
                        onChange={onChange}
                    />
                    <Select
                        title="Hotel"
                        name="hotel"
                        group="weddingInformation"
                        placeholder="Choose hotel"
                        list={[
                            { id: 0, text: "Hotel 1" },
                            { id: 1, text: "Hotel 2" },
                            { id: 2, text: "Hotel 3" },
                        ]}
                        value={weddingInformation.hotel}
                        onChange={onChange}
                    />
                    <SelectDate
                        title="Check in date"
                        name="checkInDate"
                        group="weddingInformation"
                        placeholder="Choose date"
                        value={weddingInformation.checkInDate}
                        onChange={onChange}
                    />
                    <SelectDate
                        title="Check out date"
                        name="checkOutDate"
                        group="weddingInformation"
                        placeholder="Choose date"
                        value={weddingInformation.checkOutDate}
                        onChange={onChange}
                    />
                    <div>
                        <Checkbox
                            text="Honeymoon"
                            name="honeymoon"
                            group="weddingInformation"
                            checked={weddingInformation.honeymoon}
                            onChange={onChangeCheckbox}
                        />
                        <br />
                        <Checkbox
                            text="Booked room"
                            name="bookedRoom"
                            group="weddingInformation"
                            checked={weddingInformation.bookedRoom}
                            onChange={onChangeCheckbox}
                        />
                        <br />
                        <Input
                            title="Room number"
                            name="weddingName"
                            group="weddingInformation"
                            value={weddingInformation.weddingName}
                            onChange={onChange}
                        />
                    </div>
                </div>
            </div>
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

Step2.defaultProps = {
    data: {},
    onChange: () => {},
    onChangeCheckbox: () => {},
    onStepDone: () => {},
};

Step2.propTypes = {
    data: PropTypes.object,
    onChange: PropTypes.func,
    onChangeCheckbox: PropTypes.func,
    onStepDone: PropTypes.func,
};

export default Step2;
