import { useState } from "react";
import "../App.css";
// import logo from "../images/logo.png";
import logo from '../images/SalMaNF5r.png';
import pointer from "../images/point_right.svg";

const SwitchMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={isOpen ? "switch-opened" : "switch"}>
        <div className="navbar-switch">
            {/* <img src={pointer} className="point" alt="point" /> */}
            <div className="navbar-switch-inner">
            <a className="link -Art" href="/">
                Art
            </a>
            <a className="link -Dev" href="/">
                Dev
            </a>
            <img className="pointer" src={pointer} alt="" />
            </div>
            <button className="btn" onClick={()=> isOpen ? setIsOpen(false) : setIsOpen(true)}> {/* add onClick */}
            <img src={logo} className="logo" alt="logo" />
            </button>
        </div>
        </div>
    );
};

export default SwitchMenu;
