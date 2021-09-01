import React, { useState } from "react";
import api from "./api";
import Users from "./components/users";

const App = () => {
  const initialState = api.users
    .fetchAll()
    .map((v) => ({ ...v, booked: false }));
  const [users, setUsers] = useState(initialState);
  const handleDelete = (userId) => {
    setUsers(users.filter((v) => v._id !== userId));
  };
  const handleReset = () => {
    setUsers(initialState);
  };
  const bookedHandler = (userId) => {
    const newUsers = users.map((user) => {
      if (user._id === userId) {
        user.booked = !user.booked;
      }
      return user;
    });

    setUsers(newUsers);
  };

  return (
    <>
      <Users
        users={users}
        handleDelete={handleDelete}
        handleReset={handleReset}
        bookedHandler={bookedHandler}
      />
    </>
  );
};

export default App;
