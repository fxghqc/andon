import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import styled from 'react-emotion';

import Button from '../components/Button';
import Card from '../components/Card';
import OffsetAndOpacityAnimate from '../components/OffsetAndOpacityAnimate';

const Container = styled('div')`
  width: 86%;
  margin: 0 auto;
`;

const FlexColumn = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const FlexRow = styled('div')`
  display: flex;
`;

const Footer = styled('div')`
  padding-bottom: 1rem;
`;

const Issues = () => (
  <Container>
    <FlexColumn>
      <OffsetAndOpacityAnimate>
        {(state) => {
          const { offset, opacity } = state;
          return (
            <Card
              style={{
                transform: `translateY(${offset}px)`
              }}
              className={css`
                flex: 1;
                padding: 1rem;
                margin: 1rem 0;
                transform: translateY(${offset}px);
              `}
            >
              <div style={{
                opacity: `${opacity}`
              }}
              >
                Issue List
              </div>
            </Card>
          );
        }}
      </OffsetAndOpacityAnimate>
      <OffsetAndOpacityAnimate>
        {(state) => {
          const { offset, opacity } = state;
          return (
            <Footer
              style={{
                transform: `translateY(${offset}px)`
              }}
            >
              <FlexRow style={{
                opacity: `${opacity}`
              }}
              >
                <Link to="">
                  <Button>Create New Issue</Button>
                </Link>
                <Link to="/">
                  <Button className={css`
                    margin-left: .5rem;
                  `}
                  >
                    Return To Home
                  </Button>
                </Link>
              </FlexRow>
            </Footer>
          );
        }}
      </OffsetAndOpacityAnimate>

    </FlexColumn>
  </Container>
);

export default Issues;
