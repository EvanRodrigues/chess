import styles from "../css/piece.module.css";
const classNames = require("classnames/bind");

interface PieceProps {
    piece: string;
    color: string;
}

let cx = classNames.bind(styles);

export const Piece = (props: PieceProps) => {
    if (!props.piece) return null;

    return (
        <i
            className={cx({
                piece: true,
                fas: true,
                [`fa-chess-${props.piece}`]: true,
                white: props.color === "white",
                black: props.color === "black",
            })}
        ></i>
    );
};
