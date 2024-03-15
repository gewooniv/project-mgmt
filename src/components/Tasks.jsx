import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTasks, onDeleteTasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTasks={onAddTasks} onDeleteTasks={onDeleteTasks} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">This project is lacking tasks.</p>
      )}
      {tasks.length > 0 && (
        <ul className="p-2 mt-4 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-2">
              <span>{task.text}</span>
              <button
                onClick={() => onDeleteTasks(task.id)}
                className="text-stone-700 hover:text-red-600"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
