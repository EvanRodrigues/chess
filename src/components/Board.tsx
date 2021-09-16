import { useEffect, useState } from "react";
import { Square } from "./Square";
import styles from "../css/board.module.css";

interface SquareInterface {
    pieceColor: string;
    color: string;
    piece: string;
}

enum ChessPieces {
    PAWN = "pawn",
    ROOK = "rook",
    KNIGHT = "knight",
    BISHOP = "bishop",
    QUEEN = "queen",
    KING = "king",
}

enum PlayerColors {
    BLACK = "black",
    WHITE = "white",
}

const backRankPieceOrder = [
    ChessPieces.ROOK,
    ChessPieces.KNIGHT,
    ChessPieces.BISHOP,
    ChessPieces.QUEEN,
    ChessPieces.KING,
    ChessPieces.BISHOP,
    ChessPieces.KNIGHT,
    ChessPieces.ROOK,
];

const getPiece = (row: number, col: number) => {
    if (row === 0 || row === 7) return backRankPieceOrder[col];
    else if (row === 1 || row === 6) return ChessPieces.PAWN;
    return "";
};

const getPieceColor = (row: number) => {
    if (row < 2) return PlayerColors.BLACK;
    else if (row > 5) return PlayerColors.WHITE;
    return "";
};

const getSquareColor = (prevColor: string, col: number) => {
    if (prevColor === PlayerColors.WHITE && col === 0)
        return PlayerColors.WHITE;
    else if (prevColor === PlayerColors.BLACK && col === 0)
        return PlayerColors.BLACK;
    else if (prevColor === PlayerColors.BLACK) return PlayerColors.WHITE;
    else return PlayerColors.BLACK;
};

export const Board = () => {
    let [squares, setSquares] = useState<Array<Array<SquareInterface>>>();

    //Initial set up of a chess match. White on bottom, Black on top.
    useEffect(() => {
        const board = [];
        let prevColor = PlayerColors.WHITE;

        for (let i = 0; i < 8; i++) {
            const row = [];

            for (let j = 0; j < 8; j++) {
                const squareColor = getSquareColor(prevColor, j);

                let square: SquareInterface = {
                    pieceColor: getPieceColor(i),
                    color: squareColor,
                    piece: getPiece(i, j),
                };

                prevColor = squareColor;
                row.push(square);
            }

            board.push(row);
        }

        setSquares(board);
    }, []);

    if (!squares) return <></>;
    return (
        <div id={styles.board}>
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
};
