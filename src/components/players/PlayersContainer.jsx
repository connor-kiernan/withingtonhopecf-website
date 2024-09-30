import {useSelector} from "react-redux";
import {selectGroupedPlayers, useGetPlayersQuery} from "../../features/players/playerSlice";
import PlayerGroup from "./PlayerGroup";
import {Spinner} from "react-bootstrap";

const PlayersContainer = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPlayersQuery();

  const groupedPlayers = useSelector(selectGroupedPlayers);

  let renderedContainer;
  if (isLoading) {
    renderedContainer =
        <Spinner animation="border" role="status" variant="secondary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>;
  } else if (isSuccess) {
    const playerGroups = []
    groupedPlayers.forEach(
        ([key, value]) => {
          playerGroups.push(<PlayerGroup key={key} group={key} players={value}/>);
        });

    renderedContainer = playerGroups;
  } else if (isError) {
    renderedContainer = <p>Unknown error when fetching players: {error}</p>;
  }

  return (renderedContainer);
};

export default PlayersContainer;