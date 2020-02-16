import React from "react";

import questionsLine from "../media/svgs/section-01-text-questions__line.svg";

const S01Text = () => {
    return (
        <div className="section-01-text">
            <div className="section-01-text-questions">
                <img src={questionsLine} alt="" />
                <p className="section-01-text-questions__text medium-20-20">Career change? New future?</p>
            </div>
            <h1 className="section-01-text__title bold-60-68">Ready for Extraordinary?</h1>
            <p className="section-01-text__text regular-18-26">Keller Williams has always been more than just a real estate company. Our mission is clear: to build careers worth having, businesses worth owning and lives worth living.</p>
        </div>
    );
}

export default S01Text;
