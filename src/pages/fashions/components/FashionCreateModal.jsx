import React from "react";
import { Modal } from "rsuite";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { createFashion } from "../../../services/fashion/FashionAction";
import FashionForm from "./FashionForm";

const formName = "FashionCreateForm";

const FahionCreateModal = props => {
  const { isShow, onClose } = props;
  const onFormSubmit = data => {
    props.createFashion(data, () => {
      props.onClose();
      props.reset();
    });
  };
  return (
    <Modal show={isShow} onHide={onClose} size="xs">
      <Modal.Header>
        <Modal.Title>Fashion Create</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FashionForm onClose={onClose} onFormSubmit={onFormSubmit} {...props} />
      </Modal.Body>
    </Modal>
  );
};

export default connect(null, { createFashion })(
  reduxForm({ form: formName })(FahionCreateModal)
);
