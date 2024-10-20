import {useState} from "react";
import {useSelector} from "react-redux";
import {selectSeasons} from "../../features/matches/matchSlice";
import {Col, Form, InputGroup, Row} from "react-bootstrap";
import FixtureContainer from "./FixtureContainer";
import ResultsContainer from "./ResultsContainer";

const MatchesNavContainer = () => {
  const seasons = useSelector(selectSeasons);
  const currentSeason = seasons[0];
  const [selectedSeason, setSeason] = useState(currentSeason);

  const isCurrentSeason = selectedSeason === currentSeason;

  const [activeTab, setActiveTab] = useState("Fixtures");

  const tabs = ["Fixtures", "Results"];

  const linkClass = "nav-link";
  const activeLinkClass = "nav-link active"

  const onSeasonChange = ({currentTarget: {value}}) => {
    setSeason(value)
    setActiveTab(value !== currentSeason ? "Results" : "Fixtures")
  };

  return (
      <>
        <Row className="mb-4">
          <Col xs="auto">
            <InputGroup>
              <InputGroup.Text id="seasonLabel">Season</InputGroup.Text>
              <Form.Select value={selectedSeason} onChange={onSeasonChange}>
                {seasons.map(season => <option key={season} value={season}>{season}</option>)}
              </Form.Select>
            </InputGroup>
          </Col>
        </Row>
        <ul className="nav nav-pills mb-5 justify-content-center" role="tablist">
          {tabs.filter(tab => isCurrentSeason || tab !== "Fixtures").map(tab => (
              <li className="nav-item" role="presentation">
                <button className={tab === activeTab ? activeLinkClass : linkClass} id={tab + "-tab"} type="button"
                        aria-controls={tab} onClick={({currentTarget: {id}}) => setActiveTab(id.split("-")[0])}>
                  <h2 className="mb-0">{tab}</h2>
                </button>
              </li>
          ))}
        </ul>
        {activeTab === "Fixtures" ?
            <FixtureContainer season={selectedSeason}/> :
            <ResultsContainer season={selectedSeason} isCurrentSeason={isCurrentSeason}/>
        }
      </>
  );
};

export default MatchesNavContainer;