import React, { useEffect, useState, useRef } from "react";
import { VscMute, VscUnmute } from "react-icons/vsc";

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(true); // Set initial state to muted
  const audioRef = useRef(null); // Create a ref to store the audio element

  useEffect(() => {
    audioRef.current = new Audio("/audio/bgm.mp3"); // Replace with the path to your music file
    audioRef.current.loop = true; // Set to true if you want the music to loop
    audioRef.current.volume = 0.2; // Set the volume to 50%
  }, []); // Run this effect only once on mount

  useEffect(() => {
    if (audioRef.current) {
      if (!isMuted) {
        // Play the music only if not muted
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted]); // Add isMuted as a dependency to trigger effect when it changes

  const handleMuteToggle = () => {
    setIsMuted(!isMuted); // Toggle the mute status
  };

  return (
    <div className="asdmusic">
      {/* Mute button */}
      <button
        onClick={handleMuteToggle}
        className="fixed grid w-12 h-12 text-white bg-black rounded-full bottom-5 md:bottom-8 left-5 sm:left-5 md:left-10 lg:left-16 place-items-center sm:w-12 sm:h-12 md:w-14 md:h-14"
      >
        {isMuted ? <VscMute /> : <VscUnmute />}
      </button>
    </div>
  );
};

export default BackgroundMusic;
