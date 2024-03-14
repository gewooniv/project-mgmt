export default function ProjectItem({ project, selectedProjectId, onSelect }) {
  return (
    <li>
      <button
        onClick={() => onSelect(project.id)}
        className={
          project.id === selectedProjectId
            ? "w-full px-4 py-2 rounded-md active: bg-stone-800"
            : "w-full px-4 py-2 rounded-md text-stone-400 hover:text-stone-200 hover:bg-stone-800"
        }
      >
        {project.title}
      </button>
    </li>
  );
}
