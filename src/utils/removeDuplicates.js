export function removeDuplicateRecipes(array) {
  return array.reduce((acc, current) => {
    const found = acc.find(item => item.id === current.id);
    if (!found) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
}

export function removeDuplicateMedia(mediaArray) {
  return mediaArray.reduce((acc, current) => {
    const found = acc.find(item => item.src === current.src);
    if (!found) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
}