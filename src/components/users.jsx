import React from "react";
import SearchStatus from "./searchStatus";
import User from "./user";
import ResetBtn from "./resetBtn";

const Users = ({ users, hendleDelete, hendleReset, bookedHendler }) => {
  return (
    <>
      <SearchStatus users={users} />
      {users.length === 0 ? <ResetBtn hendleReset={hendleReset} /> : ""}
      <table className={`table ${users.length < 1 ? "d-none" : ""}`}>
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User
              key={user._id}
              user={user}
              hendleDelete={hendleDelete}
              bookedHendler={bookedHendler}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
