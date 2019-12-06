import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField } from 'redux-form';
import { FormGroup, Input, Whisper, Tooltip, Icon } from 'rsuite';
import {
  required,
  number,
  email,
  phoneNumber,
  maxLength255,
} from './validation';
import styles from './InvoiceField.module.scss';

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
    placeholder,
  } = fields;
  return (
    <div className="d-flex justify-content-between ">
      <FormGroup>
        <Input
          {...input}
          componentClass={componentClass}
          type={type}
          name={name}
          id={id}
          disabled={disabled}
          readOnly={readOnly}
          className={touched && error ? styles.errorField : styles.inputField}
          placeholder={placeholder}
        />
      </FormGroup>
      {touched && error ? (
        <Whisper
          placement="top"
          trigger="hover"
          speaker={<Tooltip>{error}</Tooltip>}
        >
          <Icon icon="exclamation-circle" style={{ color: 'red' }} />
        </Whisper>
      ) : (
        ''
      )}
    </div>
  );
};

const InvoiceField = ({
  isRequired,
  icon,
  name,
  validateEmail,
  type,
  id,
  componentClass,
  validatePhoneNumber,
  placeholder,
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
      placeholder={placeholder}
    />
  );
};

InvoiceField.propTypes = {
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
};

InvoiceField.defaultProps = {
  type: 'text',
  disabled: false,
  isRequired: false,
  validateEmail: false,
};

export default InvoiceField;
