import React from "react";
import { data } from "../../data";

const UserChallenge = () => {
  const [name, setName] = React.useState("");
  const [users, setUsers] = React.useState(data);
  const [isData, setIsData] = React.useState(true);

  const removeUser = (id) => () => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
    if (newUsers.length === 0) {
      setIsData(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter a name");
      return;
    }
    const newUser = { id: new Date().getTime(), name };
    setUsers([...users, newUser]);
    setIsData(true);
    setName("");
    console.log("New user:", newUser);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h3>Users</h3>
      {isData ? (
        users.map((user) => {
          const { id, name } = user;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button className="btn" onClick={removeUser(id)}>
                remove
              </button>
            </div>
          );
        })
      ) : (
        <h4>No users found</h4>
      )}
    </div>
  );
};
export default UserChallenge;
