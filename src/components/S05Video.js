import React from "react";

import video from "../media/vids/kw-promotional-video.mp4";

const S05Video = ({ setPlaying, videoRef }) => {
    const onPlay = () => {
        setPlaying(true);
    }

    const onPause = () => {
        setPlaying(false);
    }

    return (
        <video
            ref={videoRef}
            className="section-05__video"
            controls
            src={video}
            onPlay={onPlay}
            onPause={onPause}
        />
    );
}

export default S05Video;
