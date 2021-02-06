import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { CoursesGrid } from '../../styles/CoursesStyles.css';

function SingleCourse({ course }) {
  const data = useStaticQuery(graphql`
    {
      imageQuery: allFile(
        filter: { absolutePath: { regex: "**/courseLogos/" } }
      ) {
        images: nodes {
          publicURL
          name
        }
      }
    }
  `);

  const findImage = (source) => {
    const { images } = data.imageQuery;
    let foundImage = null;

    images.forEach((image) => {
      if (image.name === source) {
        foundImage = image;
      }
    });

    return foundImage;
  };

  const { status, logo, title, url, length } = course;
  const logoImage = findImage(logo);

  return (
    <>
      <CoursesGrid>
        <div>{status === 'complete' ? `✅` : `⬜`}</div>
        <div>
          <img
            src={logoImage.publicURL}
            alt={logoImage.name}
            width="25"
            height="25"
          />
        </div>
        <div>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </div>
        <div>{length}</div>
      </CoursesGrid>
      <hr />
    </>
  );
}

export default SingleCourse;

SingleCourse.propTypes = {
  course: PropTypes.object,
};
