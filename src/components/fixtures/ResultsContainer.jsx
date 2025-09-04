import HighlightMatch from "./HighlightMatch";
import {useSelector} from "react-redux";
import {selectLastResult, selectResultsGroupedByMonth} from "../../features/matches/matchSlice";
import MatchGroup from "./MatchGroup";
import {useOutletContext} from "react-router-dom";

const ResultsContainer = () => {
  const {selectedSeason, isCurrentSeason} = useOutletContext();
  const lastResult = useSelector(selectLastResult(selectedSeason));
  const resultsGroupedByMonth = useSelector(selectResultsGroupedByMonth(selectedSeason));

  if (!lastResult) {
    return <><p>Sorry, there are no results to display</p><p>Check back soon!</p></>
  }

  return (
      <>
        {isCurrentSeason && <HighlightMatch  {...lastResult}/>}
        {Object.entries(resultsGroupedByMonth).map(([month, fixtures]) =>
            (<MatchGroup key={month} group={month} fixtures={fixtures.slice().reverse()}/>)
        ).slice().reverse()}
      </>
  );
}

export default ResultsContainer;