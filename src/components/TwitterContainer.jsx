import {TwitterTweetEmbed} from "react-twitter-embed";
import {Placeholder} from "react-bootstrap";
import {selectById} from "../features/config/configSlice";
import {useSelector} from "react-redux";

const TwitterContainer = () => {
  const tweet = useSelector(state => selectById(state, "tweet"));

  return <>
    <h3>Check out the Twitter:</h3>
    <div className="twitterContainer mb-2">
      <TwitterTweetEmbed placeholder={<TwitterPlaceholder/>} tweetId={tweet[1]}/>
    </div>
  </>;
};

export default TwitterContainer;

const TwitterPlaceholder = () => (
    <Placeholder as="p" animation="wave">
      <Placeholder className="w-100" size="lg"/>
      <Placeholder className="w-75" size="lg"/>
      <Placeholder className="w-100" size="lg"/>
      <Placeholder className="w-50" size="lg"/>
      <Placeholder className="w-100" size="lg"/>
      <Placeholder className="w-75" size="lg"/>
      <Placeholder className="w-100" size="lg"/>
      <Placeholder className="w-50" size="lg"/>
    </Placeholder>
);