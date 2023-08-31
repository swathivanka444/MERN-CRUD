import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Signup() {
  const navigate=useNavigate();
  const [errorMessage,setErrorMessage]=useState("");
  const [inputval, setInputval] = useState({
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    setInputval({ ...inputval, [e.target.name]: e.target.value })
}

const isEmailValid = (email) => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
  const addUserData = async (e) => {
    console.log("inputVal",inputval)
    e.preventDefault();
    if (inputval.email && !isEmailValid(inputval.email)) {
      setErrorMessage("Invalid Email Address");
      return;
    }else{
    if(inputval && inputval.email && inputval.password)
    {
    const res = await fetch("https://tasksappcrud.onrender.com/AddUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputval)
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      alert("Error")
    }
    else {
      console.log("User Added");
      navigate('/',{replace:true})
    }
  }
  else if(inputval.email && !inputval.password)
  {
setErrorMessage('Please Enter Password');
  }else if(!inputval.email && inputval.password)
  {
    setErrorMessage('Please Enter Email');
  }
  else if(!inputval.email && !inputval.password)
  {
    setErrorMessage('Please Enter Email & Password');
  }
  else{
    console.log('no error')
  }
}
  }
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <label className="form-label" htmlFor="form1Example13">
                Email address<span style={{ color: "#DA2517" }}>*</span>
              </label>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  name="email" onChange={handleChange} value={inputval.email}
                  
                />

              </div>
              <label className="form-label" htmlFor="form1Example23">
                Password<span style={{ color: "#DA2517" }}>*</span>
              </label>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  name="password" onChange={handleChange} value={inputval.password}
                />
              </div>
              <p style={{ color: "#DA2517" }}>{errorMessage}</p>
              <Link className="btn btn-primary btn-lg btn-block" to="/" onClick={addUserData}>Sign Up</Link>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup