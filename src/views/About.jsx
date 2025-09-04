import VipCard from "../components/players/VipCard";
import "./About.css";
import {Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const About = () => (
    <>
      <h1>Our Story</h1>
      <Row className="fs-5">
        <figure className="text-center">
          <Image fluid src={"/images/2021-squad.png"} />
          <figcaption className={"small text-secondary"}>The 21/22 Withington Hope Squad</figcaption>
        </figure>
        <p>Founded in 2020 by Giorgio Arnetoli, Alex Gunn, Sam Hargraves, and Harry Clarke, Withington Hope Club de Fútbol is
          a men's football team based in Manchester, with Hough End as its home ground. Created by four friends on a whim,
          the team initially consisted of mutual friends who lived locally. This initial recruitment process led to one of
          the core values of the club: <q>If you’re not sound, you’re not in the squad</q>.
        </p>
        <p>
          Once a suitably sized squad was formed, the first hurdle was acceptance into a league. Aiming to play at a highly
          competitive level, the club eventually opted to apply to join the Manchester Saturday Morning Football League
          (<abbr>MSMFL</abbr>). Despite its newly formed status, the club was accepted into the <abbr>MSMFL</abbr>,
          henceforth committing the squad to early Saturday rises and wasted Friday nights.
        </p>
        <p>
          The club's name originates from the university days of the founders, who inhabited a house on Hope Street. As a
          newly created side, hope was desperately needed given the unforgiving nature of having various squad members who
          had never played competitive football before. Currently in its third season in the MSMFL, the team has improved
          drastically over time, leaving behind the ghosts of various double-digit losses to now becoming a side competitive
          in every match. With an ever-tightening team bond, the club hopes to be competing towards the top of the table in
          the seasons to come.
        </p>
        <p>
          Up the Fish 🐟
        </p>
      </Row>
      <Row>
        <h2 id="people" className="mt-4">The People behind the club</h2>
        <Row xs={2} sm={3} lg={5} className="justify-content-evenly">
          <VipCard name="Giorgio Arnetoli" role="Manager" image="giorgioArnetoli.png"/>
          <VipCard name="Eoghan Campbell" role="Captain" image="eoghanCampbell.png"/>
          <VipCard name="Anthony Cockbain" role="Vice Captain" />
          <VipCard name="Nathan Salley" role="Vice Captain/Kit Man"/>
          <VipCard name="Nathan Baker" role="Vice Captain/Social Secretary" />
          <VipCard name="Mike Marsh" role="League Secretary" image="mikeMarsh.png"/>
          <VipCard name="Ollie Holgate" role="Match Day Secretary" image="ollieHolgate.png" />
          <VipCard name="Scott Buckley" role="Treasurer" image="scottBuckley.png" />
          <VipCard name="Connor Kiernan" role="Social Media Secretary" image="connorKiernan.png" />
        </Row>
      </Row>
    </>
);

export default About;