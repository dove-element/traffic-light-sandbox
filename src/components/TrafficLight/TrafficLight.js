import React from 'react';
import PropTypes from 'prop-types';
import styles from './TrafficLight.module.scss';
import TrafficLightLight from '../TrafficLightLight/TrafficLightLight';

const TrafficLight = ({ lightColour }) => {
  return (
    <div className={styles.trafficLight}>
      <TrafficLightLight colour="red" switchedOn={lightColour === 'red'} />
      <TrafficLightLight colour="amber" switchedOn={lightColour === 'amber'} />
      <TrafficLightLight colour="green" switchedOn={lightColour === 'green'} />
    </div>
  );
};

TrafficLight.propTypes = {
  lightColour: PropTypes.oneOf(['red', 'amber', 'green']).isRequired,
};

export default TrafficLight;
