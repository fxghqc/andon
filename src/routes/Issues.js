import React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';

import Button from '../components/Button';
import AnimatedCard from '../components/AnimatedCard';
import CenterLayout from '../components/CenterLayout';

const FlexColumn = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const FlexRow = styled('div')`
  display: flex;
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
      <CenterLayout>
        <FlexColumn>
          <AnimatedCard
            show={show}
            cardClass={css`
              flex: 1;
            `}
          >
            Issue List
          </AnimatedCard>
          <AnimatedCard show={show}>
            <FlexRow>
              <Button>Create New Issue</Button>
              <Button className={css`
                margin-left: .5rem;
              `}
                onClick={this.goTo('/')}
              >
                Return To Home
              </Button>
            </FlexRow>
          </AnimatedCard>
        </FlexColumn>
      </CenterLayout>
    );
  }
}

export default Issues;
