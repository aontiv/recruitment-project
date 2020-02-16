import React from "react";

import S03Card from "./S03Card";

import marketing from "../media/svgs/section-03-card__marketing.svg";
import technology from "../media/svgs/section-03-card__technology.svg";
import training from "../media/svgs/section-03-card__training.svg";
import success from "../media/svgs/section-03-card__success.svg";

const S03Cards = () => {
    return (
        <div className="section-03-cards">
            <S03Card
                src={marketing}
                title="Marketing"
                text="The KW Lead Generation Network gives you presence and power in online searches. The Keller Williams Listing System (KWLS) protects you when you decide to syndicate your listings."
            />
            <S03Card
                src={technology}
                title="Cutting Edge Technology"
                text="The Keller Cloud is technology that helps you control your database, your business, and your future with a fully integrated suite of products developed by agents, for agents."
            />
            <S03Card
                src={training}
                title="Training and Coaching"
                text="Named the #1 Training Organization in the world by Training Magazine in 2015, we’re often described as a training and coaching company cleverly disguised as a real estate franchise."
            />
            <S03Card
                src={success}
                title="Shared Success"
                text="Shared decisions. Shared succes. Through our profit share (US & Canada) and the growth share (Worldwide) programs, Keller Williams recognizes and rewards associates for helping to grow the company."
            />
        </div>
    );
}

export default S03Cards;
