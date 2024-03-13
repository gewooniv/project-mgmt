export default function ProjectItem({
  project,
  selectedProjectId,
  handleSelect,
}) {
  return (
    <li>
      <button
        onClick={() => handleSelect(project.id)}
        className={
          project.id === selectedProjectId
            ? "px-4 py-2 rounded-md active: bg-stone-800"
            : "px-4 py-2 rounded-md"
        }
      >
        {project.title}
      </button>
    </li>
  );
}
