import React from "react";

const Home = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        const task = e.target.task.value
        const description = e.target.description.value
        console.log(task, description);
    }

  return (
    <div>
      <h2 className="text-4xl text-center font-bold mt-10 p-4">TODO APP</h2>
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
                for="first_name"
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
                for="last_name"
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
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">Add Task</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
