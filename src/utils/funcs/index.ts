export const goPrev = (currentIndex: number, length: number) => {
  return (currentIndex - 1 + length) % length;
};

export const goNext = (currentIndex: number, length: number) => {
  return (currentIndex + 1) % length;
};
