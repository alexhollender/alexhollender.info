'use client'
import { useState, useEffect } from "react"
import { importAll, removeDuplicates } from "@/utils/mediaImports"
import Image from "next/image"
import s from './gallery.module.scss'
const mediaArray = importAll(require.context('@public/media/home', true, /\.(png|jpe?g|gif|svg)$/))

const media = removeDuplicates(mediaArray)

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function extractFileName(path) {
  const matches = path.match(/\/([^\/]+?)\.\w+\.\w+$/);
  return matches ? matches[1] : '';
}

export default function Gallery() {
  const [randomSeries, setRandomSeries] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const initialArray = Array.from({ length: media.length }, (_, index) => index);
    setRandomSeries(shuffleArray(initialArray));
  }, []);

  function imgNext() {
    setCount((prevCount) => (prevCount + 1) % media.length);
  }

  function imgPrev() {
    setCount((prevCount) => (prevCount - 1 + media.length) % media.length);
  }

  const currentImage = media[randomSeries[count]] || {};
  const nextImage = media[randomSeries[(count + 1) % media.length]] || {};

  return (
    <div className={`${s.gallery} gallery`}>
      <div className={s.controls}>
        <div className={s.previous} onClick={imgNext}></div>
        <div className={s.next} onClick={imgPrev}></div>
      </div>
      {randomSeries.length > 0 && (
        <>
          <Image
            src={currentImage.src}
            width={currentImage.width}
            height={currentImage.height}
            alt={extractFileName(currentImage.src)}
            priority
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




