export function OddPlayers({ players }) {
  return (
    <ul className="player-list">
      <li>First : {players[0]}</li>
      <li>Third : {players[2]}</li>
      <li>Fifth : {players[4]}</li>
    </ul>
  );
}

