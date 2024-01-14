import { useNavBarContext } from "./NavBar";

const UserContainer = () => {
  const { user, logout, login } = useNavBarContext();

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Welcome {user?.name}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <p>Please Login</p>
          <button className="btn" onClick={login}>
            Login
          </button>
        </>
      )}
    </div>
  );
};
export default UserContainer;
