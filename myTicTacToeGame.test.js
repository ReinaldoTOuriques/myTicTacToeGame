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
})
