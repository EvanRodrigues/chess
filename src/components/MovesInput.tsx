import { useState, ChangeEvent, FormEvent } from "react";
import styles from "../css/movesInput.module.css";

interface MovesInputProps {
    game: Game;
    setGame: Function;
}

interface Game {
    moves: Move[];
    outcome: string;
}

interface Move {
    number: string;
    white: string;
    black: string;
}

export const MovesInput = (props: MovesInputProps) => {
    const [movesInput, setMovesInput] = useState("");

    const updateGame = (moves: Game) => {
        props.setGame(moves);
    };

    const updateInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMovesInput(e.currentTarget.value);
    };

    const getOutcome = (movesInput: string) => {
        const start = movesInput.indexOf("{");
        return movesInput.substring(start + 1, movesInput.length - 1).trim();
    };

    const removeOutcome = (movesInput: string) => {
        const start = movesInput.indexOf("{");
        return movesInput.substring(0, start);
    };

    const separateMoves = (movesInput: string) => {
        const outcome = getOutcome(movesInput);
        const moveTokens: string[] = removeOutcome(movesInput).split(" ");

        return {
            moves: moveTokens
                .map((move, i, array) => {
                    return {
                        number: move,
                        white: array[i + 1],
                        black: array[i + 2],
                    } as Move;
                })
                .filter((move, i) => i % 3 === 0),
            outcome: outcome,
        } as Game;
    };

    const submitMoves = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const separatedMoves: Game = separateMoves(movesInput);
        updateGame(separatedMoves);
    };

    return (
        <form onSubmit={submitMoves}>
            <textarea className={styles.movesInput} onChange={updateInput} />
            <input type="submit" />
        </form>
    );
};
