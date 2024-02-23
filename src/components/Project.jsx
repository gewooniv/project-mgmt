export default function Project({ project }) {
    return (
        <div className="" id="content">
            <h1>{project.title}</h1>
            <p>{project.dueDate}</p>
            <hr className="py-2"/>
            <p>{project.description}</p>
        </div>
    )
}