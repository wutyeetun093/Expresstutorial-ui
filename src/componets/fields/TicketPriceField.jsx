import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { FormGroup, ControlLabel, HelpBlock, SelectPicker } from 'rsuite';
import { required } from './validation';

const setdata = [
  { label: 500, value: 'FIVE_HUNDRED' },
  { label: 1000, value: 'ONE_THOUNSAND' },
];

const InputComponet = ({
  componentClass,
  label,
  field,
  type,
  id,
  meta: { touched, error },
  input,
  ...props
}) => {
  return (
    <FormGroup className="mt-3">
      <ControlLabel htmlFor={id}>{label}</ControlLabel>
      <SelectPicker
        data={setdata}
        {...props}
        {...input}
        searchable={false}
        placeholder="Ticket Price"
        cleanable={false}
        block
      />

      {touched && error && (
        <HelpBlock style={{ color: 'red' }}>{error}</HelpBlock>
      )}
    </FormGroup>
  );
};

const TicketPriceField = props => {
  const { label, name, componentClass, placeholder, type, isRequired } = props;
  const validate = [];
  if (isRequired) {
    validate.push(required);
  }

  return (
    <Field
      name={name}
      type={type}
      component={InputComponet}
      label={label}
      componentClass={componentClass}
      placeholder={placeholder}
      validate={validate}
    />
  );
};

export default connect(
  null,
  null
)(TicketPriceField);
