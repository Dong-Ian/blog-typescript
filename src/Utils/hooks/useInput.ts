import { useState } from "react";

function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return { value, onChange: handleChange, setValue };
}

export default useInput;
