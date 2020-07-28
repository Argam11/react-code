import React from "react";
import PropTypes from "prop-types";

import Button from "../../../elements/button";

import "./style.css";

const vendorsList = [
    {
        id: 0,
        img: "https://www.yell.am/images/pictures/118/15178079_1448880898474207_8005382775734901984_n.jpg",
        title: "Unique Spa Salon and pool",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id hic voluptatem molestiae...",
        services: "12 product /services",
    },
    {
        id: 1,
        img: "https://weddingvendor.co.za/superawesom/2020/06/Wedding-Vendor-20-of-47.jpg",
        title: "Flowerry",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id hic voluptatem molestiae...",
        services: "9 product /services",
    },
];

function Step4({ onStepDone, createEvent }) {
    const handleNextClick = () => {
        createEvent();
    };
    const handleBackClick = () => {
        onStepDone(3);
    };
    const showDetails = (id) => {
        console.log(id);
    };

    return (
        <>
            <div className="vendors">
                <h3 className="title">Vendors</h3>
                {vendorsList.map((vendor) => {
                    return (
                        <div className="vendor-item" key={vendor.id}>
                            <div className="photo">
                                <img src={vendor.img} alt="vendor img" />
                            </div>
                            <div className="about">
                                <h3>{vendor.title}</h3>
                                <p>{vendor.text}</p>
                            </div>
                            <div className="services">{vendor.services}</div>
                            <div>
                                <Button
                                    text="Details"
                                    style={{ backgroundColor: "#009E89", padding: "10px 50px" }}
                                    onClick={() => showDetails(vendor.id)}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="button">
                <Button
                    text="Back"
                    style={{ border: "2px solid #EE386F", color: "#EE386F", padding: "8px 40px" }}
                    onClick={handleBackClick}
                />
                <Button
                    text="Create event"
                    style={{ backgroundColor: "#EE386F", padding: "10px 60px", marginLeft: "20px" }}
                    onClick={handleNextClick}
                />
            </div>
        </>
    );
}

Step4.defaultProps = {
    onStepDone: () => {},
};

Step4.propTypes = {
    onStepDone: PropTypes.func,
};

export default Step4;
