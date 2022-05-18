import React, { useEffect, useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/task")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [tasks]);

  const handleDelete =(id)=>{
    const url = `http://localhost:5000/task/${id}`
    
    fetch(url, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        const remaining = tasks.filter(task => task._id !== id);
        setTasks(remaining);
    })
}



  return (
    <div className="bg-green-300 p-20 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-xl text-center font-semibold mb-5">Your Task</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Complete</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <>
                <tr>
                  <td>{task.task}</td>
                  <td>
                    <input
                      className="ml-5"
                      type="checkbox"
                      name="complete"
                      id=""
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="btn-sm btn-primary"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;
