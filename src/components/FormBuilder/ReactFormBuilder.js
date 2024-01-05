import React, { useEffect, useState } from "react";
import FormInput from "./FormInput";
import {
  FormInputsValidations,
  dataJsonValidation,
} from "../../validation/FormValidation";
import "../../assets/css/style.css";

const ReactFormBuilder = ({
  title,
  titleClassName,
  formData,
  formClassName,
  submitButtonName,
  submitButtonNameClassName,
  onFormSubmit,
  onInputChange,
  labelClassName,
}) => {
  const [inputValues, setInputValues] = useState({});
  const [error, setErrors] = useState("");
  const [jsonError, setJsonError] = useState("");
  const data = formData || [];

  useEffect(() => {
    if (!data) {
      throw new Error("Custom error message");
    } else {
      let formErrors = dataJsonValidation(data);
      setJsonError(formErrors);
    }
  }, [formData]);

  const handleChange = (name, value, isChecked, filesData) => {
    setErrors({ ...error, [name]: null });
    if (onInputChange) {
      onInputChange(name, value);
    }
    setInputValues((prevInputValues) => {
      if (isChecked) {
        return {
          ...prevInputValues,
          [name]: [...(prevInputValues[name] || []), value],
        };
      } else if (filesData) {
        return {
          ...prevInputValues,
          [name]: [...(prevInputValues[name] || []), filesData],
        };
      } else {
        return { ...prevInputValues, [name]: value };
      }
    });
  };

  const handleSubmit = () => {
    const requiredFields = data.filter((field) => field.required === "true");
    let formErrors = FormInputsValidations(inputValues, requiredFields);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      onFormSubmit(inputValues);
      setErrors("");
      setInputValues({});
      document.getElementById("react-form-builder").reset();
    }
  };
  return (
    <div>
      <form
        id="react-form-builder"
        className={`form-builder-display${
          formClassName ? ` ${formClassName}` : ""
        }`}
      >
        <h4
          className={`form-builder-center${
            titleClassName ? ` ${titleClassName}` : ""
          }`}
        >
          {title}
        </h4>
        {jsonError && (
          <h4 className="text-danger m-5 text-center"> {jsonError}</h4>
        )}
        <div>
          {!jsonError &&
            data?.map((item, index) => {
              return (
                <div key={index}>
                  <label
                    className={`form-builder-form-label${
                      labelClassName ? ` ${labelClassName}` : ""
                    }`}
                  >
                    {item?.label}
                  </label>
                  {item?.required === "true" && (
                    <span className="text-danger">*</span>
                  )}
                  <FormInput
                    handleChange={handleChange}
                    type={item?.type}
                    name={item?.name}
                    className={item?.className}
                    options={item?.options}
                    src={item?.src}
                    width={item?.width}
                    height={item?.height}
                    alt={item?.alt}
                    min={item?.min}
                    max={item?.max}
                    pattern={item?.pattern}
                    placeholder={item?.placeholder}
                    required={item?.required}
                    error={error}
                  />
                </div>
              );
            })}
        </div>
        {submitButtonName && (
          <button
            type="button"
            className={`form-builder-btn${
              submitButtonNameClassName ? ` ${submitButtonNameClassName}` : ""
            }`}
            onClick={handleSubmit}
          >
            {submitButtonName}
          </button>
        )}
      </form>
    </div>
  );
};

export default ReactFormBuilder;
