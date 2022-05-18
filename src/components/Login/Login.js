import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../firebase.init'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const location = useLocation();
      const navigate = useNavigate();

      let from = location.state?.from?.pathname || "/";

      if (user) {
        navigate(from, { replace: true });
      }

      let errorMessage;
      if (error) {
        errorMessage = <p className="text-red-500">{error?.message}</p>;
      }

      if(loading){
        return <p>Loading...</p>;
      }

    const handleLogin =(e)=>{
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        signInWithEmailAndPassword(email, password);
    }

  return (
    <div className='flex h-screen justify-center items-center'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login</h2>
            <form onSubmit={handleLogin}>
            <input
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered w-full max-w-xs mt-5"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered w-full max-w-xs my-3"
          />
          {errorMessage}
          <input
            type="submit"
            value="Login"
            className="btn btn-primary w-full"
          />
            </form>
          <p>New here? <Link className="text-primary" to="/register">SignUp</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
