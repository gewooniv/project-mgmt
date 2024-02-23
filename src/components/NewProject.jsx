import InputField from "./InputField";

export default function NewProject({ handleSave, input }) {

    return (
        <div className="grid justify-items-center" id="content">
            <button>Cancel</button>
            <button onClick={handleSave}>Save</button>
            <InputField label="LABEL" input={input} />
        </div>
    )
}