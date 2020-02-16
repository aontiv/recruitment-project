import React from "react";

import checkmark from "../media/svgs/subsection-03-bullets-bullet__checkmark.svg";

const SS03Bullet = ({ text }) => {
    return (
        <div className="subsection-03-bullets-bullet">
            <img src={checkmark} alt="Checkmark" />
            <p className="subsection-03-bullets-bullet__text regular-16-16">{text}</p>
        </div>
    );
}

export default SS03Bullet;
