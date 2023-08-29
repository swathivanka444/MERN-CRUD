import React from "react";
export default function AllTasks() {
    return (
        <div className="container mt-5">
            <table class="table">
                <thead>
                    <tr className="bg-success">
                        
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                        <th scope="col">Mark as Completed  </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    )
}