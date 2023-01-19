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

    <form data-id="${boardGame._id}" id="update-board-game-form" >
      <input type="text" name="name" placeholder="game title" />
      <input type="number" name="minPlayers" placeholder="minimum players" />
      <input type="number" name="maxPlayers" placeholder="maximum players" />
      <input type="number" name="rating" placeholder="rating" />
      <input type="submit" value="Update Game" />
    </form>
    <button data-id="${boardGame._id}" data-apimethod="delete">Delete Game</button>
  `  
  boardGameDetailsContainer.appendChild(div)
}

export const onCreateGameDocumentSuccess = (boardGame) => {
  messageContainer.innerHTML = `<h3>${boardGame.name} has been added to your collection!</h3>`
}

export const onUpdateGameDocumentSuccess = (name) => {
  messageContainer.innerHTML = `<h3>${name} has been updated</h3>`
}

export const onDeleteGameDocumentSuccess = (name) => {
  messageContainer.innerHTML = `<h3>${name} has been deleted</h3>`
}

export const onError = (error) => {
  messageContainer.innerHTML = `
    <h3>There was an error</h3>
    <p>${error}</p>
  `
}