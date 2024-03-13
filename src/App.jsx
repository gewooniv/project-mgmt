import { useState, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const inputTitle = useRef();
  const inputDescription = useRef();
  const inputDueDate = useRef();

  function handleCreate() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleSave() {
    const projectId = projectsState.projects.length;

    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
        projects: [
          ...prevState.projects,
          {
            id: projectId,
            title: inputTitle.current.value,
            description: inputDescription.current.value,
            dueDate: inputDueDate.current.value,
          },
        ],
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
            handleSelect={handleSelect}
          />
        </div>
        <div className="basis-2/3">
          <Content
            projectsState={projectsState}
            onCreate={handleCreate}
            handleSave={handleSave}
            inputTitle={inputTitle}
            inputDescription={inputDescription}
            inputDueDate={inputDueDate}
          />
        </div>
      </main>
    </>
  );
}

export default App;
