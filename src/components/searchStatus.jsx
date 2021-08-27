import React from "react";
import { hendlePhrase } from "../api/util";

const SearchStatus = ({ users }) => (
  <h2 className={"m-2"}>{hendlePhrase(users.length)}</h2>
);

export default SearchStatus;
