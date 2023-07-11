// Importando a classe GameLogic do arquivo gameLogic.js para que possamos realizar os testes necessários para a implementação das regras de negócio do jogo da velha.
const GameLogic = require('./gameLogic.js')

// Utilizando o 'describe()', podemos iniciar uma suíte de testes para a classe importada.
describe('GameLogic', () => {
  let theGame = null

  /* Antes de cada teste, criamos uma nova instância da classe GameLogic e atribuímos a variável theGame para que possamos utilizá-la nos testes. Essa abordagem ajuda a evitar a repetição de código, pois a instância da classe só precisa ser criada uma vez antes de cada teste. Dessa forma, qualquer alteração feita na instância da classe em um teste não afetará outros testes, pois uma nova instância será criada antes de cada um deles. */
  beforeEach(() => {
    theGame = new GameLogic()
  })

  // Aqui agrupamos todos os testes relacionados à inicialização do jogo para que haja uma melhor organização do código, facilitando a leitura.
  describe('Testing the game initialization mechanics.', () => {
    // Teste: o jogo deve ser inicializado com um tabuleiro vazio.
    test('should initialize the game with an empty board', () => {
      expect(theGame.board).toHaveLength(9)
      expect(theGame.board.every((cell) => cell === null)).toBeTruthy()
    })

    // Teste: deve ser possível incluir os nomes dos dois jogadores.
    test('should be possible to include the names of the two players', () => {
      expect(theGame.playerX).toBe('Jogador 1')
      expect(theGame.playerO).toBe('Jogador 2')
    })

    // Teste: o jogo deve ser inicializado com o jogador X.
    test('should initialize with player X', () => {
      expect(theGame.currentPlayer).toBe('X')
    })
  })

  describe('Testing the game mechanics related to the player`s turn.', () => {
    // Teste: o jogador deve ser capaz de fazer uma jogada e alternar o jogador atual após a jogada.
    test('should be able to make a play and alternate the current player', () => {
      theGame.play(0)
      expect(theGame.board[0]).toBe('X')
      expect(theGame.currentPlayer).toBe('O')

      theGame.play(1)
      expect(theGame.board[1]).toBe('O')
      expect(theGame.currentPlayer).toBe('X')
    })

    // Teste: o jogador não deve ser capaz de fazer uma jogada em uma posição ocupada.
    test('should not be able to make a play in an occupied position', () => {
      theGame.play(0)
      expect(theGame.board[0]).toBe('X')
      expect(theGame.currentPlayer).toBe('O')

      expect(() => theGame.play(0)).toThrow(
        'Jogada inválida. Por favor, escolha uma posição vazia no tabuleiro.'
      )
    })

    // Teste: o nome do jogador da vez deve ser mostrado na tela e alterado a medida que os turnos vão se alternando.
    test('should show the name of the current player', () => {
      expect(theGame.currentPlayerName()).toBe('Jogador 1')

      theGame.play(0)
      expect(theGame.currentPlayerName()).toBe('Jogador 2')

      theGame.play(1)
      expect(theGame.currentPlayerName()).toBe('Jogador 1')
    })
  })

  describe('Testing the game mechanics related to the outcomes of the matches.', () => {
    // Teste: o jogo deve ser capaz de identificar um empate.
    test('should be able to identify a draw', () => {
      theGame.play(0)
      theGame.play(1)
      theGame.play(2)
      theGame.play(4)
      theGame.play(3)
      theGame.play(5)
      theGame.play(6)
      theGame.play(8)
      theGame.play(7)

      expect(theGame.currentPlayer).toBe('O')
      expect(theGame.currentPlayerName()).toBe('Jogador 2')
      expect(theGame.isDraw()).toBeTruthy()
    })

    // Teste: o jogo deve ser capaz de identificar o vencedor.
    test('should be able to identify the winner', () => {
      theGame.play(0)
      theGame.play(3)
      theGame.play(1)
      theGame.play(4)
      theGame.play(2)

      expect(theGame.currentPlayer).toBe('O')
      expect(theGame.currentPlayerName()).toBe('Jogador 2')
      expect(theGame.isVictory()).toBeTruthy()
    })
  })

  describe('Tests on the game mechanics involved in match restarts.', () => {
    // Teste: deve ser possível reiniciar o jogo para jogar novamente.
    test('should be possible to restart the game to play again', () => {
      theGame.restart()

      expect(theGame.board).toHaveLength(9)
      expect(theGame.board.every((cell) => cell === null)).toBeTruthy()
      expect(theGame.playerX).toBe('Jogador 1')
      expect(theGame.playerO).toBe('Jogador 2')
      expect(theGame.currentPlayer).toBe('X')
    })
  })
})
