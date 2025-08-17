const CRESTS = {
  "Withington Hope": "/images/logo.png",
};

const BLANK_CREST = "/images/blankCrest.png";

const getCrestUri = (teamName) => {
  return CRESTS[teamName] || BLANK_CREST;
};

export function MatchDetails({homeTeamDetails: {name: homeTeamName}, awayTeamDetails: {name: awayTeamName}, middleComponent}) {
  const [homeCrestUri, awayCrestUri] = [getCrestUri(homeTeamName), getCrestUri(awayTeamName)]
  return <>
    <img className="crest home-team-crest" src={homeCrestUri} alt={`${homeTeamName} Crest`}/>
    <div className="name home-team-name">{homeTeamName}</div>

    <div className="middle-component mx-4">{middleComponent}</div>

    <img className="crest away-team-crest" src={awayCrestUri} alt={`${awayTeamName} Crest`}/>
    <div className="name away-team-name">{awayTeamName}</div>
  </>;
}