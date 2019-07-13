import React from 'react';
import { css } from 'emotion';

import OffsetAndOpacityAnimate from '../components/OffsetAndOpacityAnimate';

const AnimatedTitle = ({ disabled, show, children, className }) => (
  <OffsetAndOpacityAnimate show={show}>
    {(state) => {
      const { offset } = state;
      return (
        <div
          style={{
            transform: !disabled ? `translateY(${offset}px)` : ''
          }}
          className={css`
            /* flex: 1; */
            transform: translateY(${offset}px);
          ` + className ? ` ${className}` : ''}
        >
          {children}
        </div>
      );
    }}
  </OffsetAndOpacityAnimate>
);

export default AnimatedTitle;
