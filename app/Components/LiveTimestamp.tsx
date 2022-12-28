"use client";

type Props = {
  time: string;
};

import TimeAgo from "react-timeago";

const LiveTimestamp = ({ time }: Props) => {
  return <TimeAgo date={time} />;
};

export default LiveTimestamp;
