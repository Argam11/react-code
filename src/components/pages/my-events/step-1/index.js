import React from "react";
import PropTypes from "prop-types";

import SelectDate from "../../../elements/select-date";
import Select from "../../../elements/select";
import Button from "../../../elements/button";
import Input from "../../../elements/input";

import "./style.css";

function Step1({ data: { accountEmail, groomInformation, brideInformation }, onChange, onStepDone }) {
    const handleClick = () => {
        if (
            Object.values(accountEmail).every(Boolean) &&
            Object.values(groomInformation).every(Boolean) &&
            Object.values(brideInformation).every(Boolean)
        ) {
            onStepDone(2);
        }
    };

    return (
        <>
            <div className="section">
                <h3>Groom and bride account email</h3>
                <div>
                    <Input title="Email" name="email" group="accountEmail" value={accountEmail.email} onChange={onChange} />
                    <Input
                        title="Wedding name"
                        name="weddingName"
                        group="accountEmail"
                        value={accountEmail.weddingName}
                        onChange={onChange}
                    />
                </div>
            </div>
            <div className="section">
                <h3>Groom information</h3>
                <div>
                    <Input
                        title="First name"
                        name="firstName"
                        group="groomInformation"
                        value={groomInformation.firstName}
                        onChange={onChange}
                    />
                    <Input
                        title="Middle name"
                        name="middleName"
                        group="groomInformation"
                        value={groomInformation.middleName}
                        onChange={onChange}
                    />
                    <Input
                        title="Last name"
                        name="lastName"
                        group="groomInformation"
                        value={groomInformation.lastName}
                        onChange={onChange}
                    />
                    <SelectDate
                        title="Date of birth"
                        name="dateOfBirth"
                        group="groomInformation"
                        placeholder="Choose date"
                        value={groomInformation.dateOfBirth}
                        onChange={onChange}
                    />
                    <Input
                        type="number"
                        title="Phone number"
                        name="phoneNumber"
                        group="groomInformation"
                        value={groomInformation.phoneNumber}
                        onChange={onChange}
                    />
                    <Select
                        title="gender"
                        name="gender"
                        group="groomInformation"
                        placeholder="Choose gender"
                        list={[
                            { id: 0, text: "Male" },
                            { id: 1, text: "Female" },
                        ]}
                        value={groomInformation.gender}
                        onChange={onChange}
                    />
                </div>
            </div>
            <div className="section">
                <h3>Bride information</h3>
                <div>
                    <Input
                        title="First name"
                        name="firstName"
                        group="brideInformation"
                        value={brideInformation.firstName}
                        onChange={onChange}
                    />
                    <Input
                        title="Middle name"
                        name="middleName"
                        group="brideInformation"
                        value={brideInformation.middleName}
                        onChange={onChange}
                    />
                    <Input
                        title="Last name"
                        name="lastName"
                        group="brideInformation"
                        value={brideInformation.lastName}
                        onChange={onChange}
                    />
                    <SelectDate
                        title="Date of birth"
                        name="dateOfBirth"
                        group="brideInformation"
                        placeholder="Choose date"
                        value={brideInformation.dateOfBirth}
                        onChange={onChange}
                    />
                    <Input
                        type="number"
                        title="Phone number"
                        name="phoneNumber"
                        group="brideInformation"
                        value={brideInformation.phoneNumber}
                        onChange={onChange}
                    />
                    <Select
                        title="gender"
                        name="gender"
                        group="brideInformation"
                        placeholder="Choose gender"
                        list={[
                            { id: 0, text: "Male" },
                            { id: 1, text: "Female" },
                        ]}
                        value={brideInformation.gender}
                        onChange={onChange}
                    />
                </div>
            </div>
            <div className="button">
                <Button text="Next" style={{ backgroundColor: "#EE386F", padding: "8px 60px" }} onClick={handleClick} />
            </div>
        </>
    );
}

Step1.defaultProps = {
    data: {},
    onChange: () => {},
    onStepDone: () => {},
};

Step1.propTypes = {
    data: PropTypes.object,
    onChange: PropTypes.func,
    onStepDone: PropTypes.func,
};

export default Step1;
