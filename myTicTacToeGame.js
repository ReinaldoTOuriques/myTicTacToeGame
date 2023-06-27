const playerX = 'X'
const playerO = 'O'

class TicTacToe {
  constructor () {
    // Cria um tabuleiro representado por um array com 9 elementos, inicialmente preenchidos com null.
    this.board = new Array(9).fill(null)
    // Define o jogador atual como 'X'.
    this.currentPlayer = playerX
  }

  // Método para fazer uma jogada.
  play (index) {
    // Verifica se o índice está dentro dos limites do tabuleiro e se a posição está vazia.
    if (index < 0 || index >= this.board.length || this.board[index]) {
      throw new Error(
        'Jogada inválida. Por favor, escolha uma posição vazia no tabuleiro.'
      )
    }
    // Atualiza a posição no tabuleiro com a marca do jogador atual.
    this.board[index] = this.currentPlayer
    // Alterna o jogador atual para o próximo.
    this.currentPlayer = this.currentPlayer === playerX ? playerO : playerX
  }
}

module.exports = TicTacToe
