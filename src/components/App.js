import React, { Component } from 'react';
import SandBox from './Sandbox/Sandbox';
import ControlBox from './ControlBox/ControlBox';
import classNames from 'classnames';
import styles from './App.module.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      junctions: [
        { position: 'north', lightColour: 'red' },
        { position: 'east', lightColour: 'red' },
        { position: 'south', lightColour: 'red' },
        { position: 'west', lightColour: 'red' },
      ],
    };
    this.changeLight = this.changeLight.bind(this);
  }

  render() {
    return (
      <div className={classNames('traffic-light-sandbox-app', styles.app)}>
        <div className={styles.sandbox}>
          <SandBox junctions={this.state.junctions} />
        </div>
        <div className={styles.controlBox}>
          <ControlBox
            junctions={this.state.junctions}
            changeLight={this.changeLight}
          />
        </div>
      </div>
    );
  }

  changeLight(position, nextColour) {
    let junctions = [...this.state.junctions];
    junctions.find(
      junction => junction.position === position,
    ).lightColour = nextColour;
    this.setState({ junctions });
  }
}

export default App;
