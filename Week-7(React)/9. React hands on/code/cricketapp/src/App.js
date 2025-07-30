import './App.css';
import { OddPlayers } from './OddPlayers';
import { EvenPlayers } from './EvenPlayers';
import ListofIndianPlayers from './ListofIndianPlayers';

function App() {
  const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6'];
  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  const flag = false;

  return (
    <div className="App" style={{ padding: '20px', textAlign: 'left' }}>
      {!flag && (
        <>
          <h2>Odd Players</h2>
          <OddPlayers players={IndianTeam} />
          <hr />
          <h2>Even Players</h2>
          <EvenPlayers players={IndianTeam} />
          <hr />
          <h2>List of Indian Players Merged:</h2>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </>
      )}
    </div>
  );
}

export default App;




