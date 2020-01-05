import React from 'react';
import {findRating} from './util';

describe('Util', () => {
  let mockId;
  let mockUser;

  beforeEach(() => {
    mockId = 3;
    mockUser = {id: 9, name: 'Marge', email: 'marge@turing.io', ratings: [
      {id:45,
        user_id:9,
        movie_id:1,
        rating:8,
        created_at:"2019-12-25T20:16:34.893Z",
        updated_at:"2019-12-25T20:16:34.893Z"},
      {id:46,
        user_id:9,
        movie_id:2,
        rating:10,
        created_at:"2019-12-25T20:30:21.606Z",
        updated_at:"2019-12-25T20:30:21.606Z"}
      ]}
  })

  it('should return \'...\' when user has not yet rated movie', () => {
    let expected = '...';

    expect(findRating(mockId, mockUser, 'rating')).toEqual(expected);
  })
})
