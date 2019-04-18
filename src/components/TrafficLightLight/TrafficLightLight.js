import React from 'react';
import PropTypes from 'prop-types';
import styles from './TrafficLightLight.module.scss';
import classNames from 'classnames';

const TrafficLightLight = ({ colour, switchedOn = false }) => {
  return (
    <div
      className={classNames(styles.light, styles[colour], {
        [styles.switchedOn]: switchedOn,
      })}
    />
  );
};

TrafficLightLight.propTypes = {
  colour: PropTypes.oneOf(['red', 'amber', 'green']).isRequired,
  switchedOn: PropTypes.bool,
};

export default TrafficLightLight;
