import React, { Component } from "react";
import Particles from "react-particles-js";

class ParticlesPage extends Component {
  render() {
    const styles = {
      canvas : {
        position:"fixed !important",
        left:0,
        top:0,
        width:"100%",
        height:"100%"
    }
    }
    return (
      <div style = {styles.canvas}>
        <Particles />
      </div>
    );
  }
}

export default ParticlesPage;
