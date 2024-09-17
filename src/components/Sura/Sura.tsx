import React from 'react';
import { useSura } from '../../api/verse';
import { Verse } from '../Verse/Verse';

export const Sura = (props: { suraId: number }) => {
  const suraQuery = useSura(props.suraId);

  return (
    <div className="sura">
      {suraQuery.data?.verses.map(verse => {
        return <Verse key={verse.id} suraId={props.suraId} verseNumber={verse.id} />;
      })}
    </div>
  );
};
