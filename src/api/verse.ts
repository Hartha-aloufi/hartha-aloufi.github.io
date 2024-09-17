import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from './client';

/**
 * fetch sura verses by id
 * @param suraId
 * @returns
 */
export const useSura = (suraId: number) => {
  return useQuery({
    queryKey: ['sura', suraId],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/verses/by_chapter/${suraId}?words=true&per_page=20`,
      );
      return data;
    },
  });
};

/**
 * fetch verse by sura and verse id
 * this function uses sura get api to fetch all verses then select the verse by id
 * @param suraId
 * @param verseNumber
 * @returns
 */
export const useVerse = (suraId: string, verseNumber: string) => {
  return useQuery({
    queryKey: ['sura', suraId],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/verses/by_chapter/${suraId}?words=true&per_page=20fields=text_uthmani%2Cchapter_id%2Chizb_number%2Ctext_imlaei_simple&translations=131&reciter=7&word_translation_language=en&page=1&word_fields=verse_key%2Cverse_id%2Cpage_number%2Clocation%2Ctext_uthmani%2Ccode_v1%2Cqpc_uthmani_hafs&mushaf=`,
      );
      return data;
    },
    select: data => {
      return data.verses.find(verse => verse.verse_number == verseNumber);
    },
  });
};

/**
 * available tafseer books
 */
export type TafseerBook =
  | 'ar-tafsir-ibn-kathir'
  | 'ar-tafsir-al-tabari'
  | 'ar-tafseer-al-qurtubi'
  | 'ar-tafseer-al-saddi'
  | 'ar-tafsir-muyassar';

/**
 * fetch tafsir by sura, verse and book
 * @param suraId
 * @param verseId
 * @param book
 * @returns
 */
export const useTafsir = (suraId: string, verseId: string, book: TafseerBook) => {
  return useQuery({
    queryKey: ['tafsir', { suraId, verseId, book }],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/tafsirs/${book}/by_ayah/${suraId}:${verseId}`);
      return data;
    },
  });
};
