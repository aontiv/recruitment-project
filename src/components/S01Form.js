import React from "react";

import fullName from "../media/svgs/section-01-form-input__full-name.svg";
import email from "../media/svgs/section-01-form-input__email.svg";
import phone from "../media/svgs/section-01-form-input__phone.svg";
import radioDefault from "../media/svgs/section-01-form-radio-btns__radio--default.svg";
import radioChecked from "../media/svgs/section-01-form-radio-btns__radio--checked.svg";

const S01Form = () => {
    return (
        <form className="section-01-form">
            <h2 className="section-01-form__title medium-40-48">Start now!</h2>
            <p className="section-01-form__subtitle regular-20-28">Start your KW journey today:</p>

            {/* Input: Full Name */}
            <div className="section-01-form-input">
                <img src={fullName} alt="" />
                <input className="section-01-form-input__input regular-16-16" type="text" placeholder="Full Name" />
            </div>

            {/* Input: Email */}
            <div className="section-01-form-input">
                <img src={email} alt="" />
                <input className="section-01-form-input__input regular-16-16" type="email" placeholder="Email" />
            </div>

            {/* Input: Phone */}
            <div className="section-01-form-input">
                <img src={phone} alt="" />
                <input className="section-01-form-input__input regular-16-16" type="phone" placeholder="Phone" />
            </div>

            {/* Radio Button: Agent */}
            {/* TODO: Switch radio button image when clicked */}
            <label className="section-01-form-radio-btns regular-16-16">A licensed Agent
                <input className="section-01-form-radio-btns__input" type="radio" name="radio" />
                <img className="section-01-form-radio-btns__radio" src={radioDefault} />
            </label>

            {/* Radio Button: Real Estate School */}
            <label className="section-01-form-radio-btns section-01-form-radio-btns--school regular-16-16">In Real Estate School
                <input className="section-01-form-radio-btns__input" type="radio" name="radio" />
                <img className="section-01-form-radio-btns__radio" src={radioChecked} />
            </label>

            {/* Submit Button */}
            <button className="section-01-form__submit bold-20-20" type="submit">GET STARTED</button>
        </form>
    );
}

export default S01Form;
