import React from 'react';
import Interactive from 'antwar-interactive';
import Container from '../Container/Container';
import VoteApp from 'webpack.vote/dist/vote.bundle.js';
import 'webpack.vote/dist/style.min.css';
import './Vote.scss';

const Vote = ({ section, page }) => (
  <Container className="vote">
    <Interactive
      id="webpack.vote/dist/vote.bundle.js"
      component={ VoteApp }
      // development={ true }
    />
  </Container>
);

Vote.title = 'Vote';

export default Vote;
