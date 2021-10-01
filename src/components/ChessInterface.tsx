import { Board } from "./Board";
import { GameInfo } from "./GameInfo";
import styles from "../css/chessInterface.module.css";

export const ChessInterface = () => {
    return (
        <div className={styles.chessInterface}>
            <Board />
            <GameInfo />
        </div>
    );
};
