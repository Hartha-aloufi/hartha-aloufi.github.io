import React, { useCallback } from 'react';
import { Verse } from '../../components/Verse/Verse';
import { useNavigate, useParams } from 'react-router-dom';
import { RadioGroup } from '../../components/Radio/Radio';
import { TafseerBook, useTafsir } from '../../api/verse';
import { NextPrevButton } from '../../components/NextPrevButton/NextPrevButton';

const TafsirBookOptions = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <RadioGroup
      name="tafseer"
      items={[
        { label: 'التفسير المُيسر', value: 'ar-tafsir-muyassar' as TafseerBook },
        { label: 'إبن كثير', value: 'ar-tafsir-ibn-kathir' as TafseerBook },
        {
          label: 'الطبري',
          value: 'ar-tafsir-al-tabari' as TafseerBook,
        },
        {
          label: 'القرطبي',
          value: 'ar-tafseer-al-qurtubi' as TafseerBook,
        },
        {
          label: 'السعدي',
          value: 'ar-tafseer-al-saddi' as TafseerBook,
        },
      ]}
      value={params.book || 'ar-tafsir-muyassar'}
      onChange={evt => {
        navigate(`/tafsir/${params.verseNumber}/${evt.target.value}`);
      }}
    />
  );
};

export const Tafsir = () => {
  const params = useParams();
  const tafsirQuery = useTafsir('49', params.verseNumber, params.book);
  const navigate = useNavigate();

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
      navigate(`/tafsir/${ayaNumber}/${params.book}`);
    },
    [params.verseNumber, params.book, navigate],
  );

  return (
    <div>
      <div className="min-h-[25vh] pb-8 pt-5 mb-7">
        <Verse suraId={'49'} verseNumber={params.verseNumber} />
      </div>

      <NextPrevButton onClick={changeAyaHandler} nextText='التالية' prevText='السابقة'/>
      <div className="border-b my-3"></div>

      <div className="mb-5">
        <TafsirBookOptions />
      </div>

      <div
        className="text-right leading-6"
        dangerouslySetInnerHTML={{ __html: tafsirQuery.data?.tafsir.text }}
      ></div>
    </div>
  );
};
