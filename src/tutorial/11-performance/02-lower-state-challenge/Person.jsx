const Person = ({ name }) => {
  console.log("render Person");

  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};
export default Person;
