import React from "react";
import Bookmark from "./bookmark/bookmark";
import Quality from "./quality";

const User = ({ user, hendleDelete, bookedHendler }) => (
  <>
    <tr>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((q) => (
          <Quality key={q._id} q={q} />
        ))}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        <Bookmark user={user} bookedHendler={bookedHendler} />
      </td>
      <td>
        <button
          id={user._id}
          type="button"
          className="btn btn-danger"
          onClick={() => {
            hendleDelete(user._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  </>
);

export default User;
