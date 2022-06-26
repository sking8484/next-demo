

export default function Graph(props) {
  return <p>{JSON.stringify(props)}</p>
}


export async function getStaticProps(context) {
  let data = await fetch('https://cdn.jsdelivr.net/npm/vega-datasets@1.31.1/data/cars.json')
  return {
    props: {data:data.json()}
  }
}