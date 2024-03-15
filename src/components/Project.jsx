import Tasks from "./Tasks";

export default function Project({
  project,
  tasks,
  onDelete,
  onAddTasks,
  onDeleteTasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[30rem] mt-16" id="content">
      <header className="pb-4 mb-4">
        <div className="flex items-center justify-between">
          <h1 className="my-4 text-stone-700 text-3xl font-bold">
            {project.title}
          </h1>
          <button
            onClick={onDelete}
            className="px-4 py-2 text-xs rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 hover:text-stone-100"
          >
            Delete
          </button>
        </div>
        <p className="text-stone-500 font-bold">{formattedDate}</p>

        <hr className="py-2" />
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <hr className="py-2" />
      <Tasks
        tasks={tasks}
        onAddTasks={onAddTasks}
        onDeleteTasks={onDeleteTasks}
      />
    </div>
  );
}
