const Competition = ({competition}) => {
  const leagueIcon = <i className="fa-solid fa-table-list"></i>
  const cupIcon = <i className="fa-solid fa-trophy"></i>
  const friendlyIcon = <i className="fa-solid fa-handshake-simple"></i>

  switch (competition) {
    case "league":
      return <span>MSMFL {leagueIcon}</span>;
    case "cup":
      return <span>Cup {cupIcon}</span>;
    case "friendly":
      return <span>Friendly {friendlyIcon}</span>;
    default:
      return <span>{competition}</span>

  }
}

export default Competition;