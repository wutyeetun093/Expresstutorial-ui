import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Field as ReduxField } from 'redux-form';
import { FormGroup, ControlLabel, HelpBlock, TagPicker } from 'rsuite';
import { getBranches } from '../../services/branch/branchAction';
import { required } from './validation';
import { getBusinessTags } from '../../services/tag/TagAction';

const renderField = ({
  label,
  field,
  tagData,
  input,
  meta: { touched, error },
  ...props
}) => {
  return (
    <FormGroup className="mt-2">
      <ControlLabel>{label}</ControlLabel>
      <TagPicker
        data={tagData}
        {...props}
        defaultValue={input.value}
        placeholder="Tags"
        onChange={input.onChange}
        onSearch={value => {
          props.getBusinessTags(
            props.authUser &&
              props.authUser.business &&
              props.authUser.business.id,
            {
              name: value,
            }
          );
        }}
        block
        style={{ border: 'none' }}
      />

      {touched && error && (
        <HelpBlock style={{ color: 'red' }}>
          {touched && error ? `* ( ${error} )` : undefined}
        </HelpBlock>
      )}
    </FormGroup>
  );
};

const BookingTagPickerField = props => {
  useEffect(() => {
    const getTags = props.getBusinessTags;
    getTags(props.authUser.business.id);
  }, [props.getBusinessTags, props.authUser.business.id]);
  const {
    label,
    name,
    componentClass,
    placeholder,
    type,
    tagData,
    isRequired,
  } = props;

  const validate = [];
  if (isRequired) {
    validate.push(required);
  }

  return (
    <ReduxField
      name={name}
      type={type}
      component={renderField}
      label={label}
      componentClass={componentClass}
      placeholder={placeholder}
      tagData={tagData}
      validate={validate}
    />
  );
};

const mapStateToProps = ({ tags }) => {
  return {
    tagData: _.map(tags.data, tag => ({
      label: tag && tag.name,
      value: tag && tag.name,
    })),
  };
};

export default connect(
  mapStateToProps,
  { getBranches, getBusinessTags }
)(BookingTagPickerField);
