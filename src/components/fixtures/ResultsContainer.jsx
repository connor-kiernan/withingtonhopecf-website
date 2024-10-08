import HighlightMatch from "./HighlightMatch";
import {useSelector} from "react-redux";
import {selectLastResult, selectResultsGroupedByMonth} from "../../features/matches/matchSlice";
import MatchGroup from "./MatchGroup";

const ResultsContainer = () => {
  const lastResult = useSelector(selectLastResult);
  const resultsGroupedByMonth = useSelector(selectResultsGroupedByMonth);

  if (!lastResult) {
    return <><p>Sorry, there are no results to display</p><p>Check back soon!</p></>
  }

  return (
      <>
        <HighlightMatch  {...lastResult}/>
        {Object.entries(resultsGroupedByMonth).map(([month, fixtures]) =>
            (<MatchGroup key={month} group={month} fixtures={fixtures.slice().reverse()}/>)
        ).slice().reverse()}
      </>
  );
}

export default ResultsContainer;