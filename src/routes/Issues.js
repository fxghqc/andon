import React from 'react';
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

// FIXME: show and toggle and goto
class Issues extends React.Component {
  state = {
    show: true,
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show })
  }

  goTo = target => () => {
    this.toggleShow();
    setTimeout(() => {
      this.props.history.push(target);
    }, 750);
  }

  render() {
    const { show } = this.state;
    return (
      <Container>
        <FlexColumn>
          <OffsetAndOpacityAnimate show={show}>
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
          <OffsetAndOpacityAnimate show={show}>
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
                    <Button>Create New Issue</Button>
                    <Button className={css`
                      margin-left: .5rem;
                    `}
                      onClick={this.goTo('/')}
                    >
                      Return To Home
                    </Button>
                  </FlexRow>
                </Footer>
              );
            }}
          </OffsetAndOpacityAnimate>

        </FlexColumn>
      </Container>
    );
  }
}

export default Issues;
