const boardGameCollectionContainer = document.querySelector(
  '#board-game-collection-container'
)
const boardGameDetailsContainer = document.querySelector(
  '#board-game-details-container'
)
const messageContainer = document.querySelector('#message-container')

export const onGetWholeCollectionSuccess = (boardGames) => {
  boardGames.forEach((boardGame) => {
    const div = document.createElement('div')
    div.innerHTML = `
      <h3>${boardGame.name}</h3>
      <button data-id="${boardGame._id}">Show Details</button>
    `
    boardGameCollectionContainer.appendChild(div)
  })
}

export const onShowGameDetailsSuccess = (boardGame) => {
  const div = document.createElement('div')
  div.innerHTML = `
    <h3>${boardGame.name}</h3>
    <p>${boardGame.minPlayers} - ${boardGame.maxPlayers} players</p>
    <p>rating: ${boardGame.rating}/5</p>
  `  
  boardGameDetailsContainer.appendChild(div)
}

export const onCreateGameDocumentSuccess = (boardGame) => {
  messageContainer.innerHTML = `<h3>${boardGame.name} has been added to your collection!</h3>`
}

export const onError = () => {
  messageContainer.innerHTML = `
    <h3>There was an error</h3>
    <p>${error}</p>
  `
}