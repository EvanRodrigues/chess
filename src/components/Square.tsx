import { Piece } from "./Piece";
import styles from "../css/square.module.css";
const classNames = require("classnames/bind");

interface SquareProps {
    color: string;
    pieceColor: string;
    piece: string;
}

let cx = classNames.bind(styles);

export const Square = (props: SquareProps) => {
    return (
        <div
            className={cx("square", {
                black: props.color === "black",
                white: props.color === "white",
            })}
        >
            <Piece color={props.pieceColor} piece={props.piece} />
        </div>
    );
};
