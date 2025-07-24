import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div>
      <h2 style={{ textAlign: 'center', color: 'brown' }}>Student Details:</h2>
      <CalculateScore
        Name="Steeve"
        School="DNV Public School"
        total={284}
        goal={300}
      />
    </div>
  );
}

export default App;
