import { useState, useEffect } from "react";

type FormValues = Record<string, any>;

export const useForm = <T extends FormValues>(initialValues: T, delay: number = 500) => {
  const [values, setValues] = useState<T>(initialValues);
  const [debouncedValues, setDebouncedValues] = useState<T>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    
    let finalValue: any = value;
    if (type === "checkbox") finalValue = checked;
    if (type === "number") finalValue = value === "" ? 0 : Number(value);

    setValues((prev) => ({
      ...prev,
      [name]: finalValue,
    }));
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValues(values);
    }, delay);

    return () => clearTimeout(handler);
  }, [values, delay]);

  return { values, debouncedValues, handleChange };
};