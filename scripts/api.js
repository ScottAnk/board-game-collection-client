export const getWholeCollection = () => {
  return fetch('http://127.0.0.1:8000')
}

export const showGameDetails = (id) => {
  return fetch(`http://127.0.0.1:8000/${id}`)
}

export const createGameDocument = (boardGame) => {
  return fetch('http://127.0.0.1:8000',{
    method:'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(boardGame)
  })
}