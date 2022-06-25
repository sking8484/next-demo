import executeQuery from './db'

async function createObjectData(data) {
  return data.map(v => Object.assign({} , v));
}

export default async function getAllData() {
  const query = "SELECT * FROM dummy_events";
  var result = await executeQuery({query:query});
  var data = await createObjectData(result);
  return data;
}

export async function getAllPostIds() {
  let result = await getAllData();
  let idObjs = result.map(obj => ({params:{id:obj.id}}));
  return idObjs;
}

export async function getPostById(id) {
  let result = await getAllData();
  return result.filter(v => v.id === id )
}