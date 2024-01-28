import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { data } from "../shared/data";

function Works() {
  return (
    <div>
      <h1>할 일 목록</h1>
      <br />
      {data.map((todos) => {
        return (
          <div key={todos.id}>
            <ul>
              <li>
                <Link to={`/works/${todos.id}`}>{todos.todo}</Link>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Works;
