function ListofIndianPlayers({ IndianPlayers }) {
  return (
    <ul className="player-list">
      {IndianPlayers.map((player, index) => (
        <li key={index}>Mr. {player}</li>
      ))}
    </ul>
  );
}

export default ListofIndianPlayers;



