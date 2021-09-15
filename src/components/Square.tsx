import { Piece } from "./Piece";
import "../css/square.css";

interface SquareProps {
    color: string,
    pieceColor: string,
    piece: string
}

export function Square(props: SquareProps) {
    return (
        <div className={`square ${props.color}`}>
            <Piece color={props.pieceColor} piece={props.piece} />
        </div>
    );
}
