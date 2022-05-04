/* eslint-disable no-unused-vars */
import React from 'react'
import PhotoList from '../PhotoList';
import {capitalizeFirstLetter} from '../../utils/helpers';

// create the gallery component
function Gallery(props) {
    const { currentCategory } = props;
    return (
      <section>
        <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
        <p>{currentCategory.description}</p>
        <PhotoList category={currentCategory.name} />
      </section>
    );
  }

export default Gallery;