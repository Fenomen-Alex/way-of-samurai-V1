import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }
  toggleStatus = () => {
    this.setState({editMode: !this.state.editMode})
  }

  handleFocus = (event) => {
    event.target.select();
  }

  render() {
    return (
      <>
        {
          !this.state.editMode &&
          <div>
            <span onDoubleClick={ () => {this.toggleStatus()} }>{this.props.status}</span>
          </div>
        }
        {
          this.state.editMode && <div>
            <input onFocus={this.handleFocus} autoFocus onBlur={ () => {this.toggleStatus()}} value={this.props.status}/>
          </div>
        }
      </>
    );
  }

}

export default ProfileStatus;
