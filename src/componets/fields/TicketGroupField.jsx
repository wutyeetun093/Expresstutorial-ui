import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { FormGroup, ControlLabel, HelpBlock, SelectPicker } from 'rsuite';
import _ from 'lodash';
import { required } from './validation';
import { getTicketGroups } from '../../services/tickets/ticketAction';

const InputComponet = ({
  componentClass,
  label,
  field,
  type,
  ticketGroupData,
  id,
  meta: { touched, error },
  input,
  ...props
}) => {
  return (
    <FormGroup className="mt-3">
      <ControlLabel htmlFor={id}>{label}</ControlLabel>
      <SelectPicker
        data={ticketGroupData}
        {...props}
        {...input}
        searchable={false}
        placeholder="Ticket Sets"
        cleanable={false}
        block
      />

      {touched && error && (
        <HelpBlock style={{ color: 'red' }}>{error}</HelpBlock>
      )}
    </FormGroup>
  );
};

const SetField = props => {
  useEffect(() => {
    const getAllTicketGroups = props.getTicketGroups;
    getAllTicketGroups();
  }, [props.getTicketGroups]);
  const {
    label,
    name,
    componentClass,
    placeholder,
    type,
    ticketGroupData,
    isRequired,
  } = props;
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
      ticketGroupData={ticketGroupData}
      validate={validate}
    />
  );
};

const mapStateToProps = ({ tickets }) => {
  return {
    ticketGroupData: _.map(tickets.groups, group => ({
      label: group && group,
      value: group && group,
    })),
  };
};

export default connect(
  mapStateToProps,
  { getTicketGroups }
)(SetField);
