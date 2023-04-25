import React, { useEffect, useState } from "react";
import { VscMute, VscUnmute } from "react-icons/vsc";

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false); // State to keep track of mute status

  useEffect(() => {
    const audio = new Audio("/audio/bgm.mp3"); // Replace with the path to your music file
    audio.loop = true; // Set to true if you want the music to loop
    if (!isMuted) {
      // Play the music only if not muted
      audio.play();
    }

    // Clean up the audio when the component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
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
