export default function ProjectItem({ projectId, project, handleSelect, selectedProject }) {
    return (
        <li key={projectId}>
            <button
                onClick={() => handleSelect(projectId)}
                className={projectId === selectedProject ? "px-4 py-2 rounded-md active: bg-stone-800" : "px-4 py-2 rounded-md"}>{project.title}</button>
        </li>
    )
}