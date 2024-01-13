const ErrorExample = () => {
  let count = 0;

  const handleCount = () => {
    count++;
    console.log("Count:", count);
  };
  return (
    <div>
      <h1>Error Example</h1>
      <h4>
        You clicked <strong>{count} </strong> times
      </h4>
      <button type="button" className="btn" onClick={handleCount}>
        Increase
      </button>
    </div>
  );
};

export default ErrorExample;
