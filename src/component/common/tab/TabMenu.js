import React, { Component } from "react";

import MenuTemplate from "component/common/template/MenuTemplate";

class TabBtn extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

class TabMenu extends Component {
  static defaultProps = {
    className: ""
  };
  render() {
    return (
      <MenuTemplate
        className={"TabMenu " + this.props.className}
        items={this.props.items}
        itemComponent={TabBtn}
        itemOnClickFunc={this.props.onClickFunc}
      ></MenuTemplate>
    );
  }
}

export default TabMenu;
