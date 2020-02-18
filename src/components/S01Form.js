import React, { useState } from "react";

import S01FormInput from "./S01FormInput";
import S01FormCheckbox from "./S01FormCheckbox";

import nameIcon from "../media/svgs/section-01-form-input__full-name.svg";
import emailIcon from "../media/svgs/section-01-form-input__email.svg";
import phoneIcon from "../media/svgs/section-01-form-input__phone.svg";

const S01Form = ({ submitted, setSubmitted }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [agentChecked, setAgentChecked] = useState(false);
    const [schoolChecked, setSchoolChecked] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (name && email && phone) {
            setName("");
            setEmail("");
            setPhone("");
            setAgentChecked(false);
            setSchoolChecked(false);
            setSubmitted(true);
        }
    }

    return (
        <form className="section-01-form" onSubmit={handleSubmit}>
            <h2 className="section-01-form__title medium-40-48">{submitted ? "Thank You!" : "Start now!"}</h2>
            <p className="section-01-form__subtitle regular-20-28">{submitted ? "A KW growth leader will contact you soon." : "Start your KW journey today:"}</p>
            <S01FormInput
                type="text"
                placeholder="Full Name"
                src={nameIcon}
                text={name}
                setText={setName}
                submitted={submitted}
            />
            <S01FormInput
                type="email"
                placeholder="Email"
                src={emailIcon}
                text={email}
                setText={setEmail}
                submitted={submitted}
            />
            <S01FormInput
                type="phone"
                placeholder="Phone"
                src={phoneIcon}
                text={phone}
                setText={setPhone}
                submitted={submitted}
            />
            <S01FormCheckbox
                agentChecked={agentChecked}
                setAgentChecked={setAgentChecked}
                text="A licensed Agent"
                submitted={submitted}
            />
            <S01FormCheckbox
                schoolChecked={schoolChecked}
                setSchoolChecked={setSchoolChecked}
                school=" section-01-form-radio-btns--school"
                text="In Real Estate School"
                submitted={submitted}
            />
            <button className="section-01-form__submit bold-20-20" type="submit" disabled={submitted}>GET STARTED</button>
        </form>
    );
}

export default S01Form;
