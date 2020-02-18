import React from "react";

import radioDefault from "../media/svgs/section-01-form-radio-btns__radio--default.svg";
import radioChecked from "../media/svgs/section-01-form-radio-btns__radio--checked.svg";

const S01FormCheckbox = ({ agentChecked, setAgentChecked, schoolChecked, setSchoolChecked, school, submitted, text }) => {
    // Choose which checkbox to show: checked or unchecked
    const chooseCheckbox = () => {
        return agentChecked || schoolChecked ? radioChecked : radioDefault;
    }

    // Change radio icon when clicked
    const changeIcon = () => {
        setAgentChecked ? setAgentChecked(!agentChecked) : setSchoolChecked(!schoolChecked);
    }

    return (
        <label className={`section-01-form-radio-btns regular-16-16` + (school ? school : "")}>{text}
            <input className="section-01-form-radio-btns__input" type="radio" name="radio" onClick={changeIcon} disabled={submitted} />
            <img className="section-01-form-radio-btns__radio" src={chooseCheckbox()} />
        </label>
    );
}

export default S01FormCheckbox;
