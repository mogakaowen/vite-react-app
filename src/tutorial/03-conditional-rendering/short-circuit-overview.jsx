import { useState } from "react";

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("john");

  const codeExample = null || "Hello World";

  // can't use if statements in JSX
  return (
    <div>
      {/* {if(someCondition){"won't work"}} */}

      <h4>
        Falsy OR: {text || "hello world"}
        <p>displays second value if first is false</p>
      </h4>

      <h4>
        Falsy AND: {text && "hello world"}
        <p>displays first value if false</p>
      </h4>

      <h4>
        Truthy OR: {name || "hello world"}
        <p>displays first value if it is true</p>
      </h4>

      <h4>
        Truthy AND: {name && "hello world"}
        <p>displays second value if first is true</p>
      </h4>
      {codeExample}
    </div>
  );
};
export default ShortCircuitOverview;
