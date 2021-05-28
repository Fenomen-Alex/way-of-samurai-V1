import React, {useState} from 'react';

const ProfileStatusWithHooks = props => {
  const { editMode, setEditMode } = useState(false);
  const { status, setStatus } = useState(props.status)

   const toggleStatus = () => {
    setEditMode({editMode: !editMode});
    props.updateStatus(status);
  }

  const handleFocus = (event) => {
    event.target.select();
  }
  const onStatusChange = (e) => {
    setStatus({ status: e.currentTarget.value })
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (prevProps.status !== this.props.status) {
  //     this.setState({
  //       status: this.props.status
  //     });
  //   }
  // }


    return (
      <>
        {
          !editMode &&
          <div>
            <span
              onDoubleClick={ () => {toggleStatus()} }
            >
              {props.status || "-----"}
            </span>
          </div>
        }
        {
          this.state.editMode && <div>
            <input
              onChange={onStatusChange}
              onFocus={handleFocus}
              autoFocus
              onBlur={ () => {toggleStatus()}}
              value={status}
            />
          </div>
        }
      </>
    );

}

export default ProfileStatusWithHooks;
