import React from 'react';
import { FormGroup, ControlLabel, HelpBlock, TagPicker } from 'rsuite';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { required } from './validation';
import { getAuthorities } from '../../services/authorityRole/authorityRoleAction';

class AuthorityField extends React.Component {
  componentDidMount() {
    this.props.getAuthorities();
  }

  renderField = fields => {
    const {
      placeholder,
      disabled,
      input,
      meta: { touched, error },
      id,
      label,
      options,
    } = fields;

    return (
      <FormGroup className="mt-4">
        {touched && error && (
          <HelpBlock style={{ color: 'red' }}>
            {touched && error ? `* ( ${error} )` : undefined}
          </HelpBlock>
        )}

        <ControlLabel htmlFor={id}>{label}</ControlLabel>
        <TagPicker
          placeholder={placeholder}
          disabled={disabled}
          defaultValue={input.value}
          onChange={input.onChange}
          data={options}
          block
        />
      </FormGroup>
    );
  };

  render() {
    const { label, name, id, isRequired, authorities } = this.props;
    const options = _.map(authorities, (authority, index) => {
      return {
        key: index,
        label: _.startCase(_.lowerCase(_.trimStart(authority, 'ROLE_'))),
        value: authority,
      };
    });
    const validate = [];
    if (isRequired) {
      validate.push(required);
    }
    return (
      <Field
        component={this.renderField}
        name={name}
        id={id}
        label={label}
        validate={validate}
        options={options}
      />
    );
  }
}

AuthorityField.propTypes = {
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
};

AuthorityField.defaultProps = {
  isRequired: false,
};

const mapStateToProps = ({ authorities }) => ({
  authorities: authorities.data,
  isPending: authorities.isPending,
});

export default connect(
  mapStateToProps,
  { getAuthorities }
)(AuthorityField);
