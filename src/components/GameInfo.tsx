import { useState } from "react";
import { MovesInput } from "./MovesInput";
import styles from "../css/game.module.css";

interface Move {
    number: string;
    white: string;
    black: string;
}

interface Game {
    moves: Move[];
    outcome: string;
}

export const GameInfo = () => {
    const [game, setGame] = useState({} as Game);

    if (!Object.keys(game).length)
        return <MovesInput game={game} setGame={setGame} />;
    return (
        <div className={styles.movesContainer}>
            {game.moves.map((move: Move, i) => {
                return (
                    <div className={styles.moveContainer} key={i}>
                        <span key={`number${i}`}>{move.number}</span>
                        <button className={styles.move} key={`white${i}`}>
                            {move.white}
                        </button>
                        <button className={styles.move} key={`black${i}`}>
                            {move.black}
                        </button>
                    </div>
                );
            })}
            <span className={styles.outcome}>{game.outcome}</span>
        </div>
    );
};
