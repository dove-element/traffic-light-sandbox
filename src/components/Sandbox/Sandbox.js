import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sandbox.module.scss';
import Junction from '../Junction/Junction';
import { getJunctionLightColour } from '../../shared/utilities';
import { junctionPositions } from '../../shared/constants';

const Sandbox = ({ junctions }) => {
  return (
    <div className={styles.sandbox}>
      {junctionPositions.map(position => (
        <div className={styles[position]} key={position}>
          <Junction
            lightColour={getJunctionLightColour(junctions, position)}
            position={position}
          />
        </div>
      ))}
      <div className={styles.centerJunction}>
        <div />
        <div />
      </div>
    </div>
  );
};

Sandbox.propTypes = {
  junctions: PropTypes.array.isRequired,
};

export default Sandbox;
