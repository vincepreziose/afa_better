import React from 'react';
import {Link} from "react-router-dom";

const AdminSidebar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to="/admin">
              <span data-feather="home"></span>
              All Labs <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/lab/add">
              <span data-feather="file"></span>
              Add Lab
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather="users"></span>
              Delete Lab
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AdminSidebar;
