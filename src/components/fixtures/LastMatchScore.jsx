import {Col, Row} from "react-bootstrap";
import ResultTeamScore from "./ResultTeamScore";

const LastMatchScore = ({homeTeam, awayTeam, homeGoals, awayGoals, isHomeGame, withyGoalScorers}) => {
  const [homeComponent, awayComponent] = isHomeGame ?
      [<ResultTeamScore team={homeTeam} goals={homeGoals} goalScorers={withyGoalScorers} />, <ResultTeamScore team={awayTeam} goals={awayGoals} isAway={true} />] :
      [<ResultTeamScore team={homeTeam} goals={homeGoals} />, <ResultTeamScore team={awayTeam} goals={awayGoals} goalScorers={withyGoalScorers} isAway={true}/>]

  return (
      <Row className="display-5 gx-4 justify-content-center">
        <Col lg>{homeComponent}</Col>
        <Col lg>{awayComponent}</Col>
      </Row>
  );
};

export default LastMatchScore;