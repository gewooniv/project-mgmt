import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTasks(text) {
    const taskId = projectsState.tasks.length;

    setProjectsState((prevState) => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTasks() {}

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

  function handleDelete() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId,
        ),
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
            onDelete={handleDelete}
            onAddProject={handleAddProject}
            onAddTasks={handleAddTasks}
            onDeleteTasks={handleDeleteTasks}
          />
        </div>
      </main>
    </>
  );
}

export default App;
