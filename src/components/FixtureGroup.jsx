import Fixture from "./Fixture";

const FixtureGroup = ({group, fixtures}) => {
  fixtures = fixtures.map(fixture => (<Fixture fixture={fixture}/>)).reduce((prev, curr) => [prev, <hr/>, curr])

  return (
      <section className="mb-4">
        <h2 className="text-capitalize mb-2">{group}</h2>
        {fixtures}
      </section>
  );
};

export default FixtureGroup;