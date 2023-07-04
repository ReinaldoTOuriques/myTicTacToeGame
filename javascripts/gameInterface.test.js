const GameLogic = require('./gameLogic.js')
const GameInterface = require('./gameInterface.js')

// Suíte de testes.
describe('GameInterface', () => {
  let theGame = null
  let theInterface = null

  // Antes de cada teste, cria uma nova instância da classe GameLogic e atribui a variável theGame e uma nova instância da classe GameInterface e atribui a variável theInterface.
  beforeEach(() => {
    theGame = new GameLogic()
    theInterface = new GameInterface(theGame)
  })

  // Teste: no início de cada nova partida, por meio do método showBoard, o jogo deve exibir o tabuleiro vazio.
  it('should show an empty board at the beginning of each new game', () => {
    expect(theInterface.showBoard()).toEqual([
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ])
  })
})
