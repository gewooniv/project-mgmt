import { useState, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const input = useRef();

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
            title: input.current.value,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            dueDate: "2/22/2024",
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
            input={input}
          />
        </div>
      </main>
    </>
  );
}

export default App;
