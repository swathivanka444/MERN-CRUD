import React from "react";
export default function AddTask() {
    return (
        <div className="container mt-5">
            <form className="mx-auto">
                <div class="mb-3 w-50">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
            </form>
        </div>
    )
}