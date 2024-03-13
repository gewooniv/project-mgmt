import NewProject from "./NewProject";
import NoProject from "./NoProject";
import Project from "./Project";

export default function Content({
  onCreate,
  handleSave,
  projectsState,
  inputTitle,
  inputDescription,
  inputDueDate,
}) {
  function renderSwitch(projectsState) {
    if (projectsState.selectedProjectId === null) {
      return (
        <NewProject
          label="TITLE"
          handleSave={handleSave}
          inputTitle={inputTitle}
          inputDescription={inputDescription}
          inputDueDate={inputDueDate}
        />
      );
    } else if (projectsState.selectedProjectId === undefined) {
      return <NoProject onCreate={onCreate} />;
    } else {
      return (
        <Project
          project={projectsState.projects[projectsState.selectedProjectId]}
        />
      );
    }
  }

  return (
    <div className="grid justify-items-center px-8 py-16 " id="content">
      {renderSwitch(projectsState)}
    </div>
  );
}
