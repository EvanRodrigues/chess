import { useEffect, useState, useCallback } from "react";
import { Square } from "./Square";
import "../css/board.css";

interface SquareInterface {
    pieceColor: string,
    color: string,
    piece: string
}

export function Board() {
    let [squares, setSquares] = useState<Array<Array<SquareInterface>>>();
    let [firstRowOrder] = useState([
        "rook",
        "knight",
        "bishop",
        "queen",
        "king",
        "bishop",
        "knight",
        "rook",
    ]);

    const getPieceColor = (row: number) => {
        if (row < 2)  return "black";
        else if (row > 5) return "white";

        return "";
    };

    const getPiece = useCallback((row, col) => {
            if (row === 0 || row === 7) return firstRowOrder[col];
            else if (row === 1 || row === 6) return "pawn";
            return "";
        },
        [firstRowOrder]
    );

    const getSquareColor = (prevColor: string, col: number) => {
        if (prevColor === "white" && col === 0) return "white"
        else if (prevColor === "black" && col === 0) return "black"
        else if (prevColor === "black") return "white"
        else return "black"
    };

    //Initial set up of a chess match. White on bottom, Black on top.
    useEffect(() => {
        const board = [];
        let prevColor = "white";

        for (let i = 0; i < 8; i++) {
            const row = [];

            for (let j = 0; j < 8; j++) {
                const squareColor = getSquareColor(prevColor, j);

                let square: SquareInterface = {
                    pieceColor: getPieceColor(i),
                    color: squareColor,
                    piece: getPiece(i, j)
                };

                prevColor = squareColor;
                row.push(square);
            }

            board.push(row);
        }

        setSquares(board);
    }, [getPiece]);

    if (!squares) return <></>;
    return (
        <div id="board">
            {squares.map((boardRow: Array<SquareInterface>, row: number) => {
                return boardRow.map((square: SquareInterface, col: number) => {
                    return (
                        <Square
                            key={`${row}${col}`}
                            pieceColor={square.pieceColor}
                            piece={square.piece}
                            color={square.color}
                        />
                    );
                });
            })}
        </div>
    );
}
