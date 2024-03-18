import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  const logout = () => {
    setUser(null);
  };

  const login = () => {
    setUser({ name: "john" });
  };

  return (
    <div>
      {/* content inside element */}
      <h2>{text || "default value"}</h2>
      {/* toggle element */}
      {text && (
        <div>
          <h2> whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* more info below */}
      {!text && (
        <h4>
          <em>Since text is false, this statement gets displayed.</em>
        </h4>
      )}

      <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
      {/* inside element */}
      <button className="btn" onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "edit" : "add"}
      </button>

      {/* toggle elements/components */}
      {user ? (
        <div>{user && <SomeComponent name={user.name} logout={logout} />}</div>
      ) : (
        <div>
          <h3>Click to login</h3>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name, logout }) => {
  return (
    <div>
      <h3>Welcome back {name}!</h3>
      <button className="btn" onClick={logout}>
        log out
      </button>
    </div>
  );
};
export default ShortCircuitExamples;
