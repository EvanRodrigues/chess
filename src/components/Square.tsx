import { Piece } from "./Piece";
import styles from "../css/square.module.css";

interface SquareProps {
    color: string;
    pieceColor: string;
    piece: string;
}

export const Square = (props: SquareProps) => {
    return (
        <div
            className={`${styles.square} ${
                props.color === "black" ? styles.black : styles.white
            }`}
        >
            <Piece color={props.pieceColor} piece={props.piece} />
        </div>
    );
};
