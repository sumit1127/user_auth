// search params

import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <div>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
      <Outlet />

      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active Users
      </button>
      <button onClick={() => setSearchParams({})}>Reset Filter</button>

      {showActiveUsers ? <h3>Active Users</h3> : <h3>All Users</h3>}
    </div>
  );
};

export default Users;
