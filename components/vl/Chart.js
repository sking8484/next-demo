import React from 'react';
import * as vega from 'vega';
import * as vegaLite from 'vega-lite';
import * as vl from 'vega-lite-api';
import { Handler } from 'vega-tooltip';
import config from './config.js'


export default function Chart(props) {
  const chartRef = React.createRef();
  console.log(vl);
  React.useEffect(() => {
    if(props.data.length>2){
    vl.register(vega, vegaLite, config);

    vl.markPoint()
      .data(props.data)
      .encode(
        vl.x().fieldQ('Miles_per_Gallon').scale({zero:false}),
        vl.y().fieldQ('Displacement').scale({zero:false}),
        vl.tooltip(['Name','Cylinders']),
      	vl.color().fieldQ('Cylinders')
      		.legend({orient:'bottom',titleOrient:'left'}),
      vl.column().fieldN('Origin')
      ).height(300).width(450)
      .render()
      .then((chart) => {
        chartRef.current.appendChild(chart);
      });
  }});

  return <div className = "chart" ref={chartRef}></div>;
}
