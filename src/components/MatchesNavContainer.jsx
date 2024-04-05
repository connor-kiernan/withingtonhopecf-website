const MatchesNavContainer = ({fixturesContainer, resultsContainer}) => (
  <>
    <ul className="nav nav-pills mb-5" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link active" id="fixtures-tab" data-bs-toggle="tab" data-bs-target="#fixtures"
                type="button" aria-controls="fixtures"><h2 className="mb-0">Fixtures</h2>
        </button>
      </li>
      <li>
        <button className="nav-link" id="results-tab" data-bs-toggle="tab" data-bs-target="#results"
                type="button" aria-controls="fixtures"><h2 className="mb-0">Results</h2>
        </button>
      </li>
    </ul>
    <div className="tab-content">
      <div className="tab-pane active" id="fixtures" role="tabpanel" aria-labelledby="fixtures-tab" tabIndex="0">
        {fixturesContainer}
      </div>
    </div>
    <div className="tab-content">
      <div className="tab-pane" id="results" role="tabpanel" aria-labelledby="results-tab" tabIndex="0">
        {resultsContainer}
      </div>
    </div>
  </>
);

export default MatchesNavContainer;