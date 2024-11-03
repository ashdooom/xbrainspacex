import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack] = useState({ title: 'lying is the most fun a girl can have without taking her clothes off', url: '/music/lying.mp3' });

    const sound = new Howl({
        src: [currentTrack.url],
        autoplay: false,
    });

    useEffect(() => {
        if (isPlaying) {
            sound.play();
        } else {
            sound.pause();
        }

        return () => sound.unload();
    }, [isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="musicPlayer" style={{ display: 'flex', alignItems: 'center', gap: '1vh' }}>
            <div>{currentTrack.title}</div>
            <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay}
                onClick={togglePlayPause}
                style={{ cursor: 'pointer', fontSize: '1rem', marginLeft: '1vh', marginRight: '7vh' }}
            />
        </div>
    );
}

export default MusicPlayer;
