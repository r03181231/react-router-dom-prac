import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Works() {
  const navigate = useNavigate();
  const location = useLocation();
  //   console.log(location);

  return (
    <div>
      Works
      <br />
      <button onClick={() => navigate("/")}>HOME으로 이동</button>
      <Link to="/contact">Contact페이지로 이동</Link>
    </div>
  );
}

export default Works;
