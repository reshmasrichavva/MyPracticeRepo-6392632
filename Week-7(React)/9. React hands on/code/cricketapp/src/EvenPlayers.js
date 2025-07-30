export function EvenPlayers({ players }) {
  return (
    <ul className="player-list">
      <li>Second : {players[1]}</li>
      <li>Fourth : {players[3]}</li>
      <li>Sixth : {players[5]}</li>
    </ul>
  );
}


