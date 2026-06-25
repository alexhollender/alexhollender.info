'use client'
import { useState, useEffect } from "react"
import { importAll, removeDuplicates } from "@/utils/mediaImports"
import Image from "next/image"
import type { StaticImageData } from "next/image"
const mediaArray = importAll(require.context('@public/media/home', true, /\.(png|jpe?g|gif|svg)$/))

const media = removeDuplicates(mediaArray)

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function extractFileName(path: string): string {
  const matches = path.match(/\/([^\/]+?)\.\w+\.\w+$/);
  return matches ? matches[1] : '';
}

export default function Gallery() {
  const [randomSeries, setRandomSeries] = useState<number[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const initialArray = Array.from({ length: media.length }, (_, index) => index);
    setRandomSeries(shuffleArray(initialArray));
  }, []);

  function imgNext() {
    setCount((prevCount) => (prevCount + 1) % media.length);
  }

  const currentImage = media[randomSeries[count]] ?? ({} as StaticImageData);
  const nextImage = media[randomSeries[(count + 1) % media.length]] ?? ({} as StaticImageData);

  return (
    <div className="max-w-lg pb-16 pt-8">
      {randomSeries.length > 0 && (
        <>
          <Image
            src={currentImage.src}
            width={currentImage.width}
            height={currentImage.height}
            alt='personal image'
            className="m-0 cursor-e-resize"
            priority
            onClick={imgNext}
          />
          <Image
            src={nextImage.src}
            width={nextImage.width}
            height={nextImage.height}
            alt={extractFileName(nextImage.src)}
            style={{ display: 'none' }}
            priority
          />
        </>
      )}
    </div>
  );
}




