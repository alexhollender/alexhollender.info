import { importAll } from '../functions.js';

const AltSchool = () => {
  // import large images
  var imagesLarge = importAll(require.context('../media/altschool/large', true, /\.(png|jpe?g|svg)$/));
  // import small images
  var imagesSmall = importAll(require.context('../media/altschool/small', true, /\.(png|jpe?g|svg)$/));
  // create array of objects, {largeImage: smallImage}
  var imagesArr = [];
  {imagesLarge.map((element, index) => (
   imagesArr.push({[element]: imagesSmall[index]})
  ))}

  return (
    <>
    <p>In January 2015 I moved to San Francisco to work for <a href="https://www.newyorker.com/magazine/2016/03/07/altschools-disrupted-education" target="_blank" rel="noreferrer">AltSchool</a>, an education technology company. They had raised over a hundred million dollars, opened a few micro/lab schools, and were aiming to reimagine K–8 education with a focus on interdisciplinary, personalized, project-based learning. I was the second designer to join. I mainly worked as a product designer on the learning management platform, which helped teachers plan, assign, and assess more personalized learning experiences for their students. There was a student-facing part of the experience, with a daily "playlist" of assignments, goals, a portfolio of work, etc., and a parent portal as well, where parents could participate in their child's eudcation. I learned a lot about education, America's public school system, and working with kids (I did a bit of volunteer teaching). Along the way I got to work on a bunch of other fun things as well like the 8th grade diplomas, habit cards to help younger learners learn important life skills, branding & marketing stuff, and more.</p>
    {imagesArr.map((element, index) => (
      <picture key={index}>
        <source media="(min-width:1580px)" srcSet={Object.keys(element)} width="2000" />
        <img src={Object.values(element)} width="1000" loading="lazy" key={index} />
      </picture>
    ))}
    </>
  )
}

export default AltSchool;
