export function importAll(r) {
  return r.keys().map(key => r(key).default);
}

export function removeDuplicates(mediaArray) {
  return mediaArray.reduce((acc, current) => {
    const found = acc.find(item => item.src === current.src);
    if (!found) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
}