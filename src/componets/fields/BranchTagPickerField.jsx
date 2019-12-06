import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Field } from 'redux-form';
import { FormGroup, ControlLabel, HelpBlock, TagPicker } from 'rsuite';
import { required } from './validation';

const InputComponet = ({
  componentClass,
  label,
  field,
  type,
  branchdata,
  meta: { touched, error },
  input,
  ...props
}) => {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <TagPicker
        defaultValue={input.value}
        data={branchdata}
        {...props}
        placeholder="Branches"
        onChange={input.onChange}
        block
      />

      {touched && error && (
        <HelpBlock style={{ color: 'red' }}>{error}</HelpBlock>
      )}
    </FormGroup>
  );
};

const BranchTagPickerField = props => {
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
    authUser,
  };
};

export default connect(
  mapStateToProps,
  null
)(BranchTagPickerField);
