import React from 'react';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }
  toggleStatus = () => {
    this.setState({editMode: !this.state.editMode});
    this.props.updateStatus(this.state.status);
  }

  handleFocus = (event) => {
    event.target.select();
  }
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <>
        {
          !this.state.editMode &&
          <div>
            <span
              onDoubleClick={ () => {this.toggleStatus()} }
            >
              {this.props.status || "-----"}
            </span>
          </div>
        }
        {
          this.state.editMode && <div>
            <input
              onChange={this.onStatusChange}
              onFocus={this.handleFocus}
              autoFocus
              onBlur={ () => {this.toggleStatus()}}
              value={this.state.status}
            />
          </div>
        }
      </>
    );
  }

}

export default ProfileStatus;
