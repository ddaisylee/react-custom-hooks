import { useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue)
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event
    setValue(value)

    if (!validator(value)) setIsValid(false)
    if (validator(value)) setIsValid(true)
  }

  return { value, isValid, handleChange }
}
