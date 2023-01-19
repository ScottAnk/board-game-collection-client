import {
  getWholeCollection,
  showGameDetails,
  createGameDocument,
  updateGameDocument,
  deleteGameDocument
} from './api.js'
import {
  onGetWholeCollectionSuccess,
  onShowGameDetailsSuccess,
  onCreateGameDocumentSuccess,
  onUpdateGameDocumentSuccess,
  onDeleteGameDocumentSuccess,
  onError,
} from './ui.js'

const boardGameCollectionContainer = document.querySelector(
  '#board-game-collection-container'
)
const boardGameDetailsContainer = document.querySelector(
  '#board-game-details-container'
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

boardGameDetailsContainer.addEventListener('submit', (e) => {
  e.preventDefault()

  const gameData = {
    boardGame: {
      name: e.target.name.value ? e.target.name.value : null,
      minPlayers: e.target.minPlayers.value ? e.target.minPlayers.value : null,
      maxPlayers: e.target.maxPlayers.value ? e.target.maxPlayers.value : null,
      rating: e.target.rating.value ? e.target.rating.value : null,
    },
  }
  updateGameDocument(gameData, e.target.getAttribute('data-id'))
    .then(() => onUpdateGameDocumentSuccess(gameData.boardGame.name))
    .catch(onError)
})

boardGameDetailsContainer.addEventListener('click', (e) => {
  e.preventDefault()

  const id = e.target.getAttribute('data-id')
  const method = e.target.getAttribute('data-apimethod')
  if (!id || method != 'delete') { return }

  deleteGameDocument(id)
    .then((res) => res.json())
    .then((POJO) => onDeleteGameDocumentSuccess(POJO.boardGame.name))
    .catch(onError)
})