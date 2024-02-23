export default function ProjectItem({ projectId, project, handleSelect, selectedProject }) {
    return (
        <li key={projectId}>
            <button
                onClick={() => handleSelect(projectId)}
                className={projectId === selectedProject ? "active: bg-slate-800" : undefined}>{project.title}</button>
        </li>
    )
}