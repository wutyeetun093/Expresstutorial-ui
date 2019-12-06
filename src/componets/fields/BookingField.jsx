import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField } from 'redux-form';
import { FormGroup, HelpBlock, Input } from 'rsuite';
import {
  required,
  number,
  email,
  phoneNumber,
  maxLength255,
} from './validation';

const renderField = fields => {
  const {
    componentClass,
    disabled,
    id,
    input,
    type,
    name,
    meta: { touched, error },
    readOnly,
  } = fields;
  return (
    <FormGroup>
      {touched && error && (
        <HelpBlock style={{ color: 'red' }}>
          {touched && error ? `* ( ${error} )` : undefined}
        </HelpBlock>
      )}
      <Input
        {...input}
        componentClass={componentClass}
        type={type}
        name={name}
        id={id}
        disabled={disabled}
        readOnly={readOnly}
        style={{
          border: 'none',
          padding: 0,
          fontSize: '12px',
        }}
      />
    </FormGroup>
  );
};

const BookingField = ({
  isRequired,
  icon,
  name,
  validateEmail,
  type,
  id,
  readOnly,
  componentClass,
  validatePhoneNumber,
  ...rest
}) => {
  const validate = [maxLength255];
  if (isRequired) {
    validate.push(required);
  }
  if (type === 'number') {
    validate.push(number);
  }
  if (validateEmail) {
    validate.push(email);
  }
  if (validatePhoneNumber) {
    validate.push(phoneNumber);
  }

  return (
    <ReduxField
      {...rest}
      icon={icon}
      name={name}
      type={type}
      componentClass={componentClass}
      id={id}
      component={renderField}
      validate={validate}
      readOnly={readOnly}
    />
  );
};

BookingField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'number',
    'text',
    'password',
    'email',
    'checkbox',
    'textarea',
  ]),
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  validateEmail: PropTypes.bool,
  readOnly: PropTypes.bool,
};

BookingField.defaultProps = {
  type: 'text',
  disabled: false,
  isRequired: false,
  validateEmail: false,
  readOnly: false,
};

export default BookingField;
