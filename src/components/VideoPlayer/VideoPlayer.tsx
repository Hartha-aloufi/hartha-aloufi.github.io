import React, { useRef } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

const VideoPlayer = (props: { youtubeVidId: string }) => {
  // Use a ref to store the player instance
  const playerRef = useRef<YouTubeProps['onReady'] | null>(null);

  // Event handler for when the YouTube player is ready
  const onReady = (event: { target: YT.Player }) => {
    playerRef.current = event.target;
  };

  // Function to play video from a specific time
  const playAtTime = (seconds: number) => {
    if (playerRef.current && 'seekTo' in playerRef.current) {
      playerRef.current.seekTo(seconds, true); // Move to specific time
      playerRef.current.playVideo(); // Start playing
    }
  };
  
  // Function to pause video at a specific time
  const pauseAtTime = (seconds: number) => {
    if (playerRef.current && 'seekTo' in playerRef.current) {
      playerRef.current.seekTo(seconds, true); // Move to specific time
      playerRef.current.pauseVideo(); // Pause the video
    }
  };

  return (
    <div>
      <YouTube videoId={props.youtubeVidId} onReady={onReady} />
      <button onClick={() => playAtTime(10)}>Play from 10 seconds</button>
      <button onClick={() => pauseAtTime(20)}>Pause at 20 seconds</button>
    </div>
  );
};

export default VideoPlayer;
