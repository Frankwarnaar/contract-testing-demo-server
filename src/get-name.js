exports.handler = async function (event) {
  const persons = ['Sjoerd', 'Casper', 'Robin', 'Selwyn', 'Vincent']
  const personIndex = Math.floor(Math.random() * persons.length)
  const person = persons[personIndex]

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      name: person
    })
  }
}
