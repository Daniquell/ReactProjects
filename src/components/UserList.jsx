import React, { useState, useEffect } from "react";

const UserList = (props) => {
  const [filter, setFilter] = useState(props.children);

  useEffect(() => {
    setFilter(props.children);
  }, [props.children]);

  const getSearch = () => {
    if (filter) {
      return filter;
    }
    return props.children;
  };
  const userSearch = getSearch();

  const onChange = (e) => {
    setFilter(
      props.children.filter((user) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      {props.search && (
        <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix">search</i>
            <textarea
              id="icon_prefix2"
              class="materialize-textarea"
              onChange={onChange}
            ></textarea>
          </div>
        </div>
      )}
      <div className="table-responsive-xs table-responsive-sm tble-responsive-md">
      <table className="table table-striped table-boardered table-sotrtable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {props.children &&
            userSearch.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td></td>
                <td>
                  <i
                    className="material-icons"
                    onClick={() => props.deleteUser(user.id)}
                  >
                    delete
                  </i>
                  
                    
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default UserList;
