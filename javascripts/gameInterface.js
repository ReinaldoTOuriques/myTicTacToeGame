const GameLogic = require('./gameLogic.js')

// A classe GameInterface estende a classe GameLogic para herdar a lógica do jogo.
class GameInterface extends GameLogic {
  constructor () {
    super()
  }

  // Método para exibir o tabuleiro na tela do usuário.
  showBoard () {

  }
}

// Exporta a classe GameInterface para uso em outros arquivos
module.exports = GameInterface
