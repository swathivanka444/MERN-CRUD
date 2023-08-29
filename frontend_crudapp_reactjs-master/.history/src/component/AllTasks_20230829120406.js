import React, { useState, useEffect } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

 

function AllTasks() {

  const [cruds, setCruds] = useState([]);

 

  useEffect(function () {

    async function getCruds() {

      try {

        const response = await axios.get("/api/cruds");

        setCruds(response.data);

      } catch (error) {

        console.log("error", error);

      }

    }

    getCruds();

  }, []);

 

  return (

    <div className="container">

      <div>

        <h2>

          Tasks List

          <p>

            <Link to="/cruds/new" className="btn btn-primary float-right">

              Add Task

            </Link>

          </p>

        </h2>

        <hr />

      </div>

 

      <div className="table-responsive">

        <table className="table riped  table-hover table-bordered container">

          <thead>

            <tr>

              <th>Title</th>

              <th>Description</th>

              <th>Actions</th>

              <th>Mark as Completed</th>

            </tr>

          </thead>

          <tbody>

            {cruds &&

              cruds.map((crud) => {

                return (

                  <tr key={crud._id}>

                    <td>

                      <Link to={`/cruds/${crud._id}`} className="link-line">

                        {crud.companyName}

                      </Link>

                    </td>

                    <td>{crud.phone}</td>

 

                    <td>

                      <Link

                        to={`/cruds/${crud._id}`}

                        className="btn btn-warning act-buton"

                      >

                        View

                      </Link>

                      <Link

                        to={`/cruds/${crud._id}/edit`}

                        className="btn btn-success act-buton"

                      >

                        Edit

                      </Link>

                      <Link

                        to={`/cruds/${crud._id}/delete`}

                        className="btn btn-danger act-buton"

                      >

                        Delete

                      </Link>

                    </td>

                  </tr>

                );

              })}

          </tbody>

        </table>

      </div>

    </div>

  );

}

 

export default AllTasks;