import React from "react";

const S01FormInput = ({ type, text, placeholder, src, setText, submitted }) => {
    const handleChange = e => {
        setText(e.target.value);
    }

    return (
        <div className="section-01-form-input">
            <img src={src} alt={placeholder} />
            <input
                className="section-01-form-input__input regular-16-16"
                type={type}
                placeholder={placeholder}
                value={text}
                onChange={handleChange}
                disabled={submitted}
            />
        </div>
    );
}

export default S01FormInput;
