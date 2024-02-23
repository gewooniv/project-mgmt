import NewProject from "./NewProject";
import NoProject from "./NoProject";
import Project from "./Project";

export default function Content({ isCreating, onCreate, handleSave, projects, selectedProject, input }) {
    function renderSwitch(isCreating, selectedProject, projects) {
        switch(isCreating) {
            case true:
                return <NewProject label="TITLE" handleSave={handleSave} input={input} />;
            case selectedProject == undefined:
                console.log(selectedProject)
                return <Project project={projects[selectedProject]} />;
            default:
                return <NoProject onCreate={onCreate}/>;
        }
      }

    return (
        <div className="grid justify-items-center px-8 py-16 " id="content">
            {renderSwitch(isCreating, selectedProject, projects)}
        </div>
    )
}