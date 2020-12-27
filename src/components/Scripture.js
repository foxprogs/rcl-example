import React from "react";
import { ParallelScripture } from "scripture-resources-rcl";

function Scripture() {
  const reference = {
    chapter: 1,
    verse: 2
  };

  return <ParallelScripture reference={reference} height="500px" />;
}

export default Scripture;
