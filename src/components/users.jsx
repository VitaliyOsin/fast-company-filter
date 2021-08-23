import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const hendleDelete = (userId) => {
    setUsers(users.filter((v) => v._id !== userId));
  };

  const hendlePhrase = (number) => {
    const man = (n) => {
      let m;
      if (n > 9) {
        const narr = n.toString().split("");
        if (n > 19) {
          m = narr[1] > 1 && narr[1] < 5 ? "человека" : "человек";
        } else {
          m = "человек";
        }
      } else {
        m = n > 1 && n < 5 ? "человека" : "человек";
      }
      return m;
    };

    let phrase =
      number > 0 ? (
        <span className="badge bg-primary">
          {users.length} {man(users.length)}{" "}
          {users.length === 1 ? "тусанет" : "тусанут"} с тобой сегодня
        </span>
      ) : (
        <span className="badge bg-danger">Никто с тобой не тусанет</span>
      );

    return phrase;
  };

  return (
    <>
      <h2>{hendlePhrase(users.length)}</h2>
      <table className={`table ${users.length < 1 ? "d-none" : ""}`}>
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((q) => (
                    <span
                      key={q._id}
                      style={{ marginRight: "3px" }}
                      className={`badge bg-${q.color}`}
                    >
                      {q.name}{" "}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
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
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Users;
