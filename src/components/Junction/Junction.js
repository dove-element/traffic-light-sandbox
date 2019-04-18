import React from 'react';
import PropTypes from 'prop-types';
import styles from './Junction.module.scss';
import classNames from 'classnames';
import Road from '../Road/Road';
import TrafficLight from '../TrafficLight/TrafficLight';
import { lightColours, junctionPositions } from '../../shared/constants';

const Junction = ({ lightColour, position }) => {
  return (
    <div className={classNames(styles.junction, styles[position])}>
      <div className={styles.road}>
        <Road position={position} />
      </div>
      <div className={styles.light}>
        <TrafficLight lightColour={lightColour} />
      </div>
    </div>
  );
};

Junction.propTypes = {
  lightColour: PropTypes.oneOf(lightColours).isRequired,
  position: PropTypes.oneOf(junctionPositions).isRequired,
};

export default Junction;
