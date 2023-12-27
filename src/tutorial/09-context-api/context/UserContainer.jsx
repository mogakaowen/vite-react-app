import { useNavBarContext } from "./NavBar";

const UserContainer = () => {
  const { user, logout } = useNavBarContext();

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there, {user?.name}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
export default UserContainer;
