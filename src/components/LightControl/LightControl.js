import React from 'react';
import PropTypes from 'prop-types';
import Switch from '../ControlSwitch/ControlSwitch';
import TrafficLightLight from '../TrafficLightLight/TrafficLightLight';
import styles from './LightControl.module.scss';

const LightControl = ({ lightColour, onChange }) => {
  const disabled = lightColour === 'amber';
  let position;
  switch (lightColour) {
    case 'red':
      position = 'left';
      break;
    case 'green':
      position = 'right';
      break;
    case 'amber':
      position = 'unset';
      break;
    default:
      position = 'unset';
  }
  return (
    <div className={styles.control}>
      <TrafficLightLight colour="red" switchedOn={lightColour === 'red'} />
      <Switch
        position={position}
        onToggle={nextState => {
          if (nextState === 'left') {
            onChange('red');
          } else if (nextState === 'right') {
            onChange('green');
          }
        }}
        disabled={disabled}
      />
      <TrafficLightLight colour="green" switchedOn={lightColour === 'green'} />
    </div>
  );
};

LightControl.propTypes = {
  lightColour: PropTypes.oneOf(['red', 'amber', 'green']).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LightControl;
