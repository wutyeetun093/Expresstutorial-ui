import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Field as ReduxField } from 'redux-form';
import { FormGroup, ControlLabel, HelpBlock, SelectPicker } from 'rsuite';
import { getRegions } from '../../services/region/regionAction';
import { required } from './validation';

const InputComponet = ({
  componentClass,
  label,
  field,
  type,
  id,
  meta: { touched, error },
  input,
  ...props
}) => {
  const { regiondata } = props;

  return (
    <FormGroup className="my-3">
      <ControlLabel>{label}</ControlLabel>
      <SelectPicker
        data={regiondata}
        {...props}
        {...input}
        placeholder="Regions"
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

const RegionTagPickerField = props => {
  useEffect(() => {
    const getAllRegions = props.getRegions;
    getAllRegions({ page: 0, size: 10 });
  }, [props.getRegions]);
  const {
    label,
    name,
    componentClass,
    placeholder,
    type,
    regiondata,
    isRequired,
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
      regiondata={regiondata}
      validate={validate}
    />
  );
};

const mapStateToProps = ({ regions }) => {
  return {
    regiondata: _.map(regions.data, region => ({
      label: region && region.name,
      value: region && region.id,
    })),
  };
};

export default connect(
  mapStateToProps,
  { getRegions }
)(RegionTagPickerField);
