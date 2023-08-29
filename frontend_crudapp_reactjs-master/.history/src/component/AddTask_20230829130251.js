import React from "react";
export default function AddTask() {
    return (
        <div className="container mt-5">
            <form className="mx-auto w-50 shadow">
                
                <div class="mb-3 ">
                    <label for="exampleInputEmail1" class="form-label">Title</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3 ">
                    <label for="exampleInputEmail1" class="form-label">Description</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button className="btn btn-primary">Add</button>
            </form> 
        </div>
    )
}