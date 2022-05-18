import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);
      const navigate = useNavigate();

    const handleRegister =async (e)=>{
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

    }

    if (user) {
        navigate('/');
    }

    return (
        <div className='flex h-screen justify-center items-center'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Create an Account</h2>
            <form onSubmit={handleRegister}>
            <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered w-full max-w-xs mt-5"
          />
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
          <input
            type="submit"
            value="Register"
            className="btn btn-primary w-full"
          />
            </form>
          <p>Already signup? <Link className="text-primary" to="/login">Login</Link></p>
        </div>
      </div>
    </div>
    );
};

export default Register;