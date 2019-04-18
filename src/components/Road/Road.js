import React from 'react';
import PropTypes from 'prop-types';
import styles from './Road.module.scss';
import { junctionPositions } from '../../shared/constants';

const Road = props => {
  return (
    <div className={styles.road}>
      <div className={styles.centerLine} />
    </div>
  );
};

Road.propTypes = {
  position: PropTypes.oneOf(junctionPositions).isRequired,
};

export default Road;
