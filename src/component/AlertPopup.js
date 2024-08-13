import React from 'react';

export default function AlertPopup(props) {
  if (props.alert === null) {
    return null;
  }

  return (
    <div>
      <div className='alert alert-secondary alert-dismissible fade show m-0 p-1 text-center' role="alert">
        <span className='h5 fw-bold'>{props.alert.type}: {props.alert.msg}</span>
        <button type="button" className="btn-close h6 p-2" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  );
}
