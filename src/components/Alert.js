
//   return (
//     <div style={{height : '50px' }}>
//     {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
//     <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
//     </div>}
//     </div>
//   )
// }

import React from 'react';

function Alert(props) {
  const capitalize = (word) => {
    let capFirstword = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return capFirstword;
  }

  return (
    <div style={{ height: '50px' }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          {props.alert.type === 'danger' ? (
            <strong>{capitalize(props.alert.msg)}</strong> // Display only the message for 'danger' type
          ) : (
            <>
              <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Alert;
