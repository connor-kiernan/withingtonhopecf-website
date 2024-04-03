import {Col, Row} from "react-bootstrap";
import PlayerCard from "./PlayerCard"

const PlayerGroup = ({group, players}) => {
  const playerCards = players.map(player => <Col key={player["firstName"]+player["lastName"]}><PlayerCard {...player} /></Col>);

  return (
      <section className="mb-4">
        <h2 className="text-capitalize">{group.toLowerCase() + ((group === "STAFF") ? "" : "s")}</h2>
        <Row xs={1} sm={2} lg={3} xl={4} className="gy-1 gy-sm-4 gx-sm-2">
          {playerCards}
        </Row>
      </section>
  )
};

export default PlayerGroup;