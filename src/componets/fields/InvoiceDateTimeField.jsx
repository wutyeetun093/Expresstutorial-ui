import React from 'react';
import { DatePicker, FormGroup } from 'rsuite';
import { Field as ReduxField } from 'redux-form';
import PropTypes from 'prop-types';
import styles from './BookingDateTimeField.module.scss';

const renderField = fields => {
  const { dateTimeFormat, input } = fields;

  return (
    <FormGroup>
      <DatePicker
        oneTap
        className={styles.dateTimeInput}
        {...input}
        format={dateTimeFormat}
      />
    </FormGroup>
  );
};

const InvoiceDateTimeField = ({ dateTimeFormat, name, type, id, ...rest }) => (
  <ReduxField
    {...rest}
    name={name}
    type={type}
    id={id}
    dateTimeFormat={dateTimeFormat}
    component={renderField}
  />
);

InvoiceDateTimeField.propTypes = {
  dateTimeFormat: PropTypes.string,
};

InvoiceDateTimeField.defaultProps = {
  dateTimeFormat: 'MMM DD YYYY HH:mm A ',
};
export default InvoiceDateTimeField;
