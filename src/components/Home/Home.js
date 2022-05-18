import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import AddTask from "../AddTask/AddTask";
import Tasks from "../Tasks/Tasks";

const Home = () => {

    const [user] = useAuthState(auth);


    const logout =()=>{
        signOut(auth);
    }

  return (
    <div className="bg-red-100 rounded-lg">
      <h2 className="text-4xl text-center font-bold mt-10 p-4">TODO APP</h2>
      <span className="flex justify-center"><span className="text-xl mt-2">{user?.displayName}</span>{user? <button onClick={logout} className="btn btn-link">LogOut</button> : <p>ok</p> }</span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-5">
        <Tasks></Tasks>

        {/* add task start here */}
        <AddTask></AddTask>
      </div>
    </div>
  );
};

export default Home;
