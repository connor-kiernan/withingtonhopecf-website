const GoalScorers = ({goalScorers, type}) => {
  return (
      <div className={`${type}-scorers scorers`}>
        {goalScorers && <TeamGoalScorers goalScorers={goalScorers} classPrefix={type} />}
      </div>
  )
}

const TeamGoalScorers = ({goalScorers, classPrefix}) => {
  const scorerClassName = `${classPrefix}-scorer-name`;
  const iconClassName = `${classPrefix}-scorer-icon`

  return Object.entries(goalScorers).map(([goalScorer, amount]) => (
      <>
        <div className={scorerClassName}>{goalScorer}</div>
        <div className={iconClassName}><i className="fa-regular fa-futbol"></i>{amount > 1 && "\u00A0x" + amount}</div>
      </>
  ));
}

export default GoalScorers;