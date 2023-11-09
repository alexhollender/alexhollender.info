import Image from "next/image";

export default function ImageWrapper({ item, project, index }) {
  const { src, width, height, blurDataURL } = item;
  
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={`Image of ${project}`}
      placeholder={blurDataURL && "blur"}
      blurDataURL={blurDataURL}
      {...(index === 0 || index === 1 ? { priority: true } : {})}
    />
  )
}