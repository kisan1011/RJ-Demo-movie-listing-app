import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import user from '../../images/user.png';
import './Header.scss';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';
import { fetchAsyncShows } from '../../features/movies/seriesSlice';

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (term) {
      // fetch movie/show by search text
      dispatch(fetchAsyncMovies(term));
      dispatch(fetchAsyncShows(term));
    } else {
      alert('Please enter text');
    }
    setTerm('');
  };

  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>Movie App</div>
      </Link>
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <div>
            <input
              type='text'
              value={term}
              placeholder='search...'
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
          <button type='submit'>
            <i className='fa fa-search'></i>{' '}
          </button>
        </form>
      </div>
      <div className='user-image'>
        <img src={user} alt='user' />
      </div>
    </div>
  );
};

export default Header;
