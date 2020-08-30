import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    const { user } = this.props;
    if (!user) return null;

    return <h1 className="header">{user.name}</h1>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user.id === ownProps.userId)
});

export default connect(mapStateToProps)(UserHeader);
