import ProjectItem from "./ProjectItem";

export default function Sidebar({ projectsState, onCreate, onSelect }) {
  return (
    <div className="px-8 py-16 bg-stone-900 text-stone-50 md:w-72 text-center rounded-r-xl">
      <h1 className="my-8 text-center text-3xl font-bold uppercase">Sidebar</h1>
      <div className="pb-4">
        <button
          className="px-4 py-2 text-xs rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          onClick={onCreate}
        >
          + Add project
        </button>
      </div>
      <ul className="mt-6">
        {projectsState.projects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            onSelect={onSelect}
            selectedProjectId={projectsState.selectedProjectId}
          />
        ))}
      </ul>
    </div>
  );
}
