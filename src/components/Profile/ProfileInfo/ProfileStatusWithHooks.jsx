import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = props => {
  const [ editMode, setEditMode ] = useState(false);
  const [ status, setStatus ] = useState(props.status);

   const toggleStatus = () => {
     setEditMode(!editMode);
     props.updateStatus(status);
  }

  const handleFocus = (event) => {
    event.target.select();
  }
  const onStatusChange = (e) => {
    setStatus(e.target.value)
  }

  useEffect(() => {
    setStatus(props.status)
    }, [props.status]
  )

    return (
      <>
        {
          !editMode &&
          <div>
            <span
              onDoubleClick={ () => toggleStatus() }
            >
              {props.status || "-----"}
            </span>
          </div>
        }
        {
          editMode && <div>
            <input
              onChange={(e) => onStatusChange(e)}
              onFocus={(e) => handleFocus(e)}
              autoFocus
              onBlur={ () => toggleStatus()}
              value={status}
            />
          </div>
        }
      </>
    );

}

export default ProfileStatusWithHooks;
