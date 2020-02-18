import React, { createRef, useState, useEffect } from "react";

import S05Video from "./S05Video";
import S05Text from "./S05Text";

const S05Grid = () => {
    const [playing, setPlaying] = useState(false);
    const videoRef = createRef();

    return (
        <div className="section-05 grid">
            <S05Video setPlaying={setPlaying} videoRef={videoRef} />
            <S05Text playing={playing} setPlaying={setPlaying} videoRef={videoRef} />
        </div>
    );
}

export default S05Grid;
