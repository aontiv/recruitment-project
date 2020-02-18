import React, { useState } from "react";

import Header from "./Header";
import S01Grid from "./S01Grid";
import S02Grid from "./S02Grid";
import S03Grid from "./S03Grid";
import SS03Grid from "./SS03Grid";
import S04Grid from "./S04Grid";
import S05Grid from "./S05Grid";
import S06Grid from "./S06Grid";
import Footer from "./Footer";

const App = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="main-bg">
            <div className="background--top">
                <Header />
                <S01Grid submitted={submitted} setSubmitted={setSubmitted} />
                <S02Grid />
                <S03Grid />
                <SS03Grid />
                <S04Grid />
            </div>
            <div className="background--bottom">
                <S05Grid />
                <S06Grid />
            </div>
            <Footer submitted={submitted} setSubmitted={setSubmitted} />
        </div>
    );
}

export default App;
