import React, { useEffect, useState, useRef } from "react";
import { VscMute, VscUnmute } from "react-icons/vsc";

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(true); // Set initial state to muted
  const audioRef = useRef(null); // Create a ref to store the audio element

  useEffect(() => {
    audioRef.current = new Audio("/audio/bgm.mp3"); // Replace with the path to your music file
    audioRef.current.loop = true; // Set to true if you want the music to loop
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
    <div className="fixed bottom-8 left-16">
      {/* Mute button */}
      <button
        onClick={handleMuteToggle}
        className="grid text-white bg-black rounded-full place-items-center w-14 h-14"
      >
        {isMuted ? <VscMute /> : <VscUnmute />}
      </button>
    </div>
  );
};

export default BackgroundMusic;
