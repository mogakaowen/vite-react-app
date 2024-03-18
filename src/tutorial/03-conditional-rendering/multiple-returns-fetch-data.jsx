import { useEffect, useState } from "react";

const url = "https://api.github.com/users/mogakaowen";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        console.log("Response:", resp);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const user = await resp.json();
        console.log("User:", user);
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log("Error:", error);
      }
      // hide loading
      setIsLoading(false);
    };

    setTimeout(() => {
      fetchUser();
    }, 3000);
  }, []);
  // order matters
  // don't place user JSX before loading or error

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  const { avatar_url, name, company, bio, html_url } = user;
  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <a href={html_url}>Github Profile</a>
      <h4>works at {company || "Equity Bank Limited"}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
