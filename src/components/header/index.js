import React from "react";
import "./style.css";
import a from "../../assets/images/arrow.svg";

function Header() {
    return (
        <div className="header">
            <div className="menu">
                <div className="menu-item">Dashboard</div>
                <div className="menu-item">Calendar</div>
                <div className="menu-item">Hotels</div>
                <div className="menu-item active">My events</div>
                <div className="menu-item">Notes</div>
                <div className="menu-item">
                    Messages
                    <span className="unread-messages">5</span>
                </div>
                <div className="menu-item">
                    My account
                    <img src={a} className="arrow-icon" alt="arrow" />
                </div>
            </div>
        </div>
    );
}

export default Header;
