import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Home = () => {

    const [user] = useAuthState(auth);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const task = e.target.task.value
        const description = e.target.description.value
        console.log(task, description);
    }

    const logout =()=>{
        signOut(auth);
    }

  return (
    <div className="bg-red-100 rounded-lg">
      <h2 className="text-4xl text-center font-bold mt-10 p-4">TODO APP</h2>
      <span className="flex justify-center"><span className="text-xl mt-2">{user?.displayName}</span>{user? <button onClick={logout} className="btn btn-link">LogOut</button> : <p>ok</p> }</span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-5">
        <div className="bg-green-300 p-20 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-xl text-center font-semibold mb-5">Your Task</h2>
          <ul className="list-disc">
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
          </ul>
        </div>

        {/* add task start here */}
        <div className="bg-red-500 p-20 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-xl text-center font-semibold mb-5">Add your task</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Task name
              </label>
              <input
                name="task"
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                required
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Task Description
              </label>
              <textarea
                name="description"
                type="textarea"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Description"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-5 w-full">Add Task</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
