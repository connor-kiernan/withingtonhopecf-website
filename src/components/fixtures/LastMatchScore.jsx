import {Col, Row, Stack} from "react-bootstrap";
import TeamLabel from "./TeamLabel";
import Score from "./Score";

const LastMatchScore = ({homeTeam, awayTeam, homeGoals, awayGoals, isHomeGame, withyGoalScorers}) => {
  const flexDirection = isHomeGame ? "flex-row" : "flex-row-reverse";

  return (<>
        <Row className="highlight text-uppercase justify-content-between align-items-center">
          <Col><TeamLabel team={homeTeam} /></Col>
          <Col xs="auto"><Score homeGoals={homeGoals} awayGoals={awayGoals} isHighlight={true}></Score></Col>
          <Col><TeamLabel team={awayTeam} isAway={true} /></Col>
        </Row>
        {withyGoalScorers &&
            <Row className={`mt-2 ${flexDirection}`}>
              <Col xs={6} className="px-0">
                {Object.entries(withyGoalScorers)
                .map(([player, count]) => (
                    <Stack key={player + count} direction="horizontal" gap={3} className={`scorers justify-content-end fs-4 ${flexDirection}`}>
                      <div>{player}</div>
                      <div><i className="fa-regular fa-futbol"></i>{count > 1 && " x" + count}</div>
                      <div className={`vr ${isHomeGame ? "ms" : "me"}-4`}></div>
                    </Stack>
                ))}
              </Col>
            </Row>
        }</>
  );
};

export default LastMatchScore;