import {Col, Row} from "react-bootstrap";
import PlayerCard from "./PlayerCard"

const PlayerGroup = ({group, players}) => {
  const playerCards = players.map(player => <Col key={player["firstName"]+player["lastName"]}><PlayerCard {...player} /></Col>);

  return (
      <section className="mb-4">
        <h1 className="text-capitalize">{group === "STAFF" ? "Manager" : group.toLowerCase() + "s"}</h1>
        <Row xs={2} sm={3} md={4} xl={5} xxl={5} className="gy-4 gx-3">
          {playerCards}
        </Row>
      </section>
  )
};

export default PlayerGroup;