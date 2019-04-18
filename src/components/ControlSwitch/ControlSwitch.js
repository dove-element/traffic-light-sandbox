import React from 'react';
import PropTypes from 'prop-types';
import styles from './ControlSwitch.module.scss';
import classNames from 'classnames';

const ControlSwitch = ({ position, onToggle, disabled = false }) => {
  return (
    <div className={classNames(styles.switch, { [styles.disabled]: disabled })}>
      <div
        className={classNames(styles.knob, styles[position])}
        onClick={() => {
          if (!disabled) {
            onToggle(position === 'left' ? 'right' : 'left');
          }
        }}
      />
    </div>
  );
};

ControlSwitch.propTypes = {
  position: PropTypes.oneOf(['left', 'right', 'unset']).isRequired,
  onToggle: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default ControlSwitch;
