import Score from "./Score";
import {MatchDetails} from "./MatchDetails";
import GoalScorers from "./GoalScorers";

const ResultDetails = ({homeTeamDetails, awayTeamDetails}) => {
  const middleComponent = <Score homeGoals={homeTeamDetails.goals} awayGoals={awayTeamDetails.goals} isHighlight={false}/>

  return (
    <>
      <MatchDetails homeTeamDetails={homeTeamDetails} awayTeamDetails={awayTeamDetails} middleComponent={middleComponent}/>
      <div className="goal-scorers">
        <GoalScorers homeGoalScorers={homeTeamDetails.goalScorers} awayGoalScorers={awayTeamDetails.goalScorers} />
      </div>
    </>
  )
}

export default ResultDetails;