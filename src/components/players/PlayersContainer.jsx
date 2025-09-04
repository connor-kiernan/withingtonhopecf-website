import {useSelector} from "react-redux";
import {selectGroupedPlayers} from "../../features/players/playerSlice";
import PlayerGroup from "./PlayerGroup";

const PlayersContainer = () => {
  const groupedPlayers = useSelector(selectGroupedPlayers);

  return groupedPlayers.map(([key, value]) => <PlayerGroup key={key} group={key} players={value}/>);
};

export default PlayersContainer;