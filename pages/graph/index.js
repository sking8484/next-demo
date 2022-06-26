import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Chart from '../../components/vl/Chart'
export default function Graph(props) {
  return (
    <div className = "chart-container">
      <Chart data = {props.data}/>
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