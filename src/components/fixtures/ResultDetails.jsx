import Score from "./Score";
import {MatchDetails} from "./MatchDetails";
import GoalScorers from "./GoalScorers";

const ResultDetails = ({homeTeamDetails, awayTeamDetails, isHighlight}) => {
  const middleComponent = <Score homeGoals={homeTeamDetails.goals} awayGoals={awayTeamDetails.goals} isHighlight={isHighlight}/>

  return (
    <>
      <MatchDetails homeTeamDetails={homeTeamDetails} awayTeamDetails={awayTeamDetails} middleComponent={middleComponent}/>
      {isHighlight &&
          <>
            <GoalScorers type="home" goalScorers={homeTeamDetails.goalScorers} />
            <GoalScorers type="away" goalScorers={awayTeamDetails.goalScorers} />
          </>
      }
    </>
  )
}

export default ResultDetails;