import React from 'react';

const AdminHeader = ({ headerText, buttonText = null }) => {
  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
      <h1 className="h2">{ headerText }</h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group mr-2">
          { buttonText && <button className="btn btn-sm btn-outline-secondary">{buttonText}</button>}
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
