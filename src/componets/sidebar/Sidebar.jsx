import { useNavigate } from "react-router-dom";
import "./sidebar.css";

import Nav from "react-bootstrap/Nav";
import {
  FcHome,
  FcHighPriority,
  FcApproval,
  FcBusinessman,
  FcAdvertising,
} from "react-icons/fc";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <Nav  defaultActiveKey="/agencyhome" className="flex-column">
        <Nav.Link href="/agencyhome">
          <FcHome />
          <span className="d-none d-md-inline">Dashboard</span>
        </Nav.Link>
        <Nav.Link href="/Employeerequest">
          <FcHighPriority />
          <span className="d-none d-md-inline" style={{display:"inline"}}> Employee Request</span>
        </Nav.Link>
        <Nav.Link href="/approvedemployees">
          <FcApproval />
          <span className="d-none d-md-inline">Approved Employees</span>
        </Nav.Link>
        <Nav.Link href="#link">
          <FcBusinessman />
          <span className="d-none d-md-inline">Users</span>
        </Nav.Link>
        <Nav.Link href="/jobrequest">
          <FcAdvertising />

          <span className="d-none d-md-inline">Job Request</span>
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
