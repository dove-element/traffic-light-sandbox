import React from 'react';
import PropTypes from 'prop-types';
import styles from './ControlBox.module.scss';
import LightControl from '../LightControl/LightControl';
import { getJunctionLightColour } from '../../shared/utilities';

const ControlBox = ({ junctions, changeLight }) => {
  return (
    <div className={styles.controlBox}>
      <h2>Controls</h2>
      <div className={styles.controls}>
        <div className={styles.control}>
          <h4>North:</h4>
          <LightControl
            lightColour={getJunctionLightColour(junctions, 'north')}
            onChange={nextColour => changeLight('north', nextColour)}
          />
        </div>
        <div className={styles.control}>
          <h4>East:</h4>
          <LightControl
            lightColour={getJunctionLightColour(junctions, 'east')}
            onChange={nextColour => changeLight('east', nextColour)}
          />
        </div>
        <div className={styles.control}>
          <h4>South:</h4>
          <LightControl
            lightColour={getJunctionLightColour(junctions, 'south')}
            onChange={nextColour => changeLight('south', nextColour)}
          />
        </div>
        <div className={styles.control}>
          <h4>West:</h4>
          <LightControl
            lightColour={getJunctionLightColour(junctions, 'west')}
            onChange={nextColour => changeLight('west', nextColour)}
          />
        </div>
      </div>
    </div>
  );
};

ControlBox.propTypes = {
  junctions: PropTypes.array.isRequired,
  changeLight: PropTypes.func.isRequired,
};

export default ControlBox;
