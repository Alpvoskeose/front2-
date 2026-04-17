import { memo } from "react";

export const ActivityFeed = memo(function ActivityFeed() {
  console.log("ActivityFeed render");
  return <div style={{ padding: '10px' }}>No new activities.</div>;
});