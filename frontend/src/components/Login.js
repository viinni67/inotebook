import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:3005/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json.token);
        //console.log(json);
        if (json.success) {
            console.log("sucess")
            localStorage.setItem('token', json.token);
            console.log(localStorage.getItem('token'))
            history.push("/");
        }
        else {
            alert('wrong credentials');
        }
    }

    const OnChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    }



    return (

        <div className="d-flex justify-content-center align-items-start vh-100 mt-5">
            <div className="col-sm-8 col-md-6 col-lg-4 border p-4 rounded shadow" style={{ minWidth: '25%' }}>
                <h1 className="text-center login-title mb-4">Sign in to continue to INotes</h1>
                <div className="account-wall">
                    <img
                    className="profile-img  rounded-circle container"
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt=""
                    style={{ width: '170px', height: '150px' ,marginLeft:'100px'} }
                /> 
                    <form className="form-signin" onSubmit={handleSubmit}>
                        <input
                            name="email"
                            type="email"
                            className="form-control my-3"
                            placeholder="Email"
                            id='email'
                            value={credentials.email}
                            onChange={OnChange}
                            required
                            autoFocus
                        />
                        <input
                            name="password"
                            type="password"
                            className="form-control mb-3"
                            placeholder="Password"
                            required
                            value={credentials.password}
                            onChange={OnChange}
                        />
                        <button
                            className="btn btn-lg btn-primary btn-block my-2"
                            type="submit"
                        >
                            Sign in
                        </button>
                        <div className="d-flex justify-content-between align-items-center mt-2">
                            <label className="checkbox">
                                <input type="checkbox" value="remember-me" />
                                Remember me
                            </label>
                            <a href="/about us" className="need-help">
                                Need help?
                            </a>
                        </div>
                    </form>
                </div>
                <a href="/signup" className="text-center new-account d-block mt-3">
                    Create an account
                </a>
            </div>
        </div>




        // <div>
        //     <form onSubmit={handleSubmit}>
        //         <div className="form-group">
        //             <label htmlfor="exampleInputEmail1">Email address</label>
        //             <input value={credentials.email} name='email' type="email"  className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"  onChange={OnChange}/>
        //                 <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        //         </div>
        //         <div className="form-group">
        //             <label htmlfor="exampleInputPassword1">Password</label>
        //             <input value={credentials.password}  name='password'  id='password' type="password" className="form-control"  onChange={OnChange}/>
        //         </div>

        //         <button type="submit" className="btn btn-primary my-1" >Submit</button>{' '}

        //     </form>
        //     <h2 id="help" className="form-text bold">do not have a account then sign up to make one </h2>



        //</div>
    )
}

export default Login