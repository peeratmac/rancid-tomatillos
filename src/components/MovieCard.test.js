import React from 'react';
import { shallow } from 'enzyme';
import { MovieCard } from './MovieCard';

describe('MovieCard', () => {
  let wrapper;
  it('should match the MovieCard Snapshot', () => {
    wrapper = shallow(
      <MovieCard
        id={3}
        title={'Frozen II'}
        poster_path={
          'https://image.tmdb.org/t/p/original//pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg'
        }
        backdrop_path={
          'https://image.tmdb.org/t/p/original//xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg'
        }
        release_date={'2019-11-20'}
        overview={
          'Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.'
        }
        average_rating={8}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
