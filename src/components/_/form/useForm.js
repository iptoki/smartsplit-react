import { useState } from 'react';
import validate from './_/validate';

export default function useForm(iniFields = {}) {
  const [fields, setFields] = useState(iniFields);
  const setField = (field, value) => {
    setFields((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        ...value,
      },
    }));
  };
  const toJS = () => {
    const values = {};
    Object.entries(fields).forEach(([fieldName, field]) => {
      if (!field.excluded) {
        values[fieldName] = field.value;
      }
    });
    return values;
  };
  const handlers = {};
  Object.entries(fields).forEach(([fieldName, field]) => {
    if (typeof field.value === 'boolean') {
      handlers[fieldName] = () =>
        setField(fieldName, {
          errors: [],
          value: !field.value,
        });
    } else {
      handlers[fieldName] = (e) =>
        setField(fieldName, {
          errors: [],
          value: e.target.value,
        });
    }
  });
  const isValid = () => {
    const result = validate(fields);
    console.log('VALIDATED FIELDS', fields);
    setFields({ ...fields });
    return result;
  };
  const reset = () => setFields(iniFields);
  return {
    fields,
    setFields,
    setField,
    toJS,
    handlers,
    isValid,
    reset,
  };
}