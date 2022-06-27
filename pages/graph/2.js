import { VegaLite } from 'react-vega';
import React from 'react';
export default function Graph(props) {

  const [dimension, setDimensions] = React.useState({height:100,width:100});

  React.useEffect(() => {
    window.addEventListener('resize',() => {
      clearTimeout(timeOutFunctionId);
      var timeOutFunctionId = setTimeout(() => {
          setDimensions({
            ...dimension,
            width:window.innerWidth,
            height:window.innerHeight
          },500)
        }
      )
    })
  }, [])

  let spec = {
    height:dimension.height /2,
    width:dimension.width /2,
    mark:'point',
    encoding: {
      x: {field: 'Miles_per_Gallon',type:'quantitative'},
      y: {field: 'Cylinders', type: 'quantitative'}
    },
    data: {name:'data'}
  }
  return (
    <div className = "chart-container">
      <VegaLite spec = {spec} data = {{'data':props.data}}/>
    </div>
  );
}

export async function getStaticProps(context) {
  let data = await fetch('https://cdn.jsdelivr.net/npm/vega-datasets@1.31.1/data/cars.json')
  let jsonData = await data.json()

  return {
    props: {data:jsonData}
  }
}