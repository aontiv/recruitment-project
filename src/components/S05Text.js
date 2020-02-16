import React from "react";

import play from "../media/svgs/section-05-text-action__play.svg";

const S05Text = () => {
    return (
        <div className="section-05-text">
            <h4 className="section-05-text__title bold-20-20">Want to learn more?</h4>
            <p className="section-05-text__text light-16-24">Check out the promotional video to get inspired:</p>
            <div className="section-05-text-action">
                <img className="section-05-text-action__play" src={play} alt="Promotional Video" />
                <p className="section-05-text-action__text bold-20-20">WATCH VIDEO</p>
            </div>
        </div>
    );
}

export default S05Text;
