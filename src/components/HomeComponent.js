import React, { Component } from 'react';
import Chart from './ChartComponent';
import What from './WhatComponent';

class Home extends Component {

  render() {
    return(
      	<div>
        	<What />
        	<Chart />
      	</div>
    );
  }
}

export default Home;