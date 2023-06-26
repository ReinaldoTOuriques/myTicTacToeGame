// Importando a classe MyTicTacToeGame do arquivo myTicTacToeGame.js.
import MyTicTacToeGame from './myTicTacToeGame';

// Iniciando a suíte de testes para a classe MyTicTacToeGame.
describe('MyTicTacToeGame', () => {
  let game;

  // Antes de cada teste, cria uma nova instância do jogo.
  beforeEach(() => { 
    game = new MyTicTacToeGame();
  });

  // Teste: verifica se o jogo foi iniciado corretamente.
  it('should initialize the game with an empty board', () => {
    expect(game.board).toEqual([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    expect(game.currentPlayer).toBe('X');
    expect(game.winner).toBe(null);
  });

  // Teste: verifica se o jogador atual é alternado corretamente.
  it('should alternate the current player', () => {
    expect(game.currentPlayer).toBe('X');
    game.play(0, 0);
    expect(game.currentPlayer).toBe('O');
    game.play(0, 1);
    expect(game.currentPlayer).toBe('X');
  });

  // Teste: verifica se o jogo é finalizado corretamente quando há um vencedor.
  it('should end the game when there is a winner', () => {
    game.play(0, 0);
    game.play(1, 0);
    game.play(0, 1);
    game.play(1, 1);
    game.play(0, 2);
    expect(game.winner).toBe('X');
  });

  // Teste: verifica se o jogo é finalizado corretamente quando há um empate.
  it('should end the game when there is a draw', () => {
    game.play(0, 0);
    game.play(1, 0);
    game.play(2, 0);
    game.play(1, 1);
    game.play(0, 1);
    game.play(0, 2);
    game.play(1, 2);
    game.play(2, 1);
    game.play(2, 2);
    expect(game.winner).toBe(null);
  });

  // Teste: verifica se o jogo é finalizado corretamente.
  it('should not allow a play on an occupied position', () => {
    game.play(0, 0);
    expect(() => game.play(0, 0)).toThrow();
  });

  // Teste: verifica se o jogo é finalizado corretamente.
  it('should not allow plays after the game is over', () => {
    game.play(0, 0);
    game.play(1, 0);
    game.play(0, 1);
    game.play(1, 1);
    game.play(0, 2);
    expect(() => game.play(1, 2)).toThrow();
  });

  // Teste: verifica se o jogo é finalizado corretamente.
  it('should not allow plays on positions outside the board', () => {
    expect(() => game.play(0, 3)).toThrow();
    expect(() => game.play(3, 0)).toThrow();
    expect(() => game.play(3, 3)).toThrow();
  });

  // Teste: verifica se o jogo é finalizado corretamente.
  it('should not allow plays on positions with invalid coordinates', () => {
    expect(() => game.play(0.5, 0)).toThrow();
    expect(() => game.play(0, 0.5)).toThrow();
    expect(() => game.play(0.5, 0.5)).toThrow();
  });

  // Teste: verifica se o jogo é finalizado corretamente.
  it('should not allow plays on positions with negative coordinates', () => {
    expect(() => game.play(-1, 0)).toThrow();
    expect(() => game.play(0, -1)).toThrow();
    expect(() => game.play(-1, -1)).toThrow();
  });

  // Teste: verifica se o jogo é finalizado corretamente.
  it('should not allow plays on positions with non-integer coordinates', () => {
    expect(() => game.play(1.5, 0)).toThrow();
    expect(() => game.play(0, 1.5)).toThrow();
    expect(() => game.play(1.5, 1.5)).toThrow();
  });
});