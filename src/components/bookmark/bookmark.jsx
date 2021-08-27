import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./bookmark.css";

const Bookmark = ({ user, bookedHendler }) => {
  const bookHendler = () => {
    bookedHendler(user._id);
  };
  return (
    <i
      onClick={bookHendler}
      className={`bi bi-bookmark${user.booked ? "-fill" : ""}`}
    ></i>
  );
};

export default Bookmark;
