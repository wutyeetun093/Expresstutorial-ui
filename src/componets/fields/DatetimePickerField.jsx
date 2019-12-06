import React from 'react';
import { ControlLabel, DatePicker, FormGroup } from 'rsuite';
import { Field as ReduxField } from 'redux-form';
import PropTypes from 'prop-types';

const renderField = fields => {
  const {
    label,
    dateTimeFormat,
    input,
    // meta: { touched, error },
  } = fields;

  return (
    <FormGroup className="pt-3 m-0">
      <ControlLabel>{label}</ControlLabel>
      <DatePicker
        oneTap
        style={{ width: 600, margin: 0 }}
        {...input}
        value={input.value || new Date()}
        format={dateTimeFormat}
      />
    </FormGroup>
  );
};

const DatetimePickerField = ({
  label,
  dateTimeFormat,
  name,
  type,
  id,
  ...rest
}) => (
  <ReduxField
    {...rest}
    label={label}
    name={name}
    type={type}
    id={id}
    dateTimeFormat={dateTimeFormat}
    component={renderField}
  />
);

DatetimePickerField.propTypes = {
  dateTimeFormat: PropTypes.string,
};

DatetimePickerField.defaultProps = {
  dateTimeFormat: 'DD MMM YYYY',
};
export default DatetimePickerField;
