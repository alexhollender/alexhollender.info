import Image from "next/image";
import type { StaticImageData } from "next/image";

interface ImageWrapperProps {
  item: StaticImageData;
  project: string;
  index: number;
}

export default function ImageWrapper({ item, project, index }: ImageWrapperProps) {
  const { src, width, height, blurDataURL } = item;
  
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={`Image of ${project}`}
      placeholder={blurDataURL ? "blur" : undefined}
      blurDataURL={blurDataURL}
      {...(index === 0 || index === 1 ? { priority: true } : {})}
    />
  )
}