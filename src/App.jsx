import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  const [ projects, setProjects ] = useState([]);
  const [ isCreating, setIsCreating ] = useState(false);

  function createProject() {
    setIsCreating(true);
  }

  function handleSave() {
    const projectId = projects.length

    setProjects([
        ...projects, {
        id: projectId,
        title: 'Project ' + projectId,
        description: 'Description',
        dueDate: '2/22/2024'
        }
    ]);

    setIsCreating(false);
  }

  const [ selectedProject, setSelectedProject ] = useState();

  function handleSelect(id) {
      setSelectedProject(id);
  }

  return (
    <>
    <main className="flex flew-row my-8">
      <div className="basis-1/3">
        <Sidebar isCreating={isCreating} projects={projects} onCreate={createProject} handleSelect={handleSelect} selectedProject={selectedProject} />
      </div>
      <div className="basis-2/3">
        <Content isCreating={isCreating} projects={projects} onCreate={createProject} handleSave={handleSave} selectedProject={selectedProject} />
      </div>
    </main>
    </>
  );
}

export default App;
