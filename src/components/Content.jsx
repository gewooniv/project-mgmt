import NewProject from "./NewProject";
import NoProject from "./NoProject";
import Project from "./Project";

export default function Content({ isCreating, onCreate, handleSave, projects, selectedProject }) {
    function renderSwitch(isCreating, selectedProject, projects) {
        switch(isCreating) {
            case true:
                return <NewProject label="TITLE" handleSave={handleSave}/>;
            case selectedProject == undefined:
                console.log(selectedProject)
                return <Project project={projects[selectedProject]} />;
            default:
                return <NoProject onCreate={onCreate}/>;
        }
      }

    return (
        <div className="grid justify-items-center" id="content">
            {renderSwitch(isCreating, selectedProject, projects)}
        </div>
    )
}