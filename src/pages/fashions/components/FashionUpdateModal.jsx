// import React from 'react';
// import { Modal } from 'rsuite';
// import { connect } from 'react-redux';
// import { reduxForm } from 'redux-form';
// import { updateTag } from '../../../services/book/BookAction';
// import TagForm from './BookForm';

// const formName = 'tagUpdateForm';
// const TagUpdateModal = props => {
//   const { isShow, onClose, initialValues } = props;
//   const onFormSubmit = data => {
//     props.updateTag(data.id, data, () => {
//       onClose();
//       props.reset();
//     });
//   };

//   return (
//     <Modal show={isShow} onHide={onClose} size="xs">
//       <Modal.Header>
//         <Modal.Title>Tag Update</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <TagForm {...props} onFormSubmit={onFormSubmit} tag={initialValues} />
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default connect(
//   null,
//   { updateTag }
// )(reduxForm({ form: formName, enableReinitialize: true })(TagUpdateModal));
