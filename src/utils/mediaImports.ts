import type { StaticImageData } from 'next/image'

export function importAll(r: WebpackRequireContext): StaticImageData[] {
  return r.keys().map((key) => r<{ default: StaticImageData }>(key).default)
}

export function removeDuplicates(mediaArray: StaticImageData[]): StaticImageData[] {
  return mediaArray.reduce<StaticImageData[]>((acc, current) => {
    const found = acc.find((item) => item.src === current.src)
    if (!found) {
      return acc.concat([current])
    } else {
      return acc
    }
  }, [])
}
