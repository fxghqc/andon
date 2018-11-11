import React from 'react';
import { Link } from 'react-router-dom';

import { css } from 'emotion';
import styled from 'react-emotion';

import Button from '../components/Button';
import Card from '../components/Card';
import OffsetAndOpacityAnimate from '../components/OffsetAndOpacityAnimate';

const FlexNav = styled('nav')`
  display: flex;
  justify-content: flex-end;
  height: 100vh;
`;

const Right = styled('div')`
  width: 32%;
  max-width: 450px;
  min-width: 280px;
  position: relative;
`;

const Ul = styled('ul')`
  padding-left: 0;
  margin: 0;
  padding-left: 1rem;

  a {
    text-decoration: none;
  }
`;

const Li = styled('li')`
  list-style: none;
  // width: 100%;
  margin: 1.2rem;
`;

const Home = () => {
  return (
    <FlexNav>
      <Right>
        <OffsetAndOpacityAnimate>
          {(state) => {
            const { offset, opacity } = state;
            return (
              <Card
                style={{
                  transform: `translateY(${offset}px)`
                }}
                className={css`
                  position: relative;
                  top: 7%;
                  border-right: 0;
                  border-top-right-radius: 0;
                  border-bottom-right-radius: 0;
                `}
              >
                <Ul style={{
                  opacity: `${opacity}`
                }}
                >
                  <Link to="/issues">
                    <Li>
                      <Button>Issues</Button>
                    </Li>
                  </Link>
                  <Link to="/material">
                    <Li>
                      <Button>Material</Button>
                    </Li>
                  </Link>
                  <Link to="/events">
                    <Li>
                      <Button>Events</Button>
                    </Li>
                  </Link>
                  <Link to="/settings">
                    <Li>
                      <Button>Setting</Button>
                    </Li>
                  </Link>
                </Ul>
              </Card>
            );
          }}
        </OffsetAndOpacityAnimate>
      </Right>
    </FlexNav>
  );
};

export default Home;
