class TicTacToe {
  // Construtor da classe.
  constructor () {
    // Cria um tabuleiro representado por um array com 9 elementos, todos inicializados como null.
    this.board = new Array(9).fill(null)
    // Define o jogador atual como 'X'.
    this.player = 'X'
  }

  // Método para fazer uma jogada.
  play (index) {
    // Atualiza a posição no tabuleiro com a marca do jogador atual.
    this.board[index] = this.player
    // Alterna o jogador atual para o próximo.
    this.player = this.player === 'X' ? 'O' : 'X'
  }
}

// Exporta a classe TicTacToe para uso em outros arquivos.
module.exports = TicTacToe
