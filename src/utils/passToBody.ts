export const passToBody = <T extends object>(options: T) => {
  const urlencoded = new URLSearchParams();

  Object.entries(options).map(([key, value]) => {
    urlencoded.append(key, value);
  });

  return urlencoded;
};
