import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    document.title = 'TrelloClone';
  }, []);

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <nav className='top'>
        <h2>TrelloClone</h2>
        <div>
          <Button color='inherit' href='/login'>
            Login
          </Button>
          <Button variant='contained' href='/register'>
            Sign Up
          </Button>
        </div>
      </nav>
      <div className='landing-inner'>
        <h1>Trello Clone</h1>
        <p>
          Just like <a href='https://trello.com/'>Trello</a>, but made with a very little knowledge 😉!
        </p>

        <p>
          Please use the platform and suggest any changes that you'd like
        </p>
        <p>
          If you have any suggestio or feature that you want to see, kindly email me at <a href = "mailto:roshanasingh4@gmail.com">roshanasingh4@gmail.com</a>
        </p>
        <div className='buttons'>
          <Button variant='outlined' color='inherit' href='/register'>
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
