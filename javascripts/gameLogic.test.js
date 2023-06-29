// Importando a classe GameLogic do arquivo myTicTacToeGame.js.
const GameLogic = require('./gameLogic.js')

// Suíte de testes.
describe('GameLogic', () => {
  let theGame = null

  // Antes de cada teste, cria uma nova instância da classe GameLogic e atribui a variável theGame.
  beforeEach(() => {
    theGame = new GameLogic()
  })

  // Teste: o jogo deve ser inicializado com um tabuleiro vazio.
  test('should initialize with an empty board', () => {
    // Verifica se o tabuleiro do jogo é igual a um array com nove elementos nulos.
    expect(theGame.board).toEqual([null, null, null, null, null, null, null, null, null])
  })

  // Teste: deve ser possível incluir os nomes dos dois jogadores.
  test('should be possible to include the names of the two players', () => {
    // Verifica se o nome do jogador X é igual a 'Jogador 1'.
    expect(theGame.playerX).toEqual('Jogador 1')
    // Verifica se o nome do jogador O é igual a 'Jogador 2'.
    expect(theGame.playerO).toEqual('Jogador 2')
  })

  // Teste: o jogo deve ser inicializado com o jogador X.
  test('should initialize with player X', () => {
    // Verifica se o jogador do jogo é igual a 'X'.
    expect(theGame.currentPlayer).toEqual('X')
  })

  // Teste: o jogador deve ser capaz de fazer uma jogada e alternar o jogador atual após a jogada.
  test('should be able to make a play and alternate the current player', () => {
    // Faz uma jogada na posição 0.
    theGame.play(0)
    // Verifica se a posição 0 do tabuleiro é igual a 'X'.
    expect(theGame.board[0]).toEqual('X')
    // Verifica se o jogador atual é igual a 'O'.
    expect(theGame.currentPlayer).toEqual('O')

    // Faz uma jogada na posição 1.
    theGame.play(1)
    // Verifica se a posição 1 do tabuleiro é igual a 'O'.
    expect(theGame.board[1]).toEqual('O')
    // Verifica se o jogador atual é igual a 'X'.
    expect(theGame.currentPlayer).toEqual('X')
  })

  // Teste: o jogador não deve ser capaz de fazer uma jogada em uma posição ocupada.
  test('should not be able to make a play in an occupied position', () => {
    // Faz uma jogada na posição 0.
    theGame.play(0)
    // Verifica se a posição 0 do tabuleiro é igual a 'X'.
    expect(theGame.board[0]).toEqual('X')
    // Verifica se o jogador atual é igual a 'O'.
    expect(theGame.currentPlayer).toEqual('O')

    // Tenta fazer uma jogada na posição 0 novamente.
    expect(() => theGame.play(0)).toThrow(
      'Jogada inválida. Por favor, escolha uma posição vazia no tabuleiro.'
    )
  })

  // Teste: o nome do jogador da vez deve ser mostrado na tela e alterado a medida que os turnos vão se alternando.
  test('should show the name of the current player', () => {
    // Verifica se o nome do jogador atual é igual a 'Jogador 1'.
    expect(theGame.currentPlayerName()).toEqual('Jogador 1')

    // Faz uma jogada na posição 0.
    theGame.play(0)
    // Verifica se o nome do jogador atual é igual a 'Jogador 2'.
    expect(theGame.currentPlayerName()).toEqual('Jogador 2')

    // Faz uma jogada na posição 1.
    theGame.play(1)
    // Verifica se o nome do jogador atual é igual a 'Jogador 1'.
    expect(theGame.currentPlayerName()).toEqual('Jogador 1')
  })

  // Teste: o jogo deve ser capaz de identificar um empate.
  test('should be able to identify a draw', () => {
    // Faz uma jogada na posição 0.
    theGame.play(0)
    // Faz uma jogada na posição 1.
    theGame.play(1)
    // Faz uma jogada na posição 2.
    theGame.play(2)
    // Faz uma jogada na posição 4.
    theGame.play(4)
    // Faz uma jogada na posição 3.
    theGame.play(3)
    // Faz uma jogada na posição 5.
    theGame.play(5)
    // Faz uma jogada na posição 6.
    theGame.play(6)
    // Faz uma jogada na posição 8.
    theGame.play(8)
    // Faz uma jogada na posição 7.
    theGame.play(7)
    // Verifica se o jogador atual é igual a 'O'.
    expect(theGame.currentPlayer).toEqual('O')
    // Verifica se o nome do jogador atual é igual a 'Jogador 2'.
    expect(theGame.currentPlayerName()).toEqual('Jogador 2')
    // Verifica se o jogo terminou em empate.
    expect(theGame.isDraw()).toEqual(true)
  })

  // Teste: o jogo deve ser capaz de identificar o vencedor.
  test('should be able to identify the winner', () => {
    // Faz uma jogada na posição 0.
    theGame.play(0)
    // Faz uma jogada na posição 3.
    theGame.play(3)
    // Faz uma jogada na posição 1.
    theGame.play(1)
    // Faz uma jogada na posição 4.
    theGame.play(4)
    // Faz uma jogada na posição 2.
    theGame.play(2)
    // Verifica se o jogador atual é igual a 'O'.
    expect(theGame.currentPlayer).toEqual('O')
    // Verifica se o nome do jogador atual é igual a 'Jogador 2'.
    expect(theGame.currentPlayerName()).toEqual('Jogador 2')
    // Verifica se o vencedor é o jogador X.
    expect(theGame.isVictory()).toEqual(true)
  })

  // Teste: Deve ser possível reiniciar o jogo para jogar novamente.
  test('should be possible to restart the theGame to play again', () => {
    // Reinicia o jogo.
    theGame.restart()
    // Verifica se o tabuleiro do jogo é igual a um array com nove elementos nulos.
    expect(theGame.board).toEqual([null, null, null, null, null, null, null, null, null])
    // Verifica se o nome do jogador X é igual a 'Jogador 1'.
    expect(theGame.playerX).toEqual('Jogador 1')
    // Verifica se o nome do jogador O é igual a 'Jogador 2'.
    expect(theGame.playerO).toEqual('Jogador 2')
    // Verifica se o jogador atual é igual a 'X'.
    expect(theGame.currentPlayer).toEqual('X')
  })
})
