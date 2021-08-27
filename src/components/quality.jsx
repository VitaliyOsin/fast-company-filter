import React from "react";

const Quality = ({ q }) => (
  <span style={{ marginRight: "3px" }} className={`badge bg-${q.color}`}>
    {q.name}{" "}
  </span>
);

export default Quality;
