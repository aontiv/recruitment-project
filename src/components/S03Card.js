import React from "react";

const S03Card = ({ src, title, text }) => {
    return (
        <div className="section-03-card">
            <div className="section-03-card-icon">
                <img className="section-03-card-icon__img" src={src} alt={title} />
            </div>
            <h3 className="section-03-card__title bold-24-28">{title}</h3>
            <p className="section-03-card__text light-16-24">{text}</p>
        </div>
    );
}

export default S03Card;
