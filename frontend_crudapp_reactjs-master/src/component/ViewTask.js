import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export default function ViewTask() {
  const { taskId } = useParams();
  const [data, setData] = useState({});
 console.log('taskId',taskId)
  useEffect(() => {
    axios
      .get(`http://localhost:4200/AllTasks?taskId=${taskId}`)
      .then((response) => {
        setData(response.data); // Assuming the API returns JSON data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [taskId]);

  return (
    <div className="container mt-5">
      <Link className="btn btn-primary" to="/home">
        Home
      </Link>
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item active mt-5" aria-current="true">
              Task Details
            </li>
            <li className="list-group-item">Title: {data.title}</li>
            <li className="list-group-item">Description: {data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
