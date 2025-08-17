const GoalScorers = ({homeGoalScorers, awayGoalScorers}) => {
  return (
      <>
        {homeGoalScorers && <TeamGoalScorers goalScorers={homeGoalScorers} classPrefix="home" />}
        {awayGoalScorers && <TeamGoalScorers goalScorers={awayGoalScorers} classPrefix="away" />}
      </>
  )
}

const TeamGoalScorers = ({goalScorers, classPrefix}) => {
  const scorerClassName = `${classPrefix}-scorer-name`;
  const iconClassName = `${classPrefix}-scorer-icon`

  return Object.entries(goalScorers).map(([goalScorer, amount]) => (
      <>
        <div className={scorerClassName}>{goalScorer}</div>
        <div className={iconClassName}><i className="fa-regular fa-futbol"></i>{amount > 1 && " x" + amount}</div>
      </>
  ));
}

export default GoalScorers;