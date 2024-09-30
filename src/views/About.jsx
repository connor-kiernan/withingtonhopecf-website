import VipCard from "../components/players/VipCard";
import "./About.css";
import {Row} from "react-bootstrap";

const About = () => (
    <>
      <h1>Our Story</h1>
      <Row className="fs-5">
        <p>Founded in 2020 by Giorgio Arnetoli, Alex Gunn, Sam Hargraves and Harry Clarke, Withington Hope
          Club de Fútbol are a men's football team based in Manchester, with Hough End our home ground. Created by four
          friends on a whim, the team initially consisted of mutual friends who lived locally. This initial recruitment
          process led to one of the core values of the club: if you’re not sound, you’re not in the squad.
        </p>
        <p>
          Once a suitably sized squad was constructed, the first hurdle was acceptance into a league. Aiming to play at a
          highly competitive level, the club eventually opted to apply to join the Manchester Saturday Morning Football
          League (<abbr>MSMFL</abbr>). Despite our newly formed status, the club was accepted into the <abbr>MSMFL</abbr>,
          henceforth committing ourselves to early
          Saturday rises and wasted Friday nights.
        </p>
        <p>
          The club's name has origins to the University days of the founders, who inhabited a house on Hope Street. As a
          newly created side, hope was desperately needed given the unforgiving nature of having various squad members
          who
          had never played competitive football before. Currently in our third season in the <abbr>MSMFL</abbr>, the team
          have improved drastically over
          time, leaving behind the ghosts of various double digit losses to now being a side competitive in every match.
          With an ever-tightening team bond, the club hopes to be competing towards of the top of the table in the
          seasons
          to come.
        </p>
        <p>
          Up the Fish 🐟
        </p>
      </Row>
      <Row>
        <h2 id="people" className="mt-4">The People behind the club</h2>
        <Row xs={2} sm={3} lg={4} xl={5} className="justify-content-evenly">
          <VipCard name="Giorgio Arnetoli" role="Manager" image="giorgioArnetoli.png"/>
          <VipCard name="Eoghan Campbell" role="Captain" image="eoghanCampbell.png"/>
          <VipCard name="Anthony Cockbain" role="Vice Captain/ Social Secretary" />
          <VipCard name="Scott Buckley" role="Vice Captain" image="scottBuckley.png"/>
          <VipCard name="Alex Gunn" role="Vice Captain/ League Secretary" image="alexGunn.png"/>
          <VipCard name="Nathan Salley" role="Kit Man" />
          <VipCard name="Ollie Holgate" role="Match Day Secretary" image="ollieHolgate.png" />
          <VipCard name="Joe Shaw" role="Treasurer" image="joeShaw.png" />
          <VipCard name="Zico D'Arcy" role="Social Secretary" image="zicoD'Arcy.png" />
        </Row>
      </Row>
    </>
);

export default About;