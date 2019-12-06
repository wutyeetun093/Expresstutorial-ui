import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Field } from 'redux-form';
import { FormGroup, ControlLabel, HelpBlock, TagPicker } from 'rsuite';
import { getItems } from '../../services/item/itemAction';
import { required } from './validation';

const InputComponet = ({
  componentClass,
  label,
  field,
  type,
  form: { touched, errors, setFieldValue },
  ...props
}) => {
  const { itemdata } = props;

  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <TagPicker
        data={itemdata}
        {...props}
        defaultValue={field.value}
        placeholder="Menus"
        onChange={value => {
          setFieldValue(field.name, value);
        }}
        block
      />

      {touched[field.name] && errors[field.name] && (
        <HelpBlock style={{ color: 'red' }}>{errors[field.name]}</HelpBlock>
      )}
    </FormGroup>
  );
};

const ItemTagPickerField = props => {
  useEffect(() => {
    const getAllItems = props.getItems;
    getAllItems(props.authUser.defaultBranch.id);
  }, [props.getItems, props.authUser.defaultBranch.id]);
  const {
    label,
    name,
    componentClass,
    placeholder,
    type,
    itemdata,
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
      menudata={itemdata}
      validate={validate}
    />
  );
};

const mapStateToProps = ({ items }) => {
  return {
    itemdata: _.map(items.data, item => ({
      label: item && item.name,
      value: item && item.id,
    })),
  };
};

export default connect(
  mapStateToProps,
  { getItems }
)(ItemTagPickerField);
