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
        <div
            style={{
                position: "relative",
                width: "300px",
                height: "110px",
                backgroundImage: "url('/ipod.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingBottom: "40px",
                color: "#ff00c3",
                fontSize: "0.7rem",
                textAlign: "center",
                fontFamily: "monospace",
            }}
        >
            <div style={{
                width: "120px", color: "#000", left: "5%", position: "absolute", top: "15%", fontSize: "10px"
            }}>
                {tracks[currentTrackIndex].title}
            </div>

            <div style={{
                width: "120px", color: "#000", left: "5%", position: "absolute", top: "80%", fontSize: "10px"   
            }}>
                <FontAwesomeIcon
                    icon={faStepBackward}
                    onClick={playPreviousTrack}
                    style={{ cursor: "pointer", padding: "0 10px" }}
                />
                <FontAwesomeIcon
                    icon={isPlaying ? faPause : faPlay}
                    onClick={togglePlayPause}
                    style={{ cursor: "pointer", padding: "0 10px" }}
                />
                <FontAwesomeIcon
                    icon={faStepForward}
                    onClick={playNextTrack}
                    style={{ cursor: "pointer", padding: "0 10px" }}
                />
            </div>
        </div>
    );
}

export default MusicPlayer;
