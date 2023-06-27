// Importando a classe TicTacToe do arquivo myTicTacToeGame.js.
const TicTacToe = require('./myTicTacToeGame.js')

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
    expect(game.player).toEqual('X')
  })

  // Teste: o jogador deve ser capaz de fazer uma jogada e alternar o jogador atual após a jogada.
  test('should be able to make a play and alternate the current player', () => {
    // Faz uma jogada na posição 0.
    game.play(0)
    // Verifica se a posição 0 do tabuleiro é igual a 'X'.
    expect(game.board[0]).toEqual('X')
    // Verifica se o jogador atual é igual a 'O'.
    expect(game.player).toEqual('O')

    // Faz uma jogada na posição 1.
    game.play(1)
    // Verifica se a posição 1 do tabuleiro é igual a 'O'.
    expect(game.board[1]).toEqual('O')
    // Verifica se o jogador atual é igual a 'X'.
    expect(game.player).toEqual('X')
  })
})
