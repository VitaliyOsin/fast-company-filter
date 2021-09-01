import React, { useState } from "react";
import SearchStatus from "./searchStatus";
import User from "./user";
import ResetBtn from "./resetBtn";
import Pagination from "./pagination";
import { pagination } from "../utils/paginate";
import PropTypes from "prop-types";

const Users = ({
  users: allUsers,
  handleDelete,
  handleReset,
  bookedHandler,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const count = allUsers.length;
  const pageSize = 4;
  const users = pagination(allUsers, currentPage, pageSize);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <SearchStatus users={allUsers} />
      {count === 0 ? <ResetBtn handleReset={handleReset} /> : ""}
      <table className={`table ${count < 1 ? "d-none" : ""}`}>
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
              handleDelete={handleDelete}
              bookedHandler={bookedHandler}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        itemsCount={count}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
};
Users.propTypes = {
  users: PropTypes.array.isRequired,
  allUsers: PropTypes.array,
  handleDelete: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  bookedHandler: PropTypes.func.isRequired,
};
export default Users;
