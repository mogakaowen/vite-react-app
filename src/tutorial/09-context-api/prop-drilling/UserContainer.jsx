const UserContainer = ({ user, logout, login }) => {
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Welcome {user.name.toUpperCase()}</p>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <>
          <p>Please Login</p>
          <button type="button" className="btn" onClick={login}>
            login
          </button>
        </>
      )}
    </div>
  );
};
export default UserContainer;
