import styles from "../css/piece.module.css";

interface PieceProps {
    piece: string;
    color: string;
}

export const Piece = (props: PieceProps) => {
    if (!props.piece) return <></>;
    return (
        <i
            className={`${styles.piece} fas fa-chess-${props.piece} ${
                props.color === "white" ? styles.white : styles.black
            }`}
        ></i>
    );
};
