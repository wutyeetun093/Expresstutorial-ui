import React from 'react';
import { FormGroup, ControlLabel, SelectPicker, HelpBlock } from 'rsuite';
import PropTypes from 'prop-types';
import { Field, change } from 'redux-form';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  getAllCustomers,
  createCustomer,
  getOneCustomer,
  selectCustomer,
} from '../../services/customer/customerAction';
import { required } from './validation';

class CustomerField extends React.Component {
  // componentDidMount() {
  //   if (this.props.customerName) {
  //     this.props.getAllCustomers({ filter: this.props.customerName });
  //   }
  // }

  renderField = fields => {
    const {
      input,
      meta: { touched, error, form },
    } = fields;
    const { noLabel, id, label, options } = fields;

    return (
      <FormGroup className="pt-3 m-0">
        {!noLabel && <ControlLabel htmlFor={id}>{label}</ControlLabel>}
        {touched && error && (
          <HelpBlock style={{ color: 'red' }}>
            {touched && error ? `* ( ${error} )` : undefined}
          </HelpBlock>
        )}
        <SelectPicker
          block
          value={input.value}
          onSearch={value => {
            this.props.getAllCustomers({ filter: value });
          }}
          onChange={value => {
            input.onChange(value);
            const selectedCustomer = this.props.customers[value];
            this.props.change(
              form,
              this.props.fullNameField,
              (selectedCustomer && selectedCustomer.fullName) || ''
            );
            this.props.change(
              form,
              this.props.shippingAddressField,
              (selectedCustomer && selectedCustomer.shippingAddress) || ''
            );
          }}
          data={options}
          placeholder="Select Customer"
        />
      </FormGroup>
    );
  };

  render() {
    const {
      placeholder,
      label,
      name,
      id,
      isRequired,
      isPending,
      options,
      disabled,
    } = this.props;
    const validate = [];
    if (isRequired) {
      validate.push(required);
    }

    return (
      <Field
        component={this.renderField}
        name={name}
        disabled={disabled}
        validate={validate}
        placeholder={placeholder}
        label={label}
        id={id}
        isPending={isPending}
        options={options}
      />
    );
  }
}

CustomerField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
};

CustomerField.defaultProps = {
  label: 'Customer',
  placeholder: 'Customer',
  isRequired: false,
};

const mapStateToProps = ({ customers }) => ({
  isPending: customers.isPending,
  options: _.map(customers.data, customer => ({
    key: customer && customer.id,
    label: customer && customer.name,
    value: customer && customer.id,
  })),
  customers: customers.data,
});

export default connect(
  mapStateToProps,
  { getAllCustomers, createCustomer, getOneCustomer, selectCustomer, change }
)(CustomerField);
