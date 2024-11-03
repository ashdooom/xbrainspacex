import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";

const tracks = [
    { title: "lying is the most fun a girl can have without taking her clothes off", url: "/music/lying.mp3" },
    { title: "i like money", url: "/music/iLikeMoney.mp3" },
    { title: "THE FIRST LADY OF JUICY COUTURE!!!!", url: "/music/juicyCouture.mp3" },
    { title: "fall from a star", url: "/music/fall.mp3" },
];

function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    const sound = new Howl({
        src: [tracks[currentTrackIndex].url],
        autoplay: false,
    });

    useEffect(() => {
        if (isPlaying) {
            sound.play();
        } else {
            sound.pause();
        }

        return () => sound.unload();
    }, [isPlaying, currentTrackIndex]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const playNextTrack = () => {
        setIsPlaying(false);
        setCurrentTrackIndex((currentTrackIndex + 1) % tracks.length);
        setIsPlaying(true);
    };

    const playPreviousTrack = () => {
        setIsPlaying(false);
        setCurrentTrackIndex((currentTrackIndex - 1 + tracks.length) % tracks.length);
        setIsPlaying(true);
    };

    return (
        <div className="musicPlayer" style={{ display: "flex", alignItems: "center", gap: "1vh" }}>

            <div>{tracks[currentTrackIndex].title}</div>
            <FontAwesomeIcon
                icon={faStepBackward}
                onClick={playPreviousTrack}
                style={{ cursor: "pointer", fontSize: "1rem", marginRight: "1vh" }}
            />
            <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay}
                onClick={togglePlayPause}
                style={{ cursor: "pointer", fontSize: "1rem", marginLeft: "1vh", marginRight: "1vh" }}
            />
            <FontAwesomeIcon
                icon={faStepForward}
                onClick={playNextTrack}
                style={{ cursor: "pointer", fontSize: "1rem", marginLeft: "1vh" }}
            />
        </div>
    );
}

export default MusicPlayer;
