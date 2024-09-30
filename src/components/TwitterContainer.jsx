import {TwitterTweetEmbed} from "react-twitter-embed";
import {Placeholder} from "react-bootstrap";
import {selectById, useGetConfigQuery} from "../features/config/configSlice";
import {useSelector} from "react-redux";

const TwitterContainer = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetConfigQuery();

  const tweet = useSelector(state => selectById(state, "tweet"));

  if (isLoading) {
    return <TwitterPlaceholder />
  }

  if (isError) {
    return (<p>Unknown error when fetching carousel: {error}</p>);
  }

  if (isSuccess) {
    return <>
      <h3>Check out the Twitter:</h3>
      <div className="twitterContainer mb-2">
        <TwitterTweetEmbed placeholder={<TwitterPlaceholder/>} tweetId={tweet[1]}/>
      </div>
    </>
  }
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