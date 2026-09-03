import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import styles from './AudioController.module.css';

interface AudioControllerProps {
  audioElementId: string;
}

export const AudioController: React.FC<AudioControllerProps> = ({ audioElementId }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = document.getElementById(audioElementId) as HTMLAudioElement;
    if (audio) {
      setAudioElement(audio);
      setIsMuted(audio.muted);
    }
  }, [audioElementId]);

  const toggleMute = () => {
    if (audioElement) {
      audioElement.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <button 
      className={styles.controller} 
      onClick={toggleMute}
      aria-label={isMuted ? "Unmute ambient audio" : "Mute ambient audio"}
      title={isMuted ? "Unmute Audio" : "Mute Audio"}
    >
      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
    </button>
  );
};
