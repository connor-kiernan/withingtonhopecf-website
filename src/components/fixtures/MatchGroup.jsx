import Match from "./Match";

const MatchGroup = ({group, fixtures}) => {
  fixtures = fixtures.map(fixture => <li key={fixture.id} className="list-group-item"><Match {...fixture}/></li>)

  return (
      <section className="mb-4">
        <h2 className="text-capitalize mb-2">{group}</h2>
        <ul className="list-group list-group-flush">{fixtures}</ul>
      </section>
  );
};

export default MatchGroup;