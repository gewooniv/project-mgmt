import NewProject from "./NewProject";
import NoProject from "./NoProject";
import Project from "./Project";

export default function Content({
  onCreate,
  onCancel,
  onDelete,
  onAddProject,
  onAddTasks,
  onDeleteTasks,
  projectsState,
}) {
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );

  function renderSwitch(projectsState) {
    if (projectsState.selectedProjectId === null) {
      return (
        <NewProject
          label="TITLE"
          onAddProject={onAddProject}
          onCancel={onCancel}
        />
      );
    } else if (projectsState.selectedProjectId === undefined) {
      return <NoProject onCreate={onCreate} />;
    } else {
      return (
        <Project
          project={selectedProject}
          tasks={projectsState.tasks}
          onDelete={onDelete}
          onAddTasks={onAddTasks}
          onDeleteTasks={onDeleteTasks}
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
