import { useState } from 'react';
import ProjectItem from './ProjectItem';

export default function Sidebar({ onCreate, projects }) {
    const [ selectedProject, setSelectedProject ] = useState();

    function handleSelect(id) {
        setSelectedProject(id);
        console.log(id)
    }

    return (
        <div className="h-screen px-8 py-16 bg-stone-900 text-stone-50 md:w-72 text-center rounded-r-xl">
            <h1 className="my-8 text-center text-3xl font-bold">Sidebar</h1>
            <div className="pb-4">
                <button onClick={onCreate}>Add project</button>
            </div>
            <ul>
                {projects.map((project) => (
                    <ProjectItem id={project.id} project={project} handleSelect={handleSelect} />
                ))}
            </ul>
        </div>
    )
}