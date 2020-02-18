import React from "react";

import playIcon from "../media/svgs/section-05-text-action__play.svg";
import pauseIcon from "../media/svgs/section-05-text-action__pause.svg";

const S05Text = ({ playing, setPlaying, videoRef }) => {
    // Control whether to play or pause video
    const videoControl = () => {
        playing ? pauseVideo() : playVideo();
    }

    const playVideo = () => {
        videoRef.current.play();
        setPlaying(true);
    }

    const pauseVideo = () => {
        videoRef.current.pause();
        setPlaying(false);
    }

    // Choose which video icon to show
    const chooseIcon = () => {
        return playing ? pauseIcon : playIcon;
    }

    return (
        <div className="section-05-text">
            <h4 className="section-05-text__title bold-20-20">Want to learn more?</h4>
            <p className="section-05-text__text light-16-24">Check out the promotional video to get inspired:</p>
            <div className="section-05-text-action">
                <img className="section-05-text-action__play" src={chooseIcon()} alt="Promotional Video" onClick={videoControl} />
                <p className="section-05-text-action__text bold-20-20">WATCH VIDEO</p>
            </div>
        </div>
    );
}

export default S05Text;
