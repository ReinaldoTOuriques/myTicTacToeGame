const playerX = 'X'
const playerO = 'O'

class GameLogic {
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

  // Método para verificar se o jogo acabou com uma vitória ou um empate. Em ambos os casos, deve retornar uma mensagem na tela indicando o resultado.
  isTheGameOver () {
    // Verifica se o jogo terminou em empate.
    if (this.isDraw()) {
      return 'O jogo terminou em empate!'
    }
    // Verifica se o jogo terminou com vitória.
    if (this.isVictory()) {
      return `O jogador ${this.currentPlayerName()} venceu!`
    }
    // Caso contrário, retorna false.
    return false
  }

  // Método para verificar se o jogo terminou em empate.
  isDraw () {
    // Verifica se todas as posições do tabuleiro estão preenchidas.
    return this.board.every(position => position)
  }

  // Método para verificar se o jogo terminou com vitória.
  isVictory () {
    // Percorre todas as combinações de vitória.
    for (const combination of this.winningCombinations) {
      // Verifica se todas as posições da combinação são iguais e diferentes de null.
      if (
        this.board[combination[0]] &&
        this.board[combination[0]] === this.board[combination[1]] &&
        this.board[combination[0]] === this.board[combination[2]]
      ) {
        // Caso positivo, retorna true.
        return true
      }
    }
    // Caso contrário, retorna false.
    return false
  }

  // Método para reiniciar o jogo.
  restart () {
    // Reinicia o tabuleiro.
    this.board = new Array(9).fill(null)
    // Define o jogador atual como 'X'.
    this.currentPlayer = playerX
  }
}

module.exports = GameLogic
