import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field as ReduxField, change } from 'redux-form';
import { FormGroup, ControlLabel, Input } from 'rsuite';
import { required, phoneNumber, maxLength255 } from './validation';
import { getAllCustomers } from '../../services/customer/customerAction';

class CustomerPhoneNumberField extends React.Component {
  renderField = fields => {
    const { customers } = this.props;
    const {
      componentClass,
      label,
      placeholder,
      disabled,
      id,
      input,
      type,
      name,
      meta: { touched, error, form },
      readOnly,
      style,
      labelColor,
    } = fields;
    return (
      <FormGroup className="pt-3 m-0" style={style}>
        <ControlLabel htmlFor={id} style={{ color: labelColor }}>
          {label}
          <span style={{ color: 'red', fontSize: 10 }}>
            {touched && error && ` * ( ${error} )`}
          </span>
        </ControlLabel>

        <Input
          {...input}
          componentClass={componentClass}
          type={type}
          onChange={value => {
            this.props.getAllCustomers({ filter: value });
            input.onChange(value);
            const c = _.map(customers);

            if (c.length === 1) {
              const getCustomer = c[0];
              if (value === getCustomer.phoneNumber) {
                this.props.change(form, 'fullName', getCustomer.fullName);
                this.props.change(form, 'email', getCustomer.email);
              }
            }
          }}
          value={input.value}
          placeholder={placeholder}
          name={name}
          id={id}
          disabled={disabled}
          readOnly={readOnly}
          style={{ minWidth: 0 }}
        />
      </FormGroup>
    );
  };

  render() {
    const {
      isRequired,
      icon,
      label,
      name,
      type,
      id,
      customers,
      componentClass,
      validatePhoneNumber,
      ...rest
    } = this.props;
    const validate = [maxLength255];
    if (isRequired) {
      validate.push(required);
    }

    if (validatePhoneNumber) {
      validate.push(phoneNumber);
    }

    return (
      <ReduxField
        {...rest}
        icon={icon}
        label={label}
        name={name}
        type={type}
        componentClass={componentClass}
        id={id}
        component={this.renderField}
        validate={validate}
      />
    );
  }
}

CustomerPhoneNumberField.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
};

CustomerPhoneNumberField.defaultProps = {
  disabled: false,
  isRequired: false,
};

const mapStateToProps = ({ customers }) => ({
  customers: customers.data,
});

export default connect(
  mapStateToProps,
  { getAllCustomers, change }
)(CustomerPhoneNumberField);
