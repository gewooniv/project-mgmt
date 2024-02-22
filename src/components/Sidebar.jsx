export default function Sidebar({ onCreate, projects }) {
    return (
        <div className="text-center">
        <h1 className="my-8 text-center text-3xl font-bold">Sidebar</h1>
        <div className="pb-4"><button onClick={onCreate}>Add project</button></div>
        {projects.map((project) => (
            <li key={project.id}>{project.title}</li>
        ))}
        </div>
    )
}