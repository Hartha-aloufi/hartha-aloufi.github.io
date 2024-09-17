const isLoaded = new Map<number, boolean>();

export const loadPageFont = async (pageNumber: number) => {
  if (isLoaded.has(pageNumber)) {
    return;
  }
  isLoaded.set(pageNumber, true);

  const myFont = new FontFace(
    `p${pageNumber}-v1`,
    `url(https://quran.com/fonts/quran/hafs/v1/woff2/p${pageNumber}.woff2)`,
  );
  await myFont.load();
  document.fonts.add(myFont);
};
