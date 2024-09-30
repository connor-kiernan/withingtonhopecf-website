import Match from "./Match";

const MatchGroup = ({group, fixtures}) => {
  fixtures = fixtures.map(fixture => (<Match key={fixture.id} {...fixture}/>)).reduce((prev, curr) => [prev, <hr key={prev}/>, curr])

  return (
      <section className="mb-4">
        <h2 className="text-capitalize mb-2">{group}</h2>
        {fixtures}
      </section>
  );
};

export default MatchGroup;