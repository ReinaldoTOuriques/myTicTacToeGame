const playerX = 'X'
const playerO = 'O'

class TicTacToe {
  constructor (playerXName, playerOName) {
    // Cria um tabuleiro representado por um array com 9 elementos, inicialmente preenchidos com null.
    this.board = new Array(9).fill(null)
    // Define o jogador atual como 'X'.
    this.currentPlayer = playerX
    // Define o nome do jogador X.
    this.playerX = playerXName || 'Jogador 1'
    // Define o nome do jogador O.
    this.playerO = playerOName || 'Jogador 2'
    // Mostra o nome do jogador atual.
    this.currentPlayerName = () => {
      return this.currentPlayer === playerX ? this.playerX : this.playerO
    }
    // Define as combinações de vitória.
    this.winningCombinations = [
      // Combinações horizontais.
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Combinações verticais.
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Combinações diagonais.
      [0, 4, 8],
      [2, 4, 6]
    ]
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

  // Método para verificar se o jogo acabou com vitória ou empate.
  isGameOver () {
  // Verifica se todas as células estão preenchidas (empate) ou se há um vencedor.
    return this.board.every(cell => cell !== null) || this.getWinner() !== null
  }

  // Método para obter o vencedor do jogo.
  getWinner () {
    // Percorre todas as combinações vencedoras possíveis.
    for (const combination of this.winningCombinations) {
      const [a, b, c] = combination
      // Verifica se as células da combinação atual possuem o mesmo valor (X ou O).
      if (
        this.board[a] &&
      this.board[a] === this.board[b] &&
      this.board[a] === this.board[c]
      ) {
      // Retorna o valor do jogador vencedor (X ou O).
        return this.board[a]
      }
    }
    // Caso não haja um vencedor, retorna null.
    return null
  }
}

module.exports = TicTacToe
