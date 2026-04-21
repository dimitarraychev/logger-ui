import { useState, useCallback, useEffect } from "react";

type FormValues = Record<string, any>;

export const useForm = <T extends FormValues>(initialValues: T, delay: number = 500) => {
  const [values, setValues] = useState<T>(initialValues);
  const [debouncedValues, setDebouncedValues] = useState<T>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value, 
    }));
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValues(values);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [values, delay]);

  const setFormValues = useCallback((newValues: Partial<T>) => {
    setValues((prev) => ({ ...prev, ...newValues }));
  }, []);

  return { 
    values,           
    debouncedValues,  
    handleChange, 
    setFormValues 
  };
};