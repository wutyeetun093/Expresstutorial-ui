import React from "react";
import { connect } from "react-redux";
import { IconButton, Icon, Input, InputGroup } from "rsuite";
import FashionCreateModal from "./FashionCreateModal";

class FashionActionBar extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState(prevState => ({
      ...prevState,
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="d-flex justify-content-end my-3 mr-3">
        {/* <InputGroup style={{ width: 200 }}>
          <Input onChange={this.onSearchChange} placeholder="Search..." />
          <InputGroup.Addon>
            <Icon icon="search" />
          </InputGroup.Addon>
        </InputGroup> */}
        <IconButton
          icon={<Icon icon="plus" />}
          color="cyan"
          size="md"
          circle
          className="ml-2"
          onClick={this.toggle}
        />
        <FashionCreateModal isShow={isOpen} onClose={this.toggle} />
      </div>
    );
  }
}

export default FashionActionBar;
