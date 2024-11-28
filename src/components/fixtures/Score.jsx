import {Stack} from "react-bootstrap";

const Score = ({homeGoals, awayGoals, isHighlight}) => (
    <Stack direction="horizontal" gap={isHighlight ? 4 : 3} className={`score rounded bg-primary text-white ${isHighlight ? "px-4" : "px-3"}`}>
      <div>{homeGoals}</div>
      <div className="vr my-2"></div>
      <div>{awayGoals}</div>
    </Stack>
);

export default Score;