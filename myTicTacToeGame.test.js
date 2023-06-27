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

  // Teste: o jogo deve acabar se houver um vencedor ou se houver empate.
  test('should end if there is a winner or a tie', () => {
  // Realiza uma sequência de jogadas para resultar em uma vitória para o jogador 'X'.
    game.play(0) // X
    game.play(3) // O
    game.play(1) // X
    game.play(4) // O
    game.play(2) // X

    // Verifica se o jogador atual é igual a 'O'.
    expect(game.player).toEqual('O')
    // Verifica se o jogo acabou.
    expect(game.isOver()).toBeTruthy()
    // Verifica se o jogador 'X' é o vencedor.
    expect(game.getWinner()).toEqual('X')

    // Reinicia o jogo para um novo teste.
    game = new TicTacToe()

    // Realiza uma sequência de jogadas para resultar em uma vitória para o jogador 'O'.
    game.play(0) // X
    game.play(1) // O
    game.play(3) // X
    game.play(4) // O
    game.play(6) // X
    game.play(7) // O

    // Verifica se o jogador atual é igual a 'X'.
    expect(game.player).toEqual('X')
    // Verifica se o jogo acabou.
    expect(game.isOver()).toBeTruthy()
    // Verifica se o jogador 'O' é o vencedor.
    expect(game.getWinner()).toEqual('O')

    // Reinicia o jogo para um novo teste.
    game = new TicTacToe()

    // Realiza uma sequência de jogadas para resultar em um empate.
    game.play(0) // X
    game.play(1) // O
    game.play(2) // X
    game.play(3) // O
    game.play(4) // X
    game.play(7) // O
    game.play(6) // X
    game.play(5) // O
    game.play(8) // X

    // Verifica se o jogador atual é igual a 'X'.
    expect(game.player).toEqual('X')
    // Verifica se o jogo acabou.
    expect(game.isOver()).toBeTruthy()
    // Verifica se não há um vencedor.
    expect(game.getWinner()).toBeNull()
  })
})
