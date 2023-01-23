import "./Navbar.css";
import "./Toggle.css";

import { useState } from "react";

function Navbar() {
    const [checkBox, setCheckBox] = useState(true);

    function checkBoxChange(event) {
        setCheckBox((previousState) => !previousState);
        console.log(checkBox)
        if (checkBox) {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        } else {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
    }

    return (
        <nav className="navbar">
            <ul className="navbar-container">
                <li className="navbar-logo">
                    <img  alt="twitter" src="./TwitterBird.png" />
                    <h1>Twitter</h1>
                </li>
                <li className="navbar-login">
                    <img src="./user.png" alt="user" />
                    <label className="switch">
                        <input type="checkbox" onChange={checkBoxChange} checked={checkBox} />
                        <span className="slider round"></span>
                    </label>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
