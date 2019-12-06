import React from 'react';
// import { connect } from 'react-redux';
// import _ from 'lodash';
import { Field as ReduxField } from 'redux-form';
import { FormGroup, ControlLabel, HelpBlock, SelectPicker } from 'rsuite';
import { required } from './validation';

const dataSet = [
  {
    label: 'က',
    value: 'က',
  },
  {
    label: 'ခ',
    value: 'ခ',
  },
  {
    label: 'ဂ',
    value: 'ဂ',
  },
  {
    label: 'ဃ',
    value: 'ဃ',
  },
  {
    label: 'င',
    value: 'င',
  },
  {
    label: 'စ',
    value: 'စ',
  },
  {
    label: 'ဆ',
    value: 'ဆ',
  },
  {
    label: 'ဇ',
    value: 'ဇ',
  },
  {
    label: 'ဈ',
    value: 'ဈ',
  },
  {
    label: 'ည',
    value: 'ည',
  },
  {
    label: 'ဋ',
    value: 'ဋ',
  },
  {
    label: 'ဌ',
    value: 'ဌ',
  },
  {
    label: 'ဍ',
    value: 'ဍ',
  },
  {
    label: 'ဎ',
    value: 'ဎ',
  },
  {
    label: 'ဏ',
    value: 'ဏ',
  },
  {
    label: 'တ',
    value: 'တ',
  },
  {
    label: 'ထ',
    value: 'ထ',
  },
  {
    label: 'ဒ',
    value: 'ဒ',
  },
  {
    label: 'ဓ',
    value: 'ဓ',
  },
  {
    label: 'န',
    value: 'န',
  },
  {
    label: 'ပ',
    value: 'ပ',
  },
  {
    label: 'ဖ',
    value: 'ဖ',
  },
  {
    label: 'ဗ',
    value: 'ဗ',
  },
  {
    label: 'ဘ',
    value: 'ဘ',
  },
  {
    label: 'မ',
    value: 'မ',
  },
  {
    label: 'ယ',
    value: 'ယ',
  },
  {
    label: 'ရ',
    value: 'ရ',
  },
  {
    label: 'လ',
    value: 'လ',
  },
  {
    label: 'ဝ',
    value: 'ဝ',
  },
  {
    label: 'သ',
    value: 'သ',
  },
  {
    label: 'ဟ',
    value: 'ဟ',
  },
  {
    label: 'ဠ',
    value: 'ဠ',
  },
  {
    label: 'အ',
    value: 'အ',
  },
  {
    label: 'ကက',
    value: 'ကက',
  },
  {
    label: 'ကခ',
    value: 'ကခ',
  },
  {
    label: 'ကဂ',
    value: 'ကဂ',
  },
  {
    label: 'ကဃ',
    value: 'ကဃ',
  },
  {
    label: 'ကင',
    value: 'ကင',
  },
  {
    label: 'ကစ',
    value: 'ကစ',
  },
  {
    label: 'ကဆ',
    value: 'ကဆ',
  },
  {
    label: 'ကဇ',
    value: 'ကဇ',
  },
  {
    label: 'ကဈ',
    value: 'ကဈ',
  },
  {
    label: 'ကည',
    value: 'ကည',
  },
  {
    label: 'ကဋ',
    value: 'ကဋ',
  },
  {
    label: 'ကဌ',
    value: 'ကဌ',
  },
  {
    label: 'ကဍ',
    value: 'ကဍ',
  },
  {
    label: 'ကဎ',
    value: 'ကဎ',
  },
  {
    label: 'ကဏ',
    value: 'ကဏ',
  },
  {
    label: 'ကတ',
    value: 'ကတ',
  },
  {
    label: 'ကထ',
    value: 'ကထ',
  },
  {
    label: 'ကဒ',
    value: 'ကဒ',
  },
  {
    label: 'ကဓ',
    value: 'ကဓ',
  },
  {
    label: 'ကန',
    value: 'ကန',
  },
  {
    label: 'ကပ',
    value: 'ကပ',
  },
  {
    label: 'ကဖ',
    value: 'ကဖ',
  },
  {
    label: 'ကဗ',
    value: 'ကဗ',
  },
  {
    label: 'ကဘ',
    value: 'ကဘ',
  },
  {
    label: 'ကမ',
    value: 'ကမ',
  },
  {
    label: 'ကယ',
    value: 'ကယ',
  },
  {
    label: 'ကရ',
    value: 'ကရ',
  },
  {
    label: 'ကလ',
    value: 'ကလ',
  },
  {
    label: 'ကဝ',
    value: 'ကဝ',
  },
  {
    label: 'ကသ',
    value: 'ကသ',
  },
  {
    label: 'ကဟ',
    value: 'ကဟ',
  },
  {
    label: 'ကဠ',
    value: 'ကဠ',
  },
  {
    label: 'ကအ',
    value: 'ကအ',
  },
];

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
  // const { regiondata } = props;

  return (
    <FormGroup className="my-3">
      <ControlLabel>{label}</ControlLabel>
      <SelectPicker
        data={dataSet}
        {...props}
        {...input}
        placeholder="Alphabet"
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

const AlphabetPickerField = props => {
  // useEffect(() => {
  //   const getAllRegions = props.getRegions;
  //   getAllRegions({ page: 0, size: 10 });
  // }, [props.getRegions]);
  const {
    label,
    name,
    componentClass,
    placeholder,
    type,
    // regiondata,
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
      component={InputComponet}
      label={label}
      componentClass={componentClass}
      placeholder={placeholder}
      validate={validate}
    />
  );
};

// const mapStateToProps = ({ regions }) => {
//   return {
//     regiondata: _.map(regions.data, region => ({
//       label: region && region.name,
//       value: region && region.id,
//     })),
//   };
// };

// export default connect(
//   mapStateToProps,
//   { getRegions }
// )(AlphabetPickerField);

export default AlphabetPickerField;
