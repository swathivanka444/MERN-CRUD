import React, {useState} from "react";
import { Link,useNavigate } from "react-router-dom";
export default function Login() {
  const [errorMessage,setErrorMessage]=useState("");
  const navigate=useNavigate();
  const sectionStyle = {
    backgroundColor: "#9A616D",
  };

  const imgStyle = {
    borderRadius: "1rem 0 0 1rem",
  };

  const [inputval, setInputval] = useState({
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    setInputval({ ...inputval, [e.target.name]: e.target.value })
}
  const LoginUserData = async (e) => {
    console.log("inputVal",inputval)
    e.preventDefault();
    const res = await fetch("https://tasksappcrud.onrender.com/LoginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputval)
    });

    const data = await res.json();
    console.log('reslogin',data)
    if (res.status === 200) {
      navigate('/home',{replace:true})
    }
    else if(res.status==401)
    {

      setErrorMessage('Incorrect Password')
    }
    else if(res.status==400)
    {

      setErrorMessage('User does not exist!')
    }
    else {

      setErrorMessage('Log In Failed')
    }
  }
  return (
    <section className="vh-100" style={sectionStyle}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={imgStyle}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                        
                      </div>
      
                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example17" className="form-control form-control-lg"  name="email" onChange={handleChange} value={inputval.email}/>
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example27" className="form-control form-control-lg" name="password" onChange={handleChange} value={inputval.password}/>
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>
                      <p style={{ color: "#DA2517" }}>{errorMessage}</p>
                      <div className="pt-1 mb-4">
                        <Link className="btn btn-dark btn-lg btn-block" to='/home' onClick={LoginUserData}> 
                        Login
                        </Link> 
                      </div>
                      
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account? <a href="/signup" style={{ color: "#393f81" }}>Register here</a>
                      </p>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
