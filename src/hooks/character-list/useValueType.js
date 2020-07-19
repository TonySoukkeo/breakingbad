import { useState, useEffect } from "react";

const useValueType = (inputValue, type) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    switch (type) {
      case "string":
        setValue(inputValue);
        break;

      case "array":
        const newValue = inputValue.reduce(
          (acc, curr, index) =>
            index !== inputValue.length - 1
              ? (acc += `${curr}, `)
              : (acc += curr),
          ""
        );
        setValue(newValue);
        break;
      default:
        break;
    }
  }, [inputValue, type]);

  return value;
};

export default useValueType;
