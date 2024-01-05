# @techvootsolutions/form-builder

A @techvootsolutions/form-builder react component. Compatible with react ^18.0.2

- [Install](#install)
- [Usage](#usage)
- [Props](#available-props)
- [Events](#events)

## Install

```bash
npm i @techvootsolutions/form-builder
```

```javascript
import { ReactFormBuilder } from "@techvootsolutions/form-builder";

export default {
  <ReactFormBuilder />
}
```
## Available props

| Prop                      | Type   | Default | Description                         |
| ------------------------- | ------ | ------- | ----------------------------------- |
| formData                  | Array  | []      | An array containing the form data. Each item in the array represents an input element within the form. Each item can have properties like type, name, className, options, src, width, height, alt, min, max, pattern, placeholder, and required.      |
| formClassName             | String |         | Adds custom CSS classes to the form element, allowing for additional styling or integration with existing styling frameworks.                  |
| title                     | String |         | Specifies the title of the form. This title can be displayed at the top of the form to provide context or instructions.                 |
| titleClassName            | String |         | Adds custom CSS classes to the form title, allowing for specific styling of the title.                                                       |
| submitButtonName          | String |         | Sets the title or label for the submit button within the form. This is the text that will be displayed on the submit button.                  |
| submitButtonNameClassName | String |         | Adds custom CSS classes to the submit button, allowing for specific styling of the submit button.                                               |
| labelClassName            | String |         | Adds custom CSS classes to the labels associated with form inputs, allowing for specific styling of the labels.                                 |

## Usage
Here's an example of basic usage:
```javascript

import React from "react";
import { ReactFormBuilder } from "@techvootsolutions/form-builder";

function App() {
  const data = [
    {
      type: "text",
      name: "firstName",
      label: "firstName",
      placeholder: "Enter Your First Name",
      required: "true",
      errorMessages: "First name required",
      className: "bg-danger",
    },
  ];
  return (
    <div>
      <ReactFormBuilder
        title="Dynamic FormInput"
        titleClassName="text-uppercase"
        formData={data}
        formClassName="container"
        submitButtonName="submit Form"
        submitButtonNameClassName="btn"
        labelClassName="mb-3"
      />
    </div>
  );
}


```

## Available props for formData

| Prop                      | Type   | required | Description                         |
| ------------------------- | ------ | -------  | ----------------------------------- |
| type                      | String | true     | Specifies the type of input element. Valid values include "text," "number," "password," and other HTML input types.                            |
| name                      | String | true     | Sets the name attribute of the input element. It is used to identify the input data when submitted in a form.                                 |
| className                 | String | false    | Adds custom CSS classes to the input element, allowing for additional styling or integration with existing styling frameworks                   |
| options                   | Array  | false    | An array of options used for input elements like select. Each option is an object with properties such as "value" and "option".                |
| src                       | String | false    | Specifies the source URL for input elements like images. Used in conjunction with image-related input types.                                  |
| width                     | String | false    | Sets the width of the input element. Can be specified in pixels, percentage, em, etc.                                                         |
| height                    | String | false    | Sets the height of the input element. Can be specified in pixels, percentage, em, etc.                                                         |
| alt                       | String | false    | Specifies alternative text for input elements like images, providing a description in case the image cannot be displayed.                       |
| min                       | String | false    | Defines the minimum allowed value for input elements with a range, such as number or date inputs.                                              |
| max                       | String | false    | Defines the maximum allowed value for input elements with a range, such as number or date inputs.                                              |
| pattern                   | String | false    | Specifies a regular expression pattern for validation, restricting the allowed input format.                                                |
| placeholder               | String | false    | Displays a short hint that describes the expected input for the user.                                                                        |
| required                  | String | false    |  Indicates whether the input field must be filled out before submitting a form.                                                            |

- Define Custom Components in Toolbar

```jsx
const data = [
  {
    type: "text",
    name: "fname",
    label: "firstName",
    placeholder: "Enter Your First Name",
    required: "true",
    requiredMessages: "First name required",
  },
  {
    type: "select",
    options:[{ value: "1", option: "options 1" },{ value: "2", option: "Option 2" }],
    name: "select",
    label: "Select Your dropdown value",
    required: "true",
  },
  {
    type: "radio",
    options:[{ value: "R1", option: "radio 1" },{ value: "R2", option: "radio 2" }],
    name: "radio",
    label: "select radio",
    required: "true",
  },
  {
    type: "checkbox",
    options:[{ value: "Check1", option: "checkbox 1" },{ value: "Check2", option: "checkbox 2" }],
    name: "checkbox",
    label: "select checkbox",
  },
  {
    type: "image",
    name: "image",
    src: "https://www.w3schools.com/html/img_girl.jpg",
    width: "500px",
    height: "500px",
    alt: "image not found",
  },
  {
    type: "tel",
    name: "telPhone",
    label: "telPhone",
    placeholder: "99092 *****",
    pattern: "[0-9]{5}-[0-9]{5}",
  },
  {
    type: "range",
    name: "range",
    min: "0",
    max: "50",
  },
  {
    type: "color",
  },
  {
    type: "date",
  },
  {
    type: "datetime-local",
  },
  {
    type: "email",
  },

  {
    type: "file",
  },
  {
    type: "number",
  },
  {
    type: "password",
  },
];
```

## Available Function
| Function Name             | Description                                                        |
| ------------------------- | --------------------------------------------------------           |
| onFormSubmit              |    Callback function triggered when the form is submitted. Receives an object containing the form data values as key-value pairs.                                              |
| onInputChange             |    Callback function triggered when an input value changes. Receives the name of the input and the new value.                                                                  |

Here's an example of basic Function usage:
```javascript

import React from "react";
import { ReactFormBuilder } from "@techvootsolutions/form-builder";

function App() {
  const handleSubmit = (formDataValues) => {
    console.log(formDataValues);
  };
  const handleChange = (name,value) => {
    console.log(name,value);
  }
  return (
    <div>
      <ReactFormBuilder
        formData={[
           // ... your form data here
        ]}
        onFormSubmit={handleSubmit}
        onInputChange={handleChange}
      />
    </div>
  );
}


```