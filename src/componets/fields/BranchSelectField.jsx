import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Field } from 'redux-form';
import { FormGroup, ControlLabel, HelpBlock, SelectPicker } from 'rsuite';
import { getBranches } from '../../services/branch/branchAction';
import { required } from './validation';

const InputComponet = ({
  componentClass,
  label,
  field,
  type,
  branchdata,
  id,
  meta: { touched, error },
  input,
  ...props
}) => {
  return (
    <FormGroup className="mt-3">
      <ControlLabel htmlFor={id}>{label}</ControlLabel>
      <SelectPicker
        data={branchdata}
        {...props}
        {...input}
        defaultValue={input.value}
        searchable={false}
        placeholder="Branches"
        block
      />

      {touched && error && (
        <HelpBlock style={{ color: 'red' }}>{error}</HelpBlock>
      )}
    </FormGroup>
  );
};

const BranchSelectField = props => {
  const {
    label,
    name,
    componentClass,
    placeholder,
    type,
    branchdata,
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
      branchdata={branchdata}
      validate={validate}
    />
  );
};

const mapStateToProps = ({ auth }) => {
  const authUser = auth.user;
  return {
    branchdata: _.map(authUser.branches, branch => ({
      label: branch && branch.name,
      value: branch && branch.id,
    })),
  };
};

export default connect(
  mapStateToProps,
  { getBranches }
)(BranchSelectField);
