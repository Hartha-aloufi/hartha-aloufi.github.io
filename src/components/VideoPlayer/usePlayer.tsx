import React, { useCallback, useMemo } from 'react';
import { YouTubeProps } from 'react-youtube';
import shar7Data from './data';

type Shar7 = 'amdad';

export const usePlayer = (
  playerRef: React.MutableRefObject<YouTubeProps['onReady'] | null>,
  shar7: Shar7,
  ayaNumber: number,
) => {
  const metadata = shar7Data[shar7][ayaNumber];

  // Function to play video from a specific time
  const playAtTime = useCallback(
    (seconds: number) => {
      if (!playerRef.current) {
        console.warn('Player is not ready yet');
        return;
      }

      if (playerRef.current && 'seekTo' in playerRef.current) {
        playerRef.current.seekTo(seconds, true); // Move to specific time
        playerRef.current.playVideo(); // Start playing
      }
    },
    [playerRef],
  );

  return { playAtTime, shar7Metadata: metadata };
};
