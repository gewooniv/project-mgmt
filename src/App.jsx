import { useState, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  const [ projects, setProjects ] = useState([]);
  const [ isCreating, setIsCreating ] = useState(false);
  const input = useRef();

  function createProject() {
    setIsCreating(true);
  }

  function handleSave() {
    const projectId = projects.length

    setProjects([
        ...projects, {
        id: projectId,
        title: input.current.value,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
        <Content isCreating={isCreating} projects={projects} onCreate={createProject} handleSave={handleSave} selectedProject={selectedProject} input={input} />
      </div>
    </main>
    </>
  );
}

export default App;
