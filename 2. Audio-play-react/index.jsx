import { useEffect, useState, useRef } from 'react';
import './style.css';
import music from '[your audio path]';

export default function Audios({ isAudioPlaying }) {
  const [audioPlaying, setAudioPlaying] = useState(isAudioPlaying);
  const audioElement = useRef(new Audio(music));
  const lastPlayedTime = useRef(0);

  useEffect(() => {
    setAudioPlaying(isAudioPlaying);
  }, [isAudioPlaying]);

  useEffect(() => {
    audioElement.current.loop = true;

    if (audioPlaying) {
      audioElement.current.currentTime = lastPlayedTime.current;
      audioElement.current.play();
    } else {
      lastPlayedTime.current = audioElement.current.currentTime;
      audioElement.current.pause();
    }

    return () => {
      audioElement.current.pause();
    };
  }, [audioPlaying]);

  const toggleAudio = () => {
    setAudioPlaying(!audioPlaying);
  };

  return (
    <div>
      <button onClick={toggleAudio} className="audio-icon-wrapper" style={{ display: isAudioPlaying ? 'block' : 'none' }}>
        <i className={`bi ${audioPlaying ? 'bi-pause-circle' : 'bi-disc'}`}></i>
      </button>
    </div>
  );
}
