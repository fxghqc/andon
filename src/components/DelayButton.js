import React from 'react';

import Button from './Button';

class DelayButton extends React.Component {
  static defaultProps = {
    delay: 750,
  }

  handleClick = () => {
    const { onClick, delay } = this.props;
    setTimeout(onClick, delay);
  }
  render () {
    return (
      <Button onClick={this.handleClick} />
    );
  }
}

export default DelayButton;
