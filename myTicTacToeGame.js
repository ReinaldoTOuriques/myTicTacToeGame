class TicTacToe {
  // Construtor da classe.
  constructor () {
    // Cria um tabuleiro representado por um array com 9 elementos, todos inicializados como null.
    this.board = new Array(9).fill(null)
    // Define o jogador atual como 'X'.
    this.player = 'X'
  }
}

// Exporta a classe TicTacToe para uso em outros arquivos.
module.exports = TicTacToe
