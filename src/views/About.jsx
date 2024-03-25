import FounderRow from "../components/FounderRow";
import './About.css'

const About = () => {
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
  labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend. Egestas quis ipsum suspendisse ultrices
   gravida. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Nullam ac tortor vitae purus.`;

  const founderDetails = [
    {
      name: "John Lennon",
      description: description
    },
    {
      name: "Paul McCartney",
      description: description
    },
    {
      name: "George Harrison",
      description: description
    },
    {
      name: "Ringo Starr",
      description: description
    }
  ];

  return (
      <>
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Auctor urna nunc id cursus metus aliquam eleifend. Egestas quis ipsum suspendisse ultrices gravida.
          Molestie
          ac
          feugiat sed lectus vestibulum mattis ullamcorper velit. Nullam ac tortor vitae purus. Ut placerat orci nulla
          pellentesque dignissim enim sit. Tempus egestas sed sed risus pretium.
        </p>
        <p>
          Lacinia at quis risus sed vulputate odio. Nunc non blandit massa enim nec dui nunc mattis. Egestas sed sed risus
          pretium quam. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Pretium quam vulputate dignissim
          suspendisse
          in est ante in nibh. Donec adipiscing tristique risus nec feugiat in. Luctus venenatis lectus magna fringilla urna
          porttitor. Cras fermentum odio eu feugiat. Sed enim ut sem viverra. Justo eget magna fermentum iaculis eu non diam
          phasellus. At risus viverra adipiscing at in tellus integer feugiat.
        </p>
        <div id="founderContainer">
          {founderDetails.map((detail) => (
              <FounderRow key={detail.name} founderName={detail.name} founderDescription={detail.description} />
          ))}
        </div>
      </>);
};

export default About;