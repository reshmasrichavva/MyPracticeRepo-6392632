import '../Stylesheets/mystyle.css';

const percentOfGoal = (goalObj) => {
  return (goalObj.total / goalObj.goal) * 100;
};

const CalculateScore = ({ Name, School, total, goal }) => {
  const score = percentOfGoal({ total, goal });

  return (
    <div className="formatStyle">
      <div>
        <span className="label Name">Name: </span>
        <span className="value NameVal">{Name}</span>
      </div>
      <div>
        <span className="label School">School: </span>
        <span className="value SchoolVal">{School}</span>
      </div>
      <div>
        <span className="label Total">Total: </span>
        <span className="value TotalVal">{total}Marks</span>
      </div>
      <div>
        <span className="label Score">Score: </span>
        <span className="value ScoreVal">{score.toFixed(2)}%</span>
      </div>
    </div>
  );
};

export default CalculateScore;


