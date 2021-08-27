import React from "react";

const ResetBtn = ({ hendleReset }) => (
  <button className="btn btn-danger m-2" onClick={hendleReset}>
    Восстановить список
  </button>
);

export default ResetBtn;
