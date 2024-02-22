import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  const [ projects, setProjects ] = useState([{
    title: '1', 
    description: 'a', 
    dueDate: 'a'
    }, 
    {
    title: '2', 
    description: 'b', 
    dueDate: 'b'
    }
  ]);

  const [ isCreating, setIsCreating ] = useState(false);

  function createProject() {
    setIsCreating(true);
  }

  function handleSave() {
    setProjects({
        ...projects,
        title: 'test',
        description: 'test',
        dueDate: 'test'
    });
    console.log(projects);
    setIsCreating(false);
  }

  return (
    <>
    <div className="flex flew-row">
      <div className="basis-1/4"><Sidebar isCreating={isCreating} onCreate={createProject} projects={projects}/></div>
      <div className="basis-3/4"><Content isCreating={isCreating} onCreate={createProject} handleSave={handleSave} /></div>
    </div>
    </>
  );
}

export default App;
