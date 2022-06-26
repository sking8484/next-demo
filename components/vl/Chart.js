import React from 'react';
import * as vega from 'vega';
import * as vegaLite from 'vega-lite';
import * as vl from 'vega-lite-api';
import { Handler } from 'vega-tooltip';
import config from './config.js'


export default function Chart(props) {
  const chartRef = React.createRef();
  React.useEffect(() => {
    if(props.data.length>2){
    vl.register(vega, vegaLite, config);

    vl.markPoint()
      .data(props.data)
      .encode(
        vl.x().fieldQ(props.xField).scale({zero:false}),
        vl.y().fieldQ('Displacement').scale({zero:false}),
        vl.tooltip(['Name','Cylinders', 'Origin']),
      	vl.color().fieldQ('Cylinders')
      		.legend({orient:'bottom',titleOrient:'left'}),

      ).height(300).width(450)
      .render()
      .then((chart) => {
        console.log(chartRef.current.children);
        if(chartRef.current.children.length > 0) {
          //pass
        } else {
          chartRef.current.appendChild(chart);
        }

      });
  }});


  return <div className = "chart" ref={chartRef}></div>;
}
