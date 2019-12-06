import React from "react";
import { Form, Button } from "rsuite";
import Field from "../../../componets/fields/Field";

const FashionForm = props => {
  const { fashion, onClose, onFormSubmit } = props;

  return (
    <Form fluid onSubmit={props.handleSubmit(onFormSubmit)}>
      <Field
        name="name"
        id="name"
        label="Enter Fashion Name"
        type="text"
        isRequired
      />
      <Field
        name="brand"
        id="brand"
        label="Enter Brand"
        type="text"
        isRequired
      />
      <Field
        name="quantity"
        id="quantity"
        label="Quantity"
        type="number"
        isRequired
      />
      <Field name="price" id="price" label="Price" type="number" isRequired />

      <div className="d-flex justify-content-end mt-2">
        <Button
          onClick={() => {
            onClose();
            props.reset();
          }}
          appearance="subtle"
          className="mr-2"
        >
          Cancel
        </Button>
        <Button color="cyan" type="submit">
          {fashion ? <>Update</> : <>Create</>}
        </Button>
      </div>
    </Form>
  );
};

export default FashionForm;
