import React from "react";
import { easeElasticOut, easeBackInOut, easeQuadOut } from "d3-ease";
import Animate from "react-move/Animate";

const OffsetAndOpacityAnimate = ({ children }) => {
  const initOffset = window.innerHeight;
  return (
    <Animate
      start={{ // the starting state (required)
         offset: -initOffset,
         opacity: 0,
      }}
      enter={[{ // how to transform state on enter (optional)
        offset: [0],
        timing: { delay: 300, duration: 750, ease: easeElasticOut.amplitude(1.4).period(0.45) }
      }, {
        opacity: [1],
        timing: { delay: 1000, duration: 1000, ease: easeQuadOut }
      }]}

      update={{ // how to transform node state on update (optional)
      }}

      leave={[{ // how to transform node state on leave (optional)
        offset: [0],
        timing: { duration: 750, ease: easeBackInOut }
      }, {
        opacity: [0],
        timing: { delay: 0, duration: 500, ease: easeQuadOut }
      }]}
    >
      {children}
    </Animate>
  );
};

export default OffsetAndOpacityAnimate;
