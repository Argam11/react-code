import { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./style.css";

const modalRoot = document.querySelector("#modal-root");
const el = document.createElement("div");
el.className = "modal-conrainer";

const Modal = ({ children }) => {
    useEffect(() => {
        modalRoot.appendChild(el);
        modalRoot.classList.add("open");
        return () => {
            modalRoot.removeChild(el);
            modalRoot.classList.remove("open");
        };
    }, []);

    return ReactDOM.createPortal(children, el);
};

Modal.defaultProps = {};

Modal.propTypes = {
    children: PropTypes.node,
};

export default Modal;
