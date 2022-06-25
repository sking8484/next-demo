import mysql from 'serverless-mysql';


const db = mysql({
  config: {
    host:'162.243.170.65',
    database:'nextTestDatabase',
    user:'lebesgel',
    password:'h3MF$DLNag?QEF!s'
  }
});

export default async function executeQuery({ query, values}) {
  if (values) {
    let results = await db.query(query, values);
  } else {
    let results = await db.query(query);
    await db.end();
    return results;

  }


}