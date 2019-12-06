import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Field as ReduxField } from 'redux-form';
import { FormGroup, ControlLabel, HelpBlock, SelectPicker } from 'rsuite';
import _ from 'lodash';
import { required } from './validation';
import { getTicketTypes } from '../../services/tickets/ticketAction';

const InputComponet = ({
  componentClass,
  label,
  field,
  type,
  id,
  meta: { touched, error },
  input,
  ticketTypeData,
  ...props
}) => {
  return (
    <FormGroup className="my-3">
      <ControlLabel>{label}</ControlLabel>
      <SelectPicker
        data={ticketTypeData}
        {...props}
        {...input}
        placeholder="Ticket Types"
        searchable={false}
        cleanable={false}
        block
      />

      {touched && error && (
        <HelpBlock style={{ color: 'red' }}>{error}</HelpBlock>
      )}
    </FormGroup>
  );
};

const TicketTypeField = props => {
  useEffect(() => {
    const getAllTicketTypes = props.getTicketTypes;
    getAllTicketTypes();
  }, [props.getTicketTypes]);

  const {
    label,
    name,
    componentClass,
    placeholder,
    type,
    isRequired,
    ticketTypeData,
  } = props;
  const validate = [];
  if (isRequired) {
    validate.push(required);
  }
  // const valid = value => customFieldValidation(value, validate);
  return (
    <ReduxField
      name={name}
      type={type}
      component={InputComponet}
      label={label}
      componentClass={componentClass}
      placeholder={placeholder}
      ticketTypeData={ticketTypeData}
      validate={validate}
    />
  );
};

const mapStateToProps = ({ tickets }) => {
  return {
    ticketTypeData: _.map(tickets.types, type => ({
      label: type && _.startCase(type),
      value: type && type,
    })),
  };
};

export default connect(
  mapStateToProps,
  { getTicketTypes }
)(TicketTypeField);
