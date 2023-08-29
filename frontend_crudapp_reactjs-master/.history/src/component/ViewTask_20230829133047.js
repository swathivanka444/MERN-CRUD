import React from "react";
export default function ViewTask() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item active" aria-current="true">Task Details</li>
                        <li class="list-group-item">Title:</li>
                        <li class="list-group-item">Description:</li>
                        
                    </ul>

                </div>
            </div>
        </div>
    )
}