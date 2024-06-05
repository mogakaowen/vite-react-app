import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(url);
      const users = await response.json();
      console.log("Users:", users);
      setUsers(users);
    }; // async function cannot be used inside useEffect directly so we create a separate function

    getUsers(); // then invoke the function inside useEffect
  }, []);

  return (
    <section>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
