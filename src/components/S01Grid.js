import React from "react";

import S01Text from "./S01Text";
import S01Airplane from "./S01Airplane";
import S01Form from "./S01Form";

const S01Grid = ({ submitted, setSubmitted }) => {
    return (
        <div className="section-01 grid">
            <S01Text />
            <S01Airplane />
            <S01Form submitted={submitted} setSubmitted={setSubmitted} />
        </div>
    );
}

export default S01Grid;
