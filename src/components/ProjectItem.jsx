export default function Project({ id, project, handleSelect, selectedProject }) {
    return (
        <li key={id}>
            <button 
                onClick={() => handleSelect(id)}
                className={id === selectedProject ? "active: bg-slate-800" : undefined}>{project.title}</button>
        </li>
    )
}