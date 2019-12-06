import React from 'react';
import { Tag, TagGroup, IconButton, Input, Icon } from 'rsuite';
// import { Field as ReduxField } from 'redux-form';
// import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './DynamicTagsPicker.module.scss';

export default class DynamicTagsPicker extends React.Component {
  state = {
    typing: false,
    inputValue: '',
    tags: [],
  };

  handleButtonClick = () => {
    this.setState(
      {
        typing: true,
      },
      () => {
        this.input.focus();
      }
    );
  };

  handleInputChange = inputValue => {
    this.setState({ inputValue });
  };

  handleInputConfirm = () => {
    const { inputValue, tags } = this.state;
    const nextTags = inputValue ? [...tags, inputValue] : tags;
    this.setState({
      tags: nextTags,
      typing: false,
      inputValue: '',
    });
  };

  handleTagRemove = tag => {
    const { tags } = this.state;
    const nextTags = tags.filter(item => item !== tag);
    this.setState({
      tags: nextTags,
    });
  };

  renderInput() {
    const { typing, inputValue } = this.state;

    if (typing) {
      return (
        <Input
          className="tag-input"
          inputRef={ref => {
            this.input = ref;
          }}
          size="xs"
          style={{ width: 70 }}
          value={inputValue}
          onChange={this.handleInputChange}
          onBlur={this.handleInputConfirm}
          onPressEnter={this.handleInputConfirm}
        />
      );
    }

    return (
      <IconButton
        className="tag-add-btn"
        onClick={this.handleButtonClick}
        icon={<Icon icon="plus" />}
        appearance="ghost"
        size="xs"
      />
    );
  }

  render() {
    const { tags } = this.state;
    return (
      <TagGroup className={styles.tagGroup}>
        {tags.map((item, index) => (
          <Tag
            style={{ margin: 2 }}
            key={_.uniqueId()}
            closable
            onClose={() => {
              this.handleTagRemove(item);
            }}
          >
            {item}
          </Tag>
        ))}
        {this.renderInput()}
      </TagGroup>
    );
  }
}
