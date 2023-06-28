// Importando a classe TicTacToe do arquivo myTicTacToeGame.js.
const TicTacToe = require('./javascripts/myTicTacToeGame.js')

// Iniciando a suíte de testes.
describe('TicTacToe', () => {
  let game

  // Antes de cada teste, cria uma nova instância da classe TicTacToe e atribui a variável game.
  beforeEach(() => {
    game = new TicTacToe()
  })

  // Teste: o jogo deve ser inicializado com um tabuleiro vazio.
  test('should initialize with an empty board', () => {
    // Verifica se o tabuleiro do jogo é igual a um array com nove elementos nulos.
    expect(game.board).toEqual([null, null, null, null, null, null, null, null, null])
  })

  // Teste: o jogo deve ser inicializado com o jogador X.
  test('should initialize with player X', () => {
    // Verifica se o jogador do jogo é igual a 'X'.
    expect(game.currentPlayer).toEqual('X')
  })

  // Teste: Deve ser possível incluir os nomes dos dois jogadores;
  test('should be possible to include the names of the two players', () => {
    // Verifica se o nome do jogador X é igual a 'Jogador 1'.
    expect(game.playerX).toEqual('Jogador 1')
    // Verifica se o nome do jogador O é igual a 'Jogador 2'.
    expect(game.playerO).toEqual('Jogador 2')
  })

  // Teste: o jogador deve ser capaz de fazer uma jogada e alternar o jogador atual após a jogada.
  test('should be able to make a play and alternate the current player', () => {
    // Faz uma jogada na posição 0.
    game.play(0)
    // Verifica se a posição 0 do tabuleiro é igual a 'X'.
    expect(game.board[0]).toEqual('X')
    // Verifica se o jogador atual é igual a 'O'.
    expect(game.currentPlayer).toEqual('O')

    // Faz uma jogada na posição 1.
    game.play(1)
    // Verifica se a posição 1 do tabuleiro é igual a 'O'.
    expect(game.board[1]).toEqual('O')
    // Verifica se o jogador atual é igual a 'X'.
    expect(game.currentPlayer).toEqual('X')
  })

  // Teste: o jogador não deve ser capaz de fazer uma jogada em uma posição ocupada.
  test('should not be able to make a play in an occupied position', () => {
    // Faz uma jogada na posição 0.
    game.play(0)
    // Verifica se a posição 0 do tabuleiro é igual a 'X'.
    expect(game.board[0]).toEqual('X')
    // Verifica se o jogador atual é igual a 'O'.
    expect(game.currentPlayer).toEqual('O')

    // Tenta fazer uma jogada na posição 0 novamente.
    expect(() => game.play(0)).toThrow(
      'Jogada inválida. Por favor, escolha uma posição vazia no tabuleiro.'
    )
  })

  // Teste: 
})
