function Player(name, type) {
  this.name = name;
  this.type = type;
}

function Space(x, y) {
  this.x = x;
  this.y = y;
  this.markedX = false;
  this.markedO = false;
}

function Board() {
  this.spaces = {};
}

Player.prototype.mark = function (space) {
  if (game.board.spaces[space].markedX === true || game.board.spaces[space].markedO === true) {
    return false
  } else if (game.turn === "X") {
    game.board.spaces[space].markedX = true;
    game.turn = "O";
    return true
  } else {
    game.board.spaces[space].markedO = true;
    game.turn = "X";
    return true
  }
}

Board.prototype.win = function () {
  if (board.spaces[0].markedX === true && board.spaces[1].markedX === true && board.spaces[2].markedX === true || board.spaces[3].markedX === true && board.spaces[4].markedX === true && board.spaces[5].markedX === true || board.spaces[6].markedX === true && board.spaces[7].markedX === true && board.spaces[8].markedX === true || board.spaces[0].markedX === true && board.spaces[4].markedX === true && board.spaces[8].markedX === true || board.spaces[2].markedX === true && board.spaces[4].markedX === true && board.spaces[6].markedX === true) {
    game.win = "X";
  } else if (board.spaces[0].markedO === true && board.spaces[1].markedO === true && board.spaces[2].markedO === true || board.spaces[3].markedO === true && board.spaces[4].markedO === true && board.spaces[5].markedO === true || board.spaces[6].markedO === true && board.spaces[7].markedO === true && board.spaces[8].markedO === true || board.spaces[0].markedO === true && board.spaces[4].markedO === true && board.spaces[8].markedO === true || board.spaces[2].markedO === true && board.spaces[4].markedO === true && board.spaces[6].markedO === true) {
    game.win = "O";
  }
}

let space1 = new Space(1, 1);
let space2 = new Space(1, 2);
let space3 = new Space(1, 3);
let space4 = new Space(2, 1);
let space5 = new Space(2, 2);
let space6 = new Space(2, 3);
let space7 = new Space(3, 1);
let space8 = new Space(3, 2);
let space9 = new Space(3, 3);
let playerX = new Player("", "X");
let playerO = new Player("", "O");

let board = new Board()
board.spaces = [space1, space2, space3, space4, space5, space6, space7, space8, space9]

let game = {
  board,
  players: { playerX, playerO },
  turn: "X",
  win: "none"
}