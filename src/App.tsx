
// import React, { useState, useEffect, useRef } from 'react';
// import './App.css'; // Ensure CSS is correctly defined

// // Drum kit sounds with valid URLs
// const drumSounds: { [key: string]: { sound: string, key: string, label: string } } = {
//   'Q': { sound: 'https://freesound.org/data/previews/381/381007_6484552-lq.mp3', key: 'Q', label: 'Snare' },
//   'W': { sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', key: 'W', label: 'Bass' },
//   'E': { sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', key: 'E', label: 'Hi-Hat' },
//   'A': { sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', key: 'A', label: 'Kick' },
//   'S': { sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', key: 'S', label: 'Tom 1' },
//   'D': { sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', key: 'D', label: 'Tom 2' },
//   'Z': { sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', key: 'Z', label: 'Ride' },
//   'X': { sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', key: 'X', label: 'Crash' },
//   'C': { sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3', key: 'C', label: 'Open Hi-Hat' },
// };

// const App: React.FC = () => {
//   const [currentSound, setCurrentSound] = useState<string>('');
//   const [kit, setKit] = useState<string>('rock');
//   const [volume, setVolume] = useState<number>(1); // Volume state, default to max (1)
//   const [isPlaying, setIsPlaying] = useState<boolean>(false); // Track if sound is playing

//   // Ref to hold the audio instance to control playback (pause/stop)
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   // Format volume as percentage
//   const volumePercentage = Math.round(volume * 100);

//   // Play sound and set current sound label
//   const playSound = (sound: string) => {
//     // Pause and reset previous audio
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }

//     const audio = new Audio(sound);
//     audio.volume = volume; // Apply the current volume level
//     audioRef.current = audio;  // Store reference to control playback
//     audio.play().then(() => {
//       setIsPlaying(true); // Update state after audio starts playing
//     }).catch((err) => {
//       console.error("Error playing sound: ", err);
//       setIsPlaying(false); // Handle error gracefully
//     });
//   };

//   // Stop any playing sound
//   const stopSound = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//       setIsPlaying(false); // Update state to reflect sound is stopped
//     }
//   };

//   const handleKeyPress = (event: KeyboardEvent) => {
//     const key = event.key.toUpperCase();
//     if (drumSounds[key]) {
//       playSound(drumSounds[key].sound);
//       setCurrentSound(drumSounds[key].label);
//     }
//   };

//   // Visual feedback via background change when a drum pad is clicked
//   const handlePadClick = (sound: string, label: string) => {
//     playSound(sound);
//     setCurrentSound(label);
//   };

//   // Handling keyboard events when the component mounts
//   useEffect(() => {
//     const handle = (event: KeyboardEvent) => handleKeyPress(event);
//     window.addEventListener('keydown', handle);
//     return () => {
//       window.removeEventListener('keydown', handle);
//     };
//   }, [volume]);

//   // Update volume on audio ref whenever volume state changes
//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.volume = volume; // Ensure volume is updated when it changes
//     }
//   }, [volume]); // This will run every time the volume changes

//   return (
//     <div className="app">
//       <h1>Interactive Drum Kit</h1>
//       <div className="drum-kit">
//         {Object.keys(drumSounds).map((key) => {
//           const { sound, label } = drumSounds[key];
//           return (
//             <div
//               key={key}
//               className={`drum-pad ${currentSound === label ? 'active' : ''}`} // Fixed className syntax error
//               onClick={() => handlePadClick(sound, label)}
//             >
//               <span>{key}</span>
//               <p>{label}</p>
//             </div>
//           );
//         })}
//       </div>

//       <div className="sound-indicator">
//         <h2>Currently Playing:</h2>
//         <p>{currentSound}</p>
//       </div>

//       <div className="kit-selector">
//         <button onClick={() => setKit(kit === 'rock' ? 'electronic' : 'rock')}>
//           Switch to {kit === 'rock' ? 'Electronic' : 'Rock'} Kit
//         </button>
//       </div>

//       {/* Volume Control */}
//       <div className="volume-control">
//         <label htmlFor="volume-slider">Volume: {volumePercentage}%</label>
//         <input
//           id="volume-slider"
//           type="range"
//           min="0"
//           max="1"
//           step="0.01"
//           value={volume}
//           onChange={(e) => setVolume(parseFloat(e.target.value))}
//         />
//       </div>

//       {/* Stop Button */}
//       <div className="stop-button">
//         <button onClick={stopSound}>Stop Sound</button>
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // Ensure CSS is correctly defined

// Drum kit sounds with valid URLs
const drumSounds: { [key: string]: { sound: string, key: string, label: string } } = {
  'Q': { sound: 'https://freesound.org/data/previews/381/381007_6484552-lq.mp3', key: 'Q', label: 'Snare' },
  'W': { sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', key: 'W', label: 'Bass' },
  'E': { sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', key: 'E', label: 'Hi-Hat' },
  'A': { sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', key: 'A', label: 'Kick' },
  'S': { sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', key: 'S', label: 'Tom 1' },
  'D': { sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', key: 'D', label: 'Tom 2' },
  'Z': { sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', key: 'Z', label: 'Ride' },
  'X': { sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', key: 'X', label: 'Crash' },
  'C': { sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3', key: 'C', label: 'Open Hi-Hat' },
};

const App: React.FC = () => {
  const [currentSound, setCurrentSound] = useState<string>('');
  const [kit, setKit] = useState<string>('rock');
  const [volume, setVolume] = useState<number>(1); // Volume state, default to max (1)
  const [isPlaying, setIsPlaying] = useState<boolean>(false); // Track if sound is playing

  // Ref to hold the audio instance to control playback
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Format volume as percentage
  const volumePercentage = Math.round(volume * 100);

  // Play sound and set current sound label
  const playSound = (sound: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(sound);
    audio.volume = volume;
    audioRef.current = audio;
    audio.play()
      .then(() => setIsPlaying(true))
      .catch((err) => {
        console.error("Error playing sound: ", err);
        setIsPlaying(false);
      });

    audio.onended = () => setIsPlaying(false); // Reset playing status when finished
  };

  // Stop any playing sound
  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const key = event.key.toUpperCase();
    if (drumSounds[key]) {
      playSound(drumSounds[key].sound);
      setCurrentSound(drumSounds[key].label);
    }
  };

  const handlePadClick = (sound: string, label: string) => {
    playSound(sound);
    setCurrentSound(label);
  };

  // Keyboard events
  useEffect(() => {
    const handle = (event: KeyboardEvent) => handleKeyPress(event);
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [volume]);

  // Update volume dynamically
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="app">
      <h1>Interactive Drum Kit</h1>

      <div className="drum-kit">
        {Object.keys(drumSounds).map((key) => {
          const { sound, label } = drumSounds[key];
          return (
            <div
              key={key}
              className={`drum-pad ${currentSound === label ? 'active' : ''}`}
              onClick={() => handlePadClick(sound, label)}
            >
              <span>{key}</span>
              <p>{label}</p>
            </div>
          );
        })}
      </div>

      <div className="sound-indicator">
        <h2>Currently Playing:</h2>
        <p>{currentSound || "None"}</p>
        <p>Status: {isPlaying ? "Playing 🎵" : "Idle"}</p> {/* ✅ Use isPlaying */}
      </div>

      <div className="kit-selector">
        <button onClick={() => setKit(kit === 'rock' ? 'electronic' : 'rock')}>
          Switch to {kit === 'rock' ? 'Electronic' : 'Rock'} Kit
        </button>
      </div>

      <div className="volume-control">
        <label htmlFor="volume-slider">Volume: {volumePercentage}%</label>
        <input
          id="volume-slider"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </div>

      <div className="stop-button">
        <button onClick={stopSound}>Stop Sound</button>
      </div>
    </div>
  );
};

export default App;






