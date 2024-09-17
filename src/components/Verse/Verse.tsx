import React, { useEffect } from 'react';
import { useVerse } from '../../api/verse';
import { loadPageFont } from '../../api/fontLoader';

import './Verse.css';

export const Verse = (props: { suraId: string; verseNumber: string }) => {
  const verseQuery = useVerse(props.suraId, props.verseNumber);

  /**
   * Load needed font family
   */
  useEffect(() => {
    if (verseQuery.data?.page_number) {
      loadPageFont(verseQuery.data?.page_number);
    }
  }, [verseQuery.data?.page_number]);

  return (
    <div className="verse">
      {verseQuery.data?.words.map(word => (
        <span
          className="verse__word"
          style={{ fontFamily: `p${verseQuery.data?.page_number}-v1` }}
          key={word.id}
        >
          {word.code_v1}
        </span>
      ))}
    </div>
  );
};
