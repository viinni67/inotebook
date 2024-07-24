import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
const Signup = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add password confirmation validation
    if (credentials.password !== credentials.cpassword) {
      alert("Password and confirm password do not match.");
      return;
    }

    const response = await fetch("http://localhost:3005/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.token);
      history.push("/login");
    } else {
      alert("User already exists or some other error occurred.");
    }
  }

  const onchange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  }
  return (
    <section className="vh-100" >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" name='name' className="form-control"  placeholder="Enter name"  onChange={onchange} required />
                          <label className="form-label" htmlFor="form3Example1c" >Your Name</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" name='email' className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" onChange={onchange}  required/>
                          <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input input type="password" name='password' className="form-control"  placeholder="Password"  onChange={onchange} minLength={10} required />
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" name='cpassword' className="form-control"  placeholder="confirm Password" onChange={onchange}  minLength={10} required />
                          <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree all statements in <a href="/about us">Terms of service</a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">Register</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div className='conatainer'>
    //   <form onSubmit={handleSubmit}>
    //   <div className="form-group">
    //       <label htmlFor="exampleInputEmail1">Name</label>
    //       <input type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  onChange={onchange} required/>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="exampleInputEmail1">Email address</label>
    //       <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={onchange}  required/>
    //       <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="exampleInputPassword1">Password</label>
    //       <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="Password"  onChange={onchange} minLength={10} required/>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="exampleInputPassword1">confirm Password</label>
    //       <input type="password" name='cpassword' className="form-control" id="exampleInputPassword1" placeholder="confirm Password" onChange={onchange}  minLength={10} required />
    //     </div>
    //     <button type="submit" className="btn btn-primary">Submit</button>
    //   </form>

    // </div>
  )
}

export default Signup