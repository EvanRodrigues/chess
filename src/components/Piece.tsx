import "../css/piece.css";

interface PieceProps {
    piece: string;
    color: string;
}

export function Piece(props: PieceProps) {

    if(!props.piece) return <></>
    return (
        <i className={`piece fas fa-chess-${props.piece} ${props.color}`}></i>
    );
}
