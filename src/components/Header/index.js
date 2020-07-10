import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="text-center head">
            <h1>Avatar</h1>
            <h4>The Last Airbender</h4>
            <h3>Clicky Game!</h3>
            <h3>Click on an image to earn points, but don't click on any more than once!</h3>
        </div>
    );
}

export default Header;