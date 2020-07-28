import React, { useState, useEffect } from "react";
import cx from "classnames";

import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Step4 from "./step-4";
import Modal from "../../modal";
import Button from "../../elements/button";

import "./style.css";

const stepsProgressPercents = {
    1: 18,
    2: 48,
    3: 73,
    4: 87,
};

function MyEvents() {
    const [stepsProgress, setStepsProgress] = useState(stepsProgressPercents["1"]);
    const [steps, setSteps] = useState(1);
    const [eventModal, setEventModal] = useState(false);

    const [step1, setStep1] = useState({
        accountEmail: {
            email: "",
            weddingName: "",
        },
        groomInformation: {
            firstName: "",
            middleName: "",
            lastName: "",
            dateOfBirth: "",
            phoneNumber: "",
            gender: "",
        },
        brideInformation: {
            firstName: "",
            middleName: "",
            lastName: "",
            dateOfBirth: "",
            phoneNumber: "",
            gender: "",
        },
    });
    const [step2, setStep2] = useState({
        weddingInformation: {
            ceremonyType: "",
            hotel: "",
            checkInDate: "",
            checkOutDate: "",
            honeymoon: false,
            bookedRoom: false,
            weddingName: "",
        },
    });
    const [step3, setStep3] = useState({
        addToGuest: {
            firstName: "",
            middleName: "",
            lastName: "",
            phone: "",
            email: "",
            side: "",
        },
        guestList: [],
    });

    const onChangeStep1 = (e) => {
        const {
            name,
            dataset: { group },
            value,
        } = e.target;
        setStep1({ ...step1, [group]: { ...step1[group], [name]: value } });
    };
    const onChangeStep2 = (e) => {
        const {
            name,
            dataset: { group },
            value,
        } = e.target;
        setStep2({ ...step2, [group]: { ...step2[group], [name]: value } });
    };
    const onChangeCheckboxStep2 = (e) => {
        const {
            name,
            dataset: { group },
        } = e.target;
        setStep2({ ...step2, [group]: { ...step2[group], [name]: !step2[group][name] } });
    };
    const onChangeStep3 = (e) => {
        const {
            name,
            dataset: { group },
            value,
        } = e.target;
        setStep3({ ...step3, [group]: { ...step3[group], [name]: value } });
    };
    const addToList = () => {
        const { addToGuest, guestList } = step3;
        if (Object.values(addToGuest).every(Boolean)) {
            const { firstName, middleName, lastName, phone, email, side } = addToGuest;
            setStep3({
                ...step3,
                addToGuest: { firstName: "", middleName: "", lastName: "", phone: "", email: "", side: "" },
                guestList: [...guestList, { id: guestList.length + 1, name: `${firstName} ${middleName} ${lastName}`, phone, email, side }],
            });
        }
    };

    const onStepDone = (n) => {
        setSteps(n);
    };

    const createEvent = () => {
        setEventModal(true);
    };

    const onCloseModal = () => {
        setEventModal(false);
    };

    useEffect(() => {
        setStepsProgress(stepsProgressPercents[steps]);
    }, [steps]);

    return (
        <div className="my-events">
            <div className="my-events-header">
                <div className="container">
                    <div>
                        <div className={cx("my-events-step", steps >= 1 && "done")}>
                            <p>Step 1</p>
                            <p>Groom and bride</p>
                        </div>
                        <div className={cx("my-events-step", steps >= 2 && "done")}>
                            <p>Step 2</p>
                            <p>Event description</p>
                        </div>
                        <div className={cx("my-events-step", steps >= 3 && "done")}>
                            <p>Step 3</p>
                            <p>Guest list</p>
                        </div>
                        <div className="my-events-step">
                            <p>Step 4</p>
                            <p>Vendors</p>
                        </div>
                    </div>
                    <span className="inactive-line"></span>
                    <span className="active-line" style={{ width: `${stepsProgress}%` }}></span>
                </div>
            </div>
            <div className="my-events-content">
                {steps === 1 ? (
                    <Step1 data={step1} onChange={onChangeStep1} onStepDone={onStepDone} />
                ) : steps === 2 ? (
                    <Step2 data={step2} onChange={onChangeStep2} onChangeCheckbox={onChangeCheckboxStep2} onStepDone={onStepDone} />
                ) : steps === 3 ? (
                    <Step3 data={step3} onChange={onChangeStep3} addToList={addToList} onStepDone={onStepDone} />
                ) : steps === 4 ? (
                    <Step4 onStepDone={onStepDone} createEvent={createEvent} />
                ) : null}
            </div>
            {eventModal && (
                <Modal>
                    <div className="event-modal">
                        <img
                            src="https://png.pngtree.com/png-vector/20190614/ourlarge/pngtree-calendardaylovewedding-business-logo-template--flat-color-png-image_1475481.jpg"
                            alt="wedding calendar"
                        />
                        <h2>Event created</h2>
                        <p>Your event was successfully added to your schedule</p>
                        <Button text="Close" style={{ backgroundColor: "#EE386F", padding: "10px 60px" }} onClick={onCloseModal} />
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default MyEvents;
