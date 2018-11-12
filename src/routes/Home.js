import React from 'react';

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
`;

const Li = styled('li')`
  list-style: none;
  // width: 100%;
  margin: 1.2rem;
`;

// TODO: use react hooks!!!
class Home extends React.Component {
  state = {
    show: true,
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  }

  goTo = target => () => {
    this.toggleShow();
    setTimeout(() => {
      this.props.history.push(target);
    }, 750);
  }

  render() {
    return (
      <FlexNav>
        <Right>
          <OffsetAndOpacityAnimate show={this.state.show}>
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
                    <Li>
                      <Button onClick={this.goTo('/issues')}>Issues</Button>
                    </Li>
                    <Li>
                      <Button onClick={this.goTo('/material')}>Material</Button>
                    </Li>
                    <Li>
                      <Button onClick={this.goTo('/events')}>Events</Button>
                    </Li>
                    <Li>
                      <Button onClick={this.goTo('/setting')}>Setting</Button>
                    </Li>
                  </Ul>
                </Card>
              );
            }}
          </OffsetAndOpacityAnimate>
        </Right>
      </FlexNav>
    );
  }
};

export default Home;
