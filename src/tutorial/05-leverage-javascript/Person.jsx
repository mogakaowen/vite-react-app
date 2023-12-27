import React from "react";
import avatar from "../../assets/default-avatar.svg";

const Person = ({ name, nickName = "No nickname", images }) => {
  //   const img = images && images[0] && images[0].small && images[0].small.url; // without optional chaining
  const img = images?.[0]?.small?.url || avatar; // with optional chaining

  return (
    <article className="person">
      <div>
        <img src={img} alt={name} style={{ width: "50px" }} />
        <h4>{name}</h4>
        <p>Nickname: {nickName}</p>
      </div>
    </article>
  );
};

export default Person;
