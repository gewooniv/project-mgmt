import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleCreate() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancel() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    const projectId = projectsState.projects.length;

    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: projectId,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelect(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  return (
    <>
      <main className="flex flew-row my-8">
        <div className="basis-1/3">
          <Sidebar
            projectsState={projectsState}
            onCreate={handleCreate}
            onSelect={handleSelect}
          />
        </div>
        <div className="basis-2/3">
          <Content
            projectsState={projectsState}
            onCreate={handleCreate}
            onCancel={handleCancel}
            handleAddProject={handleAddProject}
          />
        </div>
      </main>
    </>
  );
}

export default App;
