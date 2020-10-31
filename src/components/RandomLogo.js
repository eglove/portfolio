import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';

function RandomLogo() {
  const data = useStaticQuery(graphql`
    {
      imageQuery: allFile(
        filter: { absolutePath: { regex: "**/codeLogos/" } }
      ) {
        images: nodes {
          publicURL
          name
        }
      }
    }
  `);

  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const images = shuffle(data.imageQuery.images);
  return (
    <>
      {images.map((image, index) => (
        <img
          key={index}
          alt={image.name}
          src={`${image.publicURL}`}
          width="100"
          height="100"
        />
      ))}
    </>
  );
}

export default RandomLogo;
