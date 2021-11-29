function load() {
    //reseting the colour of the buttons
    document.getElementById("00").style.background = "white";
    document.getElementById("01").style.background = "white";
    document.getElementById("02").style.background = "white";
    document.getElementById("10").style.background = "white";
    document.getElementById("11").style.background = "white";
    document.getElementById("12").style.background = "white";
    document.getElementById("20").style.background = "white";
    document.getElementById("21").style.background = "white";
    document.getElementById("22").style.background = "white";
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    row = 0;
    column = 0;
    draw = 0;
    boardx = 0;
    boardy = 0;
    turn = 2;
    depth = 0;
}

function press(btn, row, column) {
    btn.style.background = "blue";
    board[row][column] = 1;
    winner = checkWin(board)
    if (winner != 0) {
        bestMove = -Infinity;
        moves = [];
        //check every possible move
        for (v = 0; v < 3; v++) {
            for (w = 0; w < 3; w++) {
                if (board[v][w] == 0) {
                    board[v][w] = 2;
                    let currentMove = minimax(board, 0, false);
                    board[v][w] = 0;
                    moves.push([currentMove, v, w]);
                }
            }
        }
        moves.sort();
        moves.reverse();
        board[moves[0][1]][moves[0][2]] = 2;
        for (x = 0; x < 3; x++) {
            for (y = 0; y < 3; y++) {
                if (board[x][y] == 2) {
                    document.getElementById(String(x) + String(y)).style.backgroundColor = "red"
                }
            }
        }
    }
    winner = checkWin(board)
    console.log(winner)
    if (winner == 10) {
        alert("AI wins")
    } else if (winner == -10) {
        alert("Player wins")
    } else if (winner == 0) {
        alert("draw")
    }
}


function minimax(board, depth, isMaximising) {
    score = checkWin(board);
    if (score == 10) {
        score -= depth;
        return score
    } else if (score == -10) {
        score += depth
        return score
    } else if (score == 0) {
        return score
    } else {
        if (isMaximising) {
            let bestValue = -Infinity;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[i][j] == 0) {
                        board[i][j] = 2;
                        let score = minimax(board, depth + 1, false)
                        board[i][j] = 0;
                        bestValue = Math.max(bestValue, score)
                    }
                }
            }
            return bestValue;
        } else {
            let bestValue = Infinity;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[i][j] == 0) {
                        board[i][j] = 1;
                        let score = minimax(board, depth + 1, true)
                        board[i][j] = 0;
                        bestValue = Math.min(bestValue, score)
                    }
                }
            }
            return bestValue;
        }
    }
}


function checkWin(board) {
    for (x = 0; x < 3; x++) {
        if (board[x][0] == board[x][1] && board[x][1] == board[x][2] && board[x][1] != 0) {
            if (board[x][0] == 2) {
                return 10;
            } else if (board[x][0] == 1) {
                return -10;
            }
        }
    }
    for (x = 0; x < 3; x++) {
        if (board[0][x] == board[1][x] && board[1][x] == board[2][x] && board[1][x] != 0) {
            if (board[0][x] == 2) {
                return 10;
            } else if (board[0][x] == 1) {
                return -10;
            }
        }
    }
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[1][1] != 0) {
        if (board[0][0] == 2) {
            return 10;
        } else if (board[0][0] == 1) {
            return -10;
        }
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[1][1] != 0) {
        if (board[0][2] == 2) {
            return 10;
        } else if (board[0][2] == 1) {
            return -10;
        }
    }
    draw = 0;
    for (let y = 0; y < 3; y++) {
        for (let z = 0; z < 3; z++) {
            if (board[y][z] != 0) {
                draw++;
            }
        }
    }
    if (draw == 9) {
        return 0;
    }
    return null

}
