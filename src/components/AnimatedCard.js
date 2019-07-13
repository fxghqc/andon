import React from 'react';
import { css } from 'emotion';

import Card from '../components/Card';
import OffsetAndOpacityAnimate from '../components/OffsetAndOpacityAnimate';

const  AnimatedCard = ({ show, children, cardClass }) => (
  <OffsetAndOpacityAnimate show={show}>
    {(state) => {
      const { offset, opacity } = state;
      return (
        <Card
          style={{
            transform: `translateY(${offset}px)`
          }}
          className={css`
            /* flex: 1; */
            padding: 1rem;
            margin: 1rem 0;
            transform: translateY(${offset}px);
          ` + ' ' + cardClass}
        >
          <div style={{
            opacity: `${opacity}`
          }}
          >
            {children}
          </div>
        </Card>
      );
    }}
  </OffsetAndOpacityAnimate>
);

export default AnimatedCard;
