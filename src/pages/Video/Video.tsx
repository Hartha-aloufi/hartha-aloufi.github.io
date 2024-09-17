import React, { useCallback, useEffect, useRef } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { usePlayer } from '../../components/VideoPlayer/usePlayer';
import { useNavigate, useParams } from 'react-router-dom';
import { Verse } from '../../components/Verse/Verse';
import { NextPrevButton } from '../../components/NextPrevButton/NextPrevButton';

export const Video = () => {
  const params = useParams();
  const navigate = useNavigate();

  // Use a ref to store the player instance
  const playerRef = useRef<YouTubeProps['onReady'] | null>(null);

  const ayaPlayer = usePlayer(playerRef, params.shar7Id, params.verseNumber);

  // Event handler for when the YouTube player is ready
  const onReady: YouTubeProps['onReady'] = event => {
    playerRef.current = event.target;
  };

  const changeAyaHandler = useCallback(
    (type: 'next' | 'prev') => {
      if (
        (params.verseNumber === '1' && type === 'prev') ||
        (params.verseNumber === '18' && type === 'next')
      ) {
        return;
      }

      if (params.verseNumber == null) {
        return;
      }

      const ayaNumber = parseInt(params.verseNumber) + (type === 'prev' ? -1 : 1);
      navigate(`/shar7/${params.shar7Id}/${ayaNumber}`);
    },
    [params.verseNumber, params.book, navigate],
  );

  /**
   *
   */
  useEffect(() => {
    ayaPlayer.playAtTime(ayaPlayer.shar7Metadata?.time);
  }, [ayaPlayer.shar7Metadata?.time, ayaPlayer.shar7Metadata?.id]);

  return (
    <div className="h-screen w-full">
      <YouTube
        iframeClassName="h-[40vh] w-full"
        videoId={ayaPlayer.shar7Metadata?.id}
        onReady={onReady}
      />

      <div className="border-b my-3"></div>

      <div className="h-[25vh] pb-8 pt-5 mb-7">
        <Verse suraId={'49'} verseNumber={params.verseNumber} />
      </div>

      <NextPrevButton onClick={changeAyaHandler} nextText="التالية" prevText="السابقة" />
    </div>
  );
};
