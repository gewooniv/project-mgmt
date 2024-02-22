export default function Project({ id, project, handleSelect }) {
    return (
        <li key={id}>
            <button onClick={() => handleSelect(id)}>{project.title}</button>
        </li>
    )
}