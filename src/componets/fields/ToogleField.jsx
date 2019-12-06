import React from 'react';
import { Field } from 'redux-form';
import { FormGroup, ControlLabel, HelpBlock, Toggle } from 'rsuite';

const InputComponet = ({
  label,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors },
  ...props
}) => {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <Toggle
        {...field}
        {...props}
        defaultChecked={field.value}
        onChange={checked => {
          field.onChange(checked);
        }}
      />
      {touched[field.name] && errors[field.name] && (
        <HelpBlock style={{ color: 'red' }}>{errors[field.name]}</HelpBlock>
      )}
    </FormGroup>
  );
};

const ToogleField = props => {
  const { label, name, placeholder } = props;
  return (
    <Field
      name={name}
      component={InputComponet}
      label={label}
      placeholder={placeholder}
    />
  );
};

export default ToogleField;
