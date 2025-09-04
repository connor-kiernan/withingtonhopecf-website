import {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectSeasons} from "../../features/matches/matchSlice";
import {Col, Form, InputGroup, Row} from "react-bootstrap";
import {NavLink, Outlet, useLocation, useNavigate, useSearchParams} from "react-router-dom";

const MatchesNavContainer = () => {
  const seasons = useSelector(selectSeasons);
  const currentSeason = seasons[0];

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const location = useLocation();

  const selectedSeason = searchParams.get("season") ?? currentSeason;
  const isCurrentSeason = selectedSeason === currentSeason;

  const onSeasonChange = ({currentTarget: {value}}) => {
    if (value === currentSeason) {
      setSearchParams({});
    } else {
      setSearchParams({ season: value });
    }
  };

  useEffect(() => {
    if (!isCurrentSeason && location.pathname.endsWith("/fixtures")) {
      navigate("results?" + searchParams.toString(), { replace: true });
    }
  }, [isCurrentSeason, location.pathname, searchParams, navigate]);

  return (<>
        <Row className="mb-4 position-sm-absolute">
          <Col xs="auto">
            <InputGroup>
              <InputGroup.Text id="seasonLabel">Season</InputGroup.Text>
              <Form.Select value={selectedSeason} onChange={onSeasonChange}>
                {seasons.map(season => <option key={season} value={season}>{season}</option>)}
              </Form.Select>
            </InputGroup>
          </Col>
        </Row>
        <ul className="nav nav-pills mb-3 mb-sm-5 justify-content-center" role="tablist">
          {isCurrentSeason && <li className="nav-item">
            <NavLink to="fixtures" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              <h2 className="mb-0">Fixtures</h2>
            </NavLink>
          </li>
          }
          <li>
            <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="results">
              <h2 className="mb-0">Results</h2>
            </NavLink>
          </li>
        </ul>

        <Outlet context={{ selectedSeason, isCurrentSeason }} />
      </>
  );
};
export default MatchesNavContainer;