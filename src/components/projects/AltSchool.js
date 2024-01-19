import { importAll, removeDuplicates } from "@/utils/mediaImports"
import Link from "next/link"
import ImageWrapper from "@/components/imageWrapper/ImageWrapper";
const mediaArray = importAll(require.context('@public/media/projects/altschool', true, /\.(png|jpe?g|gif|svg)$/));

export default function AltSchool() {
  const media = removeDuplicates(mediaArray)

  return (
    <>
    <section>
      <p className="projectInfo">
        <span>Role: First designer / Lead UX Designer</span>
        <span>Organization: AltSchool</span>
        <span>Date: January 2015–September 2018</span>
      </p>

      <p>In January 2015 I moved to San Francisco to work for <Link href="https://www.newyorker.com/magazine/2016/03/07/altschools-disrupted-education" target="_blank" rel="external">AltSchool</Link>, an education technology company. They had raised over a hundred million dollars, opened a few micro/lab schools, and were aiming to reimagine K–8 education with a focus on interdisciplinary, personalized, project-based learning. I was the first full-time designer to join. I mainly worked as a product designer on the learning management platform, which helped teachers plan, assign, and assess more personalized learning experiences for their students. There was a student-facing part of the experience, with a daily "playlist" of assignments, goals, a portfolio of work, etc., and a parent portal as well, where parents could participate in their child's eudcation. I learned a lot about education, America's public school system, and working with kids (I did a bit of volunteer teaching). Along the way I got to work on a bunch of other fun things as well like the 8th grade diplomas, habit cards to help younger learners learn important life skills, branding & marketing stuff, and more.</p>
    </section>
    <section>
      {media.map((item, index) =>
        <ImageWrapper 
          key={item.src}
          item={item}
          project="AltSchool"
          index={index}
        />
      )}
    </section>
    </>
  )
}