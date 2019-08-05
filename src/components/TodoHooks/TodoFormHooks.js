import React, { useState } from "react";

const TodoFormHooks = () => {
  const [value, setValue] = useState("");

  return <input value={value} onChange={e => setValue(e.target.value)} />;
};
export default TodoFormHooks;
