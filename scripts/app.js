import {
  getWholeCollection,
  showGameDetails,
  createGameDocument,
} from './api.js'
import {
  onGetWholeCollectionSuccess,
  onShowGameDetailsSuccess,
  onCreateGameDocumentSuccess,
  onError,
} from './ui.js'

const boardGameCollectionContainer = document.querySelector(
  '#board-game-collection-container'
)
const createGameForm = document.querySelector('#create-board-game-form')

getWholeCollection()
  .then((res) => res.json())
  // .then(console.log)
  .then((POJO) => onGetWholeCollectionSuccess(POJO.boardGames))
  .catch(onError)

boardGameCollectionContainer.addEventListener('click', (e) => {
  const id = e.target.getAttribute('data-id')
  if (!id) {
    return
  }

  showGameDetails(id)
    .then((res) => res.json())
    .then((POJO) => onShowGameDetailsSuccess(POJO.boardGame))
    .catch(onError)
})

createGameForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const gameData = {
    boardGame: {
      name: createGameForm.name.value,
      minPlayers: createGameForm.minPlayers.value,
      maxPlayers: createGameForm.maxPlayers.value,
      rating: createGameForm.rating.value,
    },
  }
  createGameDocument(gameData)
    .then((res) => res.json())
    .then((POJO) => onCreateGameDocumentSuccess(POJO.boardGame))
    .catch(onError)
})
