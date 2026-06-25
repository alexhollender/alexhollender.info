import type { StaticImageData } from 'next/image'

export function removeDuplicateRecipes<T extends { id: unknown }>(array: T[]): T[] {
  return array.reduce<T[]>((acc, current) => {
    const found = acc.find((item) => item.id === current.id)
    if (!found) {
      return acc.concat([current])
    } else {
      return acc
    }
  }, [])
}

export function removeDuplicateMedia(mediaArray: StaticImageData[]): StaticImageData[] {
  return mediaArray.reduce<StaticImageData[]>((acc, current) => {
    const found = acc.find((item) => item.src === current.src)
    if (!found) {
      return acc.concat([current])
    } else {
      return acc
    }
  }, [])
}
